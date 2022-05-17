import axios from 'axios';
import { BASE_URL } from './environment';
import { postDataOptions } from '../services/backendService';

// APIs
const SEND_OTP_API = 'api/v2/login';

// Services
export const sendOTPService = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, SEND_OTP_API, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};