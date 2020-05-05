import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import IState from '../models/IState';
import authReducer from '../reducers/auth.reducer';
import employeeReducer from './employee.reducer';
import changePasswordReducer from './changePassword.reducer';

export default combineReducers<IState>({
	form: reducerForm,
	auth: authReducer,
	employee:employeeReducer,
	changePassword:changePasswordReducer
});
