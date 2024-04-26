import dayjs, { Dayjs } from 'dayjs';

export enum DatePickerType {
	Date = 'date',
	DateTime = 'dateTime',
	Time = 'time',
	Month = 'month',
	Year = 'year'
}

export const POSTGRES_DATE_FORMAT = 'YYYY-MM-DD';

/**************************************
 * Parsing and formatting functions
 *************************************/
// Format a date as a string
export const formatDate = (date: Dayjs, format = POSTGRES_DATE_FORMAT): string => date.format(format);

// Parse a date string and format it using Day.js
export const parseAndFormatDate = (
	dateString: string,
	format = 'DD/MM/YYYY hh:mma',
	parseOptions?: dayjs.OptionType
): string => {
	const parsedDate = dayjs(dateString, parseOptions);
	return parsedDate.isValid() ? parsedDate.format(format) : '-';
};

/**************************************
 * Date retrieval functions
 *************************************/
// Get the current date
export const getCurrentDate = (): Dayjs => dayjs();

// Get the current start of week
export const getCurrentStartOfWeek = (): Dayjs => dayjs().startOf('isoWeek');

// Get the current end of week
export const getCurrentEndOfWeek = (): Dayjs => dayjs().endOf('isoWeek');

// Get the current start of month
export const getCurrentStartOfMonth = (): Dayjs => dayjs().startOf('month');

// Calculate the difference in days between two dates
export const getDaysDiff = (date1: Dayjs, date2: Dayjs): number => date2.diff(date1, 'day');

// Check if two dates are the same
export const isSameDay = (date1: Dayjs, date2: Dayjs): boolean => date1.isSame(date2, 'day');

// Check if a date is today
export const isToday = (date: Dayjs): boolean => date.isSame(dayjs(), 'day');

// Check if a date is yesterday
export const isYesterday = (date: Dayjs): boolean => date.isSame(dayjs().subtract(1, 'day'), 'day');

// Check if a date is in the past
export const isPastDate = (date: Dayjs): boolean => date.isBefore(dayjs(), 'day');

// Check if a date is in the future
export const isFutureDate = (date: Dayjs): boolean => date.isAfter(dayjs(), 'day');

// Check if a date is in this week
export const isThisWeek = (date: Dayjs): boolean => date.isSame(dayjs(), 'week');

// Check if a date is in the past week
export const isPastWeek = (date: Dayjs): boolean => date.isBefore(dayjs(), 'week');

// Check if a date is in the future
export const isNextWeek = (date: Dayjs): boolean => date.isAfter(dayjs(), 'week');

// Check if a date is in this month
export const isThisMonth = (date: Dayjs): boolean => date.isSame(dayjs(), 'month');

// Check if two dates are the same
export const areDatesEqual = (date1: Dayjs, date2: Dayjs): boolean => date1.isSame(date2, 'day');

// Get the number of days in a specific month of a year
export const getDaysInMonth = (year: number, month: number): number => dayjs(`${year}-${month}`).daysInMonth();

// Get the day of the week for a specific date
export const getDayOfWeek = (date: Dayjs): number => date.day();

// Get minutes ago
export const getMinutesAgo = (date: Dayjs): number => dayjs().diff(date, 'minute');

// Get hours ago
export const getHoursAgo = (date: Dayjs): number => dayjs().diff(date, 'hour');

// Get days ago
export const getDaysAgo = (date: Dayjs): number => dayjs().diff(date, 'day');

// Get weeks ago
export const getWeeksAgo = (date: Dayjs): number => dayjs().diff(date, 'week');

// Get months ago
export const getMonthsAgo = (date: Dayjs): number => dayjs().diff(date, 'month');

// Get years ago
export const getYearsAgo = (date: Dayjs): number => dayjs().diff(date, 'year');

/**************************************
 * Date manipulation functions
 *************************************/
// Add a specific number of days to a date
export const addDays = (date: Dayjs, days: number): Dayjs => date.add(days, 'day');

// Subtract a specific number of days from a date
export const subtractDays = (date: Dayjs, days: number): Dayjs => date.subtract(days, 'day');

export const calculateTimingAbbreviation = (dateString: string): string => {
	const dayJsDate = dayjs(dateString);

	if (!dayJsDate.isValid()) return '';

	const dateIsToday = isToday(dayJsDate);
	const dateIsYesterday = isYesterday(dayJsDate);
	const dateIsPastDate = isPastDate(dayJsDate);

	if (dateIsToday) {
		const minutesAgo = getMinutesAgo(dayJsDate);
		if (minutesAgo < 1) {
			return 'Just now';
		}
		if (minutesAgo < 60) {
			return `${minutesAgo}min`;
		}
		const hoursAgo = getHoursAgo(dayJsDate);
		return `${hoursAgo}h`;
	}
	if (dateIsYesterday) {
		return 'Yesterday';
	}
	if (dateIsPastDate) {
		const daysAgo = getDaysAgo(dayJsDate);
		if (daysAgo < 7) {
			return `${daysAgo}d`;
		}
		if (daysAgo < 30) {
			const weeksAgo = getWeeksAgo(dayJsDate);
			return `${weeksAgo}wk`;
		}
		if (daysAgo < 365) {
			const monthsAgo = getMonthsAgo(dayJsDate);
			return `${monthsAgo}mo`;
		}
		const yearsAgo = getYearsAgo(dayJsDate);
		return `${yearsAgo}yr`;
	}
	return 'Unknown';
};

export const getStartEndForDate = (date: Dayjs) => {
	const startDay = formatDate(date.startOf('day'), POSTGRES_DATE_FORMAT);
	const endDay = formatDate(date.endOf('day'), POSTGRES_DATE_FORMAT);
	return { startDay, endDay };
};
