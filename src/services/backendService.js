// import { AppStorageKeys } from '../contracts';
// export const getAccessTokenFromLocalStorage = () => localStorage.getItem(AppStorageKeys.userAccessToken);

// const setHeaders = (isFormData, assessToken) => {
// 	const additionalHeaders = {};
// 	if (isFormData) {
// 		additionalHeaders['Content-Type'] = 'multipart/form-data';
// 	} else {
// 		additionalHeaders['Content-Type'] = 'application/json';
// 	}
// 	return additionalHeaders;
// };

// export const getOptionsWithHKAccessToken = (baseURL, url) => {
// 	const options = {};
// 	options['method'] = 'get';
// 	options['baseURL'] = baseURL;
// 	options['url'] = url;

// 	const additionalHeaders = {};
// 	additionalHeaders['hk-access-token'] = localStorage.getItem(AppStorageKeys.userAccessToken) === null ? '' : localStorage.getItem(AppStorageKeys.userAccessToken);
// 	options['headers'] = additionalHeaders;
// 	return options;
// };

// const setOptions = (method, baseURL, url) => {
// 	const options = {};
// 	options['method'] = method;
// 	options['baseURL'] = baseURL;
// 	options['url'] = url;
// 	return options;
// };

// export const getDataOptions = (baseUrl, url, assessToken = null) => {
// 	const options = setOptions('get', baseUrl, url);
// 	options['headers'] = setHeaders(false, assessToken);
// 	return options;
// };

// export const postDataOptions = (baseUrl, url, data = null, isFormData = false, assessToken = null) => {
// 	const options = setOptions('post', baseUrl, url);
// 	if (data) {
// 		options['data'] = data;
// 	}
// 	options['headers'] = setHeaders(isFormData, assessToken);
// 	return options;
// };

// export const putDataOptions = (baseUrl, url, data = null, isFormData = false, assessToken = null) => {
// 	const options = setOptions('put', baseUrl, url);
// 	if (data) {
// 		options['data'] = data;
// 	}
// 	options['headers'] = setHeaders(isFormData, assessToken);
// 	return options;
// };

// export const deleteDataOptions = (baseUrl, url, assessToken = null) => {
// 	const options = setOptions('delete', baseUrl, url);
// 	options['headers'] = setHeaders(false, assessToken);
// 	return options;
// };

// export const getDataOptionsWithoutHeader = (baseUrl, url) => {
// 	const options = setOptions('get', baseUrl, url);
// 	return options;
// };
