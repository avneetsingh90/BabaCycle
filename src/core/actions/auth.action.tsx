import base64 from 'base-64';
import authType from '../types/auth.type'; 
import { Dispatch } from 'redux';
import  ILogin from '../../models/ILogin';
import URLConstants from '../constants/url.constants';
import * as services from '../services/services'; 

export const loginStart = () => {
	return {
		type: authType.LOGIN_START
	};
};

const loginSuccess = (data:any) => {
	return {
		type: authType.LOGIN_SUCCESS,
		payload:data
	};
};

export const loginFailed = (error:string) => {
	if (error == 'logged') {
		return {
			type: authType.LOGIN_LOGGED,
			payload: error
		};
	}
	else {
		return {
			type: authType.LOGIN_FAILED,
			payload: error
		};
	}
};

const logoutSuccess = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	return {
		type: authType.LOGOUT_SUCCESS
	};
};

const updateAuthSuccess = (data:any) => {
	return {
		type: authType.UPDATE_AUTH,
		payload:data
	};
};

export const login = (data:ILogin) => {	
	return (dispatch:Dispatch) => {
		dispatch(loginStart());
		const authData = { username: data.username, password: base64.encode(data.password) };
		services.post(URLConstants.Authenticate, authData)
            .then((response:any) => {
				if (response.data == "" || response.data.AuthToken == null)
					dispatch(loginFailed("Username or password is incorrect."));
				else {
					const expirationDate = new Date(new Date().getTime() + response.data.expires_in * 1000);
					localStorage.setItem('token', response.data.AuthToken);
					localStorage.setItem('requestId', response.data.RequestId);
					localStorage.setItem('expirationDate', expirationDate.toString());
                    localStorage.setItem('userName', response.data.UserName);
                    localStorage.setItem('userId', response.data.UserId);
					localStorage.setItem('employeeId', response.data.EmployeeId);
                    localStorage.setItem('userEmail', response.data.Email);
                    localStorage.setItem('userType', response.data.UserType);
                    localStorage.setItem('modulePermission', response.data.Modules);
					dispatch(loginSuccess(response.data));
         		}
			})
            .catch(err => {
				dispatch(loginFailed(err));
			});
	};

};

export const updateAuth = () => {
	return (dispatch: Dispatch) => {
		let data = {
			AuthToken: localStorage.getItem('token'),
			UserName: localStorage.getItem('userName'),
			UserId: localStorage.getItem('userId'),
			Email: localStorage.getItem('userEmail'),
			UserType: localStorage.getItem('userType'),
			EmployeeId:localStorage.getItem('employeeId'),
		}
		dispatch(updateAuthSuccess(data));
	};
};

export const logout = () => {
	return (dispatch: Dispatch) => {
		dispatch(logoutSuccess());
	};
};

