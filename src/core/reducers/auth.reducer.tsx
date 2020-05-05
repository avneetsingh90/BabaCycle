import { updateObject } from '../../helpers/utility.helper';
import {initialState} from '../state/auth.state';
import authType from '../types/auth.type'; 
import IAuth from '../models/IAuth';
import {LoginStartAction,LoginSuccessAction,LoginFailedAction,LoginLoggedAction} from '../types/auth.type';

const loginStart = (oldState: IAuth, action: LoginStartAction) => {
	return updateObject(oldState, { error: null, loading: true });
};

const loginSuccess = (oldState:IAuth, action:LoginSuccessAction) => {
    return updateObject(oldState, {
        token: action.payload.AuthToken,
        userName: action.payload.UserName,
        userId: action.payload.UserId,
        employeeId:action.payload.EmployeeId,
        userEmail: action.payload.Email,
        userType: action.payload.UserType,
        error: null,
        loading: false
    });
};

const loginFailed = (oldState:IAuth, action: LoginFailedAction) => {
	return updateObject(oldState, {
		error: action.payload,
		loading: false
	});
};

const loginLogged = (oldState:IAuth, action: LoginLoggedAction) => {
	return updateObject(oldState, {
		error: action.payload,
		logged: true,
		loading: false
	});
};

const logoutSuccess = (oldState:any, action:any) => {
    return updateObject(oldState, {
        token: ''
    });
};

const authReducer = (oldState:IAuth = initialState, action:any) => {
    switch (action.type) {
        case authType.LOGIN_START: return loginStart(oldState, action);
        case authType.LOGIN_SUCCESS: return loginSuccess(oldState, action);
        case authType.LOGIN_LOGGED: return loginLogged(oldState, action);
        case authType.LOGIN_FAILED: return loginFailed(oldState, action);
        case authType.LOGOUT_SUCCESS: return logoutSuccess(oldState, action);
        case authType.UPDATE_AUTH: return loginSuccess(oldState, action);
        default: return oldState;    
    }
};
export default authReducer;