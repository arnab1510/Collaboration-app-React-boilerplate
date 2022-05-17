import { takeLatest, all } from 'redux-saga/effects';
import {
  CHECK_MOBILE,
} from '../actions/types';
// import { checkMobile, logoutUser, registerUser, sendOtp, updateMobile, verifyEmail, verifyOTP } from './authentications';

export default function* sagas() {
  yield all([
    takeLatest(CHECK_MOBILE)
  ]);
}
