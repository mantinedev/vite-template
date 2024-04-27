import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import 'mantine-react-table/styles.css'; //import MRT styles

import { AuthProvider } from './providers/AuthProvider';
import { Router } from './Router';
import { theme } from './theme';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 20 * 1000, // 20 seconds
			gcTime: 1000 * 60 * 60 * 24, // 24 hours
			refetchOnWindowFocus: false,
			retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // The default retryDelay is set to double (starting at 1000ms) with each attempt, but not exceed 30 seconds:
			retry: 1
		}
	}
});

//Enable global dayjs to parse custom date formats
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(isoWeek);
dayjs.extend(utc);

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<ModalsProvider>
					<AuthProvider>
						<Router />
						<Notifications position="bottom-right" />
					</AuthProvider>
				</ModalsProvider>
			</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
