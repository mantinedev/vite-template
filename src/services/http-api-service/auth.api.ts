import { backendAPIAxiosInstance } from './axios-instance';

export enum RoleType {
	Admin = 'ADMIN',
	User = 'USER'
}

export type PostAuthLoginRequestBody = {
	email: string;
	password: string;
};
export type PostAuthRegisterRequestBody = PostAuthLoginRequestBody;

export type User = {
	email: string;
	isEmailConfirmed: boolean;
	role?: RoleType;
};

export const authHttpService = {
	postAuthLogin: (data: PostAuthLoginRequestBody) => backendAPIAxiosInstance.post(`/login?useCookies=true`, data),
	postAuthRegister: (data: PostAuthRegisterRequestBody) => backendAPIAxiosInstance.post(`/register`, data),
	getAuthMeInfo: () => backendAPIAxiosInstance.get<User>(`/manage/info`)
};
