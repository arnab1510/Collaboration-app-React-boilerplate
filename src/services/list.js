import axios from 'axios';
import { BASE_URL } from './environment';
import { getDataOptions, postDataOptions } from './backendService';

// APIs
const LIST_CREATOR = 'user/creator/all';
const LIST_SERIES = 'series/all';
const LIST_PODCAST = 'podcasts/all';
const LIST_BLOG = 'blogs/all';
const LIST_ORG = 'orgs/all';

// Services
export const creatorList = async payload => {
	try {
		const response = await axios(getDataOptions(BASE_URL, LIST_CREATOR));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const seriesList = async payload => {
	try {
		const response = await axios(getDataOptions(BASE_URL, LIST_SERIES));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const podcastList = async payload => {
	try {
		const response = await axios(getDataOptions(BASE_URL, LIST_PODCAST));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const blogList = async payload => {
	try {
		const response = await axios(getDataOptions(BASE_URL, LIST_BLOG));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const organisationList = async payload => {
	try {
		const response = await axios(getDataOptions(BASE_URL, LIST_ORG));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};