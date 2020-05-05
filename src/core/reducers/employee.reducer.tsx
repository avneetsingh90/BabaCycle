import { updateObject } from '../../helpers/utility.helper';
import {initialState} from '../state/employee.state';
import employeeType from '../types/employee.type'; 
import IEmployeeState from '../models/IEmployeeState';

const getAllUserStart = (oldState: IEmployeeState, action: any) => {
    return updateObject(oldState, {
        employeeList:updateObject(oldState.employeeList, {
            error: null, loading: true
        })
    });
};

const getAllUserSuccess = (oldState:IEmployeeState, action:any) => {
    return updateObject(oldState, {
        employeeList:updateObject(oldState.employeeList, {
        employees: action.payload,
        error: null,
        loading: false
        })
    });
};

const getAllUserError = (oldState:IEmployeeState, action: any) => {
    return updateObject(oldState, {
        employeeList:updateObject(oldState.employeeList, {
        error: action.payload,
        loading: false
        })
    });
};

const deleteEmployeeStart = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        deleteEmployee:updateObject(oldState.deleteEmployee, {
        loading: true
        })
    });
};

const deleteEmployeeSuccess = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        deleteEmployee:updateObject(oldState.deleteEmployee, {
        success:true,
        error: null,
	    loading: false        
        })
    });
};

const deleteEmployeeError = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        deleteEmployee:updateObject(oldState.deleteEmployee, {
        success:false,
        error: 'Some Error Occured',
	    loading: false
        })
    });
};

const resetDeleteEmployeeState = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        deleteEmployee:initialState.deleteEmployee
    });
};

const addEmployeeStart = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        addEmployee:updateObject(oldState.addEmployee, {
        loading: true,
        success:false,
        error: null
        })
    });
};

const addEmployeeSuccess = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        addEmployee:updateObject(oldState.addEmployee, {
        success:true,
        error: null,
	    loading: false        
        })
    });
};

const addEmployeeError = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        addEmployee:updateObject(oldState.addEmployee, {
        success:false,
        error: action.payload,
	    loading: false
        })
    });
};

const resetAddEmployeeState = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        addEmployee:initialState.addEmployee
    });
};

const getEmployeeByIdStart = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        employee:updateObject(oldState.employee, {
        loading: true
        })
    });
};

const getEmployeeByIdSuccess = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        employee:updateObject(oldState.employee, {
        employee:action.payload,
        error: null,
	    loading: false        
        })
    });
};

const getEmployeeByIdError = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        employee:updateObject(oldState.employee, {
        employee:null,
        error: 'Some Error Occured',
	    loading: false
        })
    });
};

const resetGetEmployeeByIdState = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        employee:initialState.employee
    });
};

const getAllCountryDetailsSuccess = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        countries:updateObject(oldState.countries, {
        countries:action.payload,
        error: null
	    })
    });
};

const getAllCountryDetailsError = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        countries:updateObject(oldState.countries, {
        countries:[],
        error: 'Some Error Occured'
	    })
    });
};

const getAllBankDetailsSuccess = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        bankDetails:updateObject(oldState.bankDetails, {
        bankDetails:action.payload,
        error: null        
        })
    });
};

const getAllBankDetailsError = (oldState:IEmployeeState, action: any) => {
	return updateObject(oldState, {
        bankDetails:updateObject(oldState.bankDetails, {
        bankDetails:[],
        error: 'Some Error Occured'
        })
    });
};
const employeeReducer = (oldState:IEmployeeState = initialState, action:any) => {
    switch (action.type) {
        case employeeType.GET_ALL_USER_START: return getAllUserStart(oldState, action);
        case employeeType.GET_ALL_USER_SUCCESS: return getAllUserSuccess(oldState, action);
        case employeeType.GET_ALL_USER_ERROR: return getAllUserError(oldState, action);
        case employeeType.DELETE_EMPLOYEE_START: return deleteEmployeeStart(oldState, action);
        case employeeType.DELETE_EMPLOYEE_SUCCESS: return deleteEmployeeSuccess(oldState, action);
        case employeeType.DELETE_EMPLOYEE_ERROR: return deleteEmployeeError(oldState, action);
        case employeeType.RESET_DELETE_EMPLOYEE_STATE: return resetDeleteEmployeeState(oldState, action);
        case employeeType.ADD_EMPLOYEE_START: return addEmployeeStart(oldState, action);
        case employeeType.ADD_EMPLOYEE_SUCCESS: return addEmployeeSuccess(oldState, action);
        case employeeType.ADD_EMPLOYEE_ERROR: return addEmployeeError(oldState, action);
        case employeeType.RESET_ADD_EMPLOYEE_STATE: return resetAddEmployeeState(oldState, action);
        case employeeType.GET_EMPLOYEE_BY_ID_START: return getEmployeeByIdStart(oldState, action);
        case employeeType.GET_EMPLOYEE_BY_ID_SUCCESS: return getEmployeeByIdSuccess(oldState, action);
        case employeeType.GET_EMPLOYEE_BY_ID_ERROR: return getEmployeeByIdError(oldState, action);
        case employeeType.RESET_GET_EMPLOYEE_BY_ID_STATE: return resetGetEmployeeByIdState(oldState, action);
        case employeeType.GET_COUNTRY_DETAILS_SUCCESS: return getAllCountryDetailsSuccess(oldState, action);
        case employeeType.GET_COUNTRY_DETAILS_ERROR: return getAllCountryDetailsError(oldState, action);
        case employeeType.GET_BANK_DETAILS_SUCCESS: return getAllBankDetailsSuccess(oldState, action);
        case employeeType.GET_BANK_DETAILS_ERROR: return getAllBankDetailsError(oldState, action);
        default: return oldState;    
    }
};
export default employeeReducer;