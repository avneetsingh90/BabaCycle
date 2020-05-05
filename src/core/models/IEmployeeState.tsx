
interface IEmployeeState{
	employeeList: {
        employees:any;
        error: any;
	    loading: boolean;
    },
    deleteEmployee:{
        success:boolean;
        error: any;
	    loading: boolean;
    },
    addEmployee:{
        success:boolean;
        error: any;
	    loading: boolean;
    },
    employee:{
        employee:any;
        error: any;
	    loading: boolean;
    },
    countries:{
        countries:any;
        error: any;
    },
    bankDetails:{
        bankDetails:any;
        error: any;
    }
};
export default IEmployeeState;

