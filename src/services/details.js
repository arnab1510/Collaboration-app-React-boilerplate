import axios from 'axios';
import { BASE_URL } from './environment';
import { getDataOptions, postDataOptions } from './backendService';

// APIs
const FETCH_CREATOR = 'user/creator/details/';
const FETCH_SERIES = 'series/details/';
const FETCH_PODCAST = 'podcast/details/';
const FETCH_BLOG = 'blog/details/';
const FETCH_ORG = 'org/details/';

// Services
export const creatorDetails = async id => {
	try {
		const response = await axios(getDataOptions(BASE_URL, FETCH_CREATOR+id));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const seriesDetails = async id => {
	try {
		const response = await axios(getDataOptions(BASE_URL, FETCH_SERIES+id));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const podcastDetails = async id => {
	try {
		const response = await axios(getDataOptions(BASE_URL, FETCH_PODCAST+id));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const blogDetails = async id => {
	try {
		const response = await axios(getDataOptions(BASE_URL, FETCH_BLOG+id));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const orgDetails = async id => {
	try {
		const response = await axios(getDataOptions(BASE_URL, FETCH_ORG+id));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};