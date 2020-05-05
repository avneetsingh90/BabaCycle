import React,{useEffect} from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import './AddEmployeeForm.css';
import AddEmployeeForm from './components/AddEmployeeForm';
import IState from '../../core/models/IState';
import * as actions from  '../../core/actions/actions';
import {reset} from 'redux-form';
import { countriesSelector,bankDetailsSelector } from '../../core/selectors/employee.selector';
interface Props { 
    id:number;
    modalClosed: () => void;
}
    
const AddEmployee = (props:any) => {
  useEffect(() => {
    if(props.id>0)
    {
      props.getEmployeeById(props.id);
    }
    props.getAllCountryDetails();
	  props.getAllBankDetails();
  }, []);
  
  useEffect(() => {
    if(props.addEmployeeState.success)
    {
      if(props.id == -1)
        toast.success("Employee added successfully.");
      else
        toast.success("Employee updated successfully.");
       props.resetAddEmployeeState();
       props.resetGetEmployeeByIdState();
       props.resetAddEmployeeForm();
       props.modalClosed();
    }
  }, [props.addEmployeeState.success]);
 
  useEffect(() => {
    if(props.addEmployeeState.error != null)
      toast.error(props.addEmployeeState.error);
  }, [props.addEmployeeState.error]);
  
  const onSubmitForm = (values:any) => {
      props.addEmployee(props.id,values);
  }

    const onModalClosed = () => {
      props.resetAddEmployeeState();
      props.resetGetEmployeeByIdState(); 
      props.resetAddEmployeeForm();
      props.modalClosed();
    }


    return (
      <React.Fragment>
          <AddEmployeeForm 
          id={props.id}
          isDelete={props.isDelete}
          submitHandler={onSubmitForm} 
          onModalClosed={onModalClosed}
          countryList={props.countryList}
          bankDetailsList={props.bankDetailsList}
          getEmployeeLoading={props.employee.loading}
          addEmployeeLoading={props.addEmployeeState.loading}
          />
          </React.Fragment>
    ); 
};

const mapStateToProps = (state: IState) => ({
  addEmployeeState:state.employee.addEmployee,
  employee:state.employee.employee,
  countryList:countriesSelector(state),
  bankDetailsList:bankDetailsSelector(state)
});

const mapDispatchToProps = (dispatch:any) => {
  return {
    resetAddEmployeeState:() => dispatch(actions.resetAddEmployeeState()),
	  addEmployee: (id:number,data:any) =>	dispatch(actions.addEmployee(id,data)),
	  resetGetEmployeeByIdState:() => dispatch(actions.resetGetEmployeeByIdState()),
	  getEmployeeById: (data:any) =>	dispatch(actions.getEmployeeById(data)),
    resetAddEmployeeForm:() => dispatch(reset('AddEmployeeForm')),
    getAllCountryDetails:() => dispatch(actions.getAllCountryDetails()),
	  getAllBankDetails:() => dispatch(actions.getAllBankDetails())
  }; 
};
    
export default connect(mapStateToProps,mapDispatchToProps)(AddEmployee);
