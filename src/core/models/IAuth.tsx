
interface IAuth{
	token: string;
	logged: boolean;
    userName: string;
	employeeId:string;
    userId: number;
    userEmail: string;
    userType: number;
	error: string | null;
	loading: boolean;
	authRedirectPath: string;
};
export default IAuth;

 