export type User = {
	id: string;
	userName: string;
	email: string;
	emailConfirmed: boolean;
	isDeleted: boolean;
	role: RoleType;
};

export enum RoleType {
	Admin = 'ADMIN',
	User = 'USER'
}
