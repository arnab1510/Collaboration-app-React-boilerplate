let BASE_URL;

if (process.env.REACT_APP_ENV === 'development') {
	BASE_URL = 'https://stgadminapi.prodstacks.com/api';
}
// if (process.env.REACT_APP_ENV === 'development') {
// 	BASE_URL = 'http://localhost:8080/api/';
// }
if (process.env.REACT_APP_ENV === 'production') {
	BASE_URL = 'https://prodstack-dev.herokuapp.com/api/';
}

export { BASE_URL };

export const APP_VERSON = '1.0.0';
