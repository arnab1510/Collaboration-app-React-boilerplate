import axios from 'axios';
import { BASE_URL } from './environment';
import { postDataOptions } from './backendService';

// APIs
const CREATE_CREATOR = 'user/creator/create';
const CREATE_SERIES = 'series/create';
const CREATE_EPISODE = 'series/create/episode';
const CREATE_PODCAST = 'podcast/create';
const CREATE_PODCAST_EPISODE = 'podcast/create/episode';
const CREATE_BLOG = 'blog/create';
const CREATE_ORG = 'org/create';

// Services
export const creatorCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_CREATOR, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const seriesCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_SERIES, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const episodeCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_EPISODE, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const podcastCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_PODCAST, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const podcastEpisodeCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_PODCAST_EPISODE, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const blogCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_BLOG, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const orgCreate = async payload => {
	try {
		const response = await axios(postDataOptions(BASE_URL, CREATE_ORG, payload));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};
