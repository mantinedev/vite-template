import axios from 'axios';

const AXIOS_TIMEOUT = 10000;

export const backendAPIAxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_API_URL,
	timeout: AXIOS_TIMEOUT,
	withCredentials: true,

	headers: {
		'Content-Type': 'application/json'
	}
});

backendAPIAxiosInstance.interceptors.request.use(
	async config => config,
	error =>
		// Handle request error here
		Promise.reject(error)
);

backendAPIAxiosInstance.interceptors.response.use(
	response =>
		// Modify the response data here (e.g., extract data, handle errors)
		response,
	error => Promise.reject(error)
);
