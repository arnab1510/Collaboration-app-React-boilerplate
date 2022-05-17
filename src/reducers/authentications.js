import {
	CHECK_MOBILE,
} from '../actions/types';

const authentications = (
	state = {
		status: undefined,
		updateMobileStatus: undefined,
		otpVerificationStatus: undefined,
		checkMobile: { isUser: '', message: '' },
		login: {},
		loggedIn: {},
		loggedOut: {},
		registered: {},
		updateMobile: '',
		updateMobileRequest: false,
		mobileDetails: {},
		userDetails: {},
		isRequestedLogin: false,
		authenticationInitiated: false,
		authDrawerInitiated: false
	},
	action
) => {
	switch (action.type) {
		case CHECK_MOBILE:
			return Object.assign({}, state, { status: 'checking', otpVerificationStatus: '' });
		default:
			return state;
	}
};

export default authentications;
