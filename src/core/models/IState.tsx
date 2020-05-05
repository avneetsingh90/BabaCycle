import IAuth from './IAuth';
import IEmployeeState from './IEmployeeState';
import IChangePasswordState from './IChangePasswordState';

interface IState{
	form: any;
	auth: IAuth;
	employee:IEmployeeState;
	changePassword:IChangePasswordState;
};

export default IState;
