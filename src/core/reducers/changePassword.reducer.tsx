import { updateObject } from '../../helpers/utility.helper';
import {initialState} from '../state/changePassword.state';
import actionType from '../types/changePassword.type'; 
import IChangePasswordState from '../models/IChangePasswordState';
import {actionType as defaultType, IActionType } from '../types/type';

const changePasswordStart = (oldState: IChangePasswordState, action: IActionType) => {
	return updateObject(oldState, { error: null, loading: true,success:false });
};

const changePasswordSuccess = (oldState: IChangePasswordState, action: IActionType) => {
	return updateObject(oldState, { error: null, loading: false,success:true });
};

const changePasswordFailed = (oldState: IChangePasswordState, action: any) => {
	return updateObject(oldState, { error: action.payload, loading: false, success:false });
};


const changePasswordInitialState = (oldState: IChangePasswordState, action: any) => {
	return initialState;
};

const changePasswordReducer = (oldState:IChangePasswordState = initialState, action:any) => {
    switch (action.type) {
        case actionType.CHANGE_PASSWORD_START: return changePasswordStart(oldState, action);
        case actionType.CHANGE_PASSWORD_SUCCESS: return changePasswordSuccess(oldState, action);
        case actionType.CHANGE_PASSWORD_FAILED: return changePasswordFailed(oldState, action);
        case defaultType.DEFAULT_STATE: return changePasswordInitialState(oldState, action);
        default: return oldState;    
    }
};
export default changePasswordReducer;