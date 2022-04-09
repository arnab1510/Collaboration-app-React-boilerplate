import axios from 'axios';
import { BASE_URL } from './environment';
import { postDataOptions } from './backendService';

// APIs
const FILE_UPLOAD = 'upload';

// Services
export const fileUpload = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, FILE_UPLOAD, payload, true));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};