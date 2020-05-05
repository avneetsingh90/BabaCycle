import actionType from '../types/changePassword.type'; 
import { Dispatch } from 'redux';
import URLConstants from '../constants/url.constants';
import * as services from '../services/services'; 
import IChangePassword from '../../models/IChangePassword';
import { defaultStateDispatcher } from './common.action';

export const changePasswordStart = () => {
	return {
		type: actionType.CHANGE_PASSWORD_START
	};
};

export const changePasswordSuccess = () => {
	return {
		type: actionType.CHANGE_PASSWORD_SUCCESS
	};
};

export const changePasswordFailed = (error:string) => {
	return {
		type: actionType.CHANGE_PASSWORD_FAILED,
		payload:error
	};
};

export const changePassword = (isAdmin:boolean,data:any) => {	
	return (dispatch:Dispatch) => {
		dispatch(changePasswordStart());
		let url = URLConstants.ChangePassword;
		if(isAdmin)
			url = URLConstants.ChangePasswordByAdmin;
		services.post(url, data)
            .then((response:any) => {
				if(response.data == 0)
				dispatch(changePasswordFailed('Current password is incorrect.'));
				else if(response.data == 1)
				dispatch(changePasswordFailed('New password must be different from Current password.'));
				else if(response.data == 2)
				dispatch(changePasswordSuccess());
				else if(response.data == 3)
				dispatch(changePasswordFailed('Some error occured.'));
			})
            .catch(err => {
				dispatch(changePasswordFailed('Some error occured.'));
			});
	};
};

export const resetChangePasswordState = () => {	
	return (dispatch:Dispatch) => {
		dispatch(defaultStateDispatcher());
	};
};