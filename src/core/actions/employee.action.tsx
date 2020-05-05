import employeeType from '../types/employee.type'; 
import { Dispatch } from 'redux';
import URLConstants from '../constants/url.constants';
import * as services from '../services/services';

const getAllUserStart = () => {
	return {
		type: employeeType.GET_ALL_USER_START
	};
};

const getAllUserSuccess = (data:any) => {
	return {
		type: employeeType.GET_ALL_USER_SUCCESS,
		payload:data
	};
};

const getAllUserError = (data:any) => {
	return {
		type: employeeType.GET_ALL_USER_ERROR,
		payload:data
	};
};

export const getAllUser = () => {
	return (dispatch:Dispatch) => {
		dispatch(getAllUserStart());
        let url = URLConstants.GetAllUser;
		services.get(url)
            .then(response => {
                dispatch(getAllUserSuccess(response.data));
         	})
            .catch(err => {
				dispatch(getAllUserError(err));
			});
	};
};


const deleteEmployeeStart = () => {
	return {
		type: employeeType.DELETE_EMPLOYEE_START
	};
};

const deleteEmployeeSuccess = (data:any) => {
	return {
		type: employeeType.DELETE_EMPLOYEE_SUCCESS,
		payload:data
	};
};

const deleteEmployeeError = (data:any) => {
	return {
		type: employeeType.DELETE_EMPLOYEE_ERROR,
		payload:data
	};
};

const resetDeleteEmployeeDispatcher = () => {
	return {
		type: employeeType.RESET_DELETE_EMPLOYEE_STATE
	};
};

export const resetDeleteEmployeeState = () => {
	return (dispatch:Dispatch) => {
		dispatch(resetDeleteEmployeeDispatcher());
	};
};


export const deleteEmployee = (id:number) => {
	return (dispatch:Dispatch) => {
		dispatch(deleteEmployeeStart());
		let url = URLConstants.DeleteUser + '?Id=' + id;
		services.deleteapi(url)
            .then(response => {
				if(response.data)
                dispatch(deleteEmployeeSuccess(response.data));
				else
				dispatch(deleteEmployeeError('Some error occured.'));
         	})
            .catch(err => {
				dispatch(deleteEmployeeError(err));
			});
	};
};

const addEmployeeStart = () => {
	return {
		type: employeeType.ADD_EMPLOYEE_START
	};
};

const addEmployeeSuccess = (data:any) => {
	return {
		type: employeeType.ADD_EMPLOYEE_SUCCESS,
		payload:data
	};
};

const addEmployeeError = (data:any) => {
	return {
		type: employeeType.ADD_EMPLOYEE_ERROR,
		payload:data
	};
};

const resetAddEmployeeDispatcher = () => {
	return {
		type: employeeType.RESET_ADD_EMPLOYEE_STATE
	};
};

export const resetAddEmployeeState = () => {
	return (dispatch:Dispatch) => {
		dispatch(resetAddEmployeeDispatcher());
	};
};

export const addEmployee = (id:number,data:any) => {
	return (dispatch:Dispatch) => {
		data.UserId = id; 
		data.UserLoginId = data.EmployeeId;
		data.UserDetails.Gender = Number(data.UserDetails.Gender);
		data.UserDetails.AccountType = Number(data.UserDetails.AccountType);
		data.Position = Number(data.Position);
		data.UserDetails.AccountNumber = Number(data.UserDetails.AccountNumber);
		
		dispatch(addEmployeeStart());
		let url = URLConstants.UpdateUser;
		if(id == -1){
			url = URLConstants.AddUser;
			data.UserId = 0;
		}
		services.post(url,{User:data})
            .then(response => {
				dispatch(addEmployeeSuccess(response.data));
				// if(response.data)
                // dispatch(deleteEmployeeSuccess(response.data));
				// else
				//dispatch(addEmployeeError('Some error occured.'));
         	})
            .catch(err => {
				let error = "Some error occured."
				if(err && err.response && err.response.data && err.response.data.error)
					error = err.response.data.error;
				dispatch(addEmployeeError(error));
			});
	};
};

const getEmployeeByIdStart = () => {
	return {
		type: employeeType.GET_EMPLOYEE_BY_ID_START
	};
};

const getEmployeeByIdSuccess = (data:any) => {
	return {
		type: employeeType.GET_EMPLOYEE_BY_ID_SUCCESS,
		payload:data
	};
};

const getEmployeeByIdError = (data:any) => {
	return {
		type: employeeType.GET_EMPLOYEE_BY_ID_ERROR,
		payload:data
	};
};

const resetGetEmployeeByIdDispatcher = () => {
	return {
		type: employeeType.RESET_GET_EMPLOYEE_BY_ID_STATE
	};
};

export const resetGetEmployeeByIdState = () => {
	return (dispatch:Dispatch) => {
		dispatch(resetGetEmployeeByIdDispatcher());
	};
};

export const getEmployeeById = (id:number) => {
	return (dispatch:Dispatch) => {
		dispatch(getEmployeeByIdStart());
		let url = URLConstants.GetUserById + '?UserId=' + id;
		services.get(url)
            .then(response => {
				dispatch(getEmployeeByIdSuccess(response.data));
				// if(response.data)
                // dispatch(getEmployeeByIdSuccess(response.data));
				// else
				// dispatch(getEmployeeByIdError('Some error occured.'));
         	})
            .catch(err => {
				dispatch(getEmployeeByIdError(err));
			});
	};
};

const getAllCountryDetailsSuccess = (data:any) => {
	return {
		type: employeeType.GET_COUNTRY_DETAILS_SUCCESS,
		payload:data
	};
};

const getAllCountryDetailsError = (data:any) => {
	return {
		type: employeeType.GET_COUNTRY_DETAILS_ERROR,
		payload:data
	};
};

export const getAllCountryDetails = () => {
	return (dispatch:Dispatch) => {
		services.get(URLConstants.GetAllCountryDetails)
            .then(response => {
				dispatch(getAllCountryDetailsSuccess(response.data));
	     	})
            .catch(err => {
				dispatch(getAllCountryDetailsError(err));
			});
	};
};

const getAllBankDetailsSuccess = (data:any) => {
	return {
		type: employeeType.GET_BANK_DETAILS_SUCCESS,
		payload:data
	};
};

const getAllBankDetailsError = (data:any) => {
	return {
		type: employeeType.GET_BANK_DETAILS_ERROR,
		payload:data
	};
};

export const getAllBankDetails = () => {
	return (dispatch:Dispatch) => {
		services.get(URLConstants.GetAllBankDetails)
            .then(response => {
				dispatch(getAllBankDetailsSuccess(response.data));
		 	})
            .catch(err => {
				dispatch(getAllBankDetailsError(err));
			});
	};
};