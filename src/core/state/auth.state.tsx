import IAuth from '../models/IAuth';

export const initialState: IAuth= {
    token: '',
    logged: false,
    userName: '',
    employeeId:'',
    userId: -1,
    userEmail: '',
    userType: -1,
	error: null,
	loading: false,
	authRedirectPath: '/'
};
