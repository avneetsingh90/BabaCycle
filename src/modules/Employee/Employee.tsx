import React, { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import { faTrashAlt, faEdit, faKey } from '@fortawesome/free-solid-svg-icons';
import DeletePopup from '../../shared/components/Popup/DeletePopup';
import ChangePasswordPopup from '../Auth/ChangePasswordPopup';
import DeletePopupHOC from '../../shared/components/Popup/hoc/DeletePopupHOC';
import ChangePasswordPopupHOC from '../Auth/hoc/ChangePasswordPopupHOC';
import {ButtonFormatter} from '../../shared/components/Grid/GridFormatter';
import Grid from '../../shared/components/Grid/Grid';
import AddEmployeePopupHOC from './hoc/AddEmployeePopupHOC';
import AddEmployee from './AddEmployee';
import { connect } from 'react-redux';
import IState from '../../core/models/IState';
import * as actions from '../../core/actions/actions';
import { employeesGrid } from '../../core/selectors/employee.selector';
import Loader from '../../shared/components/Loader/Loader';

const Employee = (props:any) => {
  const [selectedId,setSelectedId] = useState<number>(0);
  const [isDelete,setIsDelete] = useState<boolean>(false);
  
  useEffect(() => {
    props.getAllUser();
  }, []);

  useEffect(() => {
    if(props.deleteEmployeeState.success)
    {
      toast.success("Employee deleted successfully.");
      props.resetDeleteEmployeeState();
      props.deletePopupToggleHandler();
      props.getAllUser();
    }
  }, [props.deleteEmployeeState.success]);

  useEffect(() => {
    if(props.deleteEmployeeState.error != null)
      toast.error("Some error occured.");
  }, [props.deleteEmployeeState.error]);

useEffect(() => {
    if(props.addEmployeeSuccess)
    {
      props.getAllUser();
    }
  }, [props.addEmployeeSuccess]);

  const openAddEmployeeHandler = (id:number,isDeleteParam:boolean) => {
    setSelectedId(id);
    setIsDelete(isDeleteParam);
    props.addEmployeeToggleHandler();
  } 

  const deleteHandler = () => {
    //write api calling to delete record.
    props.deleteEmployee(selectedId);
    //
  }

  const deleteClickHandler = (id:number) => {
    setSelectedId(id);
    props.deletePopupToggleHandler();
  }
  
  // const editClickHandler = (id:number) => {
  //   setSelectedId(id);
  //   openAddEmployeeHandler
  //   //setShowDeletePopup(true);
  // }

  const changePasswordClickHandler = (id:number) => {
    setSelectedId(id);
    props.changePasswordPopupToggleHandler();
  }
  
  const columns:any[] = [{
    dataField: 'id',
    text: 'Employee ID'
  }, {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'entranceDate',
    text: 'Entrance Date'
  }, {
    dataField: 'edit',
    text: 'Edit',
    formatter: ButtonFormatter(openAddEmployeeHandler,faEdit,false)
  }
  , {
    dataField: 'delete',
    text: 'Delete',
    formatter: ButtonFormatter(deleteClickHandler,faTrashAlt,true)
  }, {
    dataField: 'changePassword',
    text: 'Change Password',
    formatter: ButtonFormatter(changePasswordClickHandler,faKey,false)
  }];

return(
<React.Fragment>
  {
    props.showAddEmployeePopup && 
    <AddEmployee 
      id={selectedId} 
      isDelete={isDelete}
      modalClosed={props.addEmployeeToggleHandler}/>
  }  
  {
    props.showDeletePopup && 
    <DeletePopup 
      modalSubmit={deleteHandler} 
      modalClosed={props.deletePopupToggleHandler}
      isLoading={props.deleteEmployeeState.loading}/>
  }
  {
    props.showChangePasswordPopup && 
    <ChangePasswordPopup 
      id={selectedId} 
      modalClosed={props.changePasswordPopupToggleHandler}
      isAdmin={true}/> 
  }
  <div className="card card-default">
    <div className="card-header card-header-border-bottom">
      <h2>Employee list</h2>
      <a data-toggle="modal" onClick={() => openAddEmployeeHandler(-1,false)} data-target="#addUser">
        <i className="fa fa-plus-circle add-button" aria-hidden="true"></i>
      </a>
    </div>
    <div className="card-body">
      <div className="table-responsive">
      {props.loading ?  
        <Loader/> :
        props.employeesGrid && <Grid
          data={ props.employeesGrid }
          columns={ columns }
        />
        }
      </div>
    </div>
</div>
</React.Fragment>
)
}

const mapStateToProps = (state: IState) => ({
  employeesGrid:employeesGrid(state),
  loading:state.employee.employeeList.loading,
  deleteEmployeeState:state.employee.deleteEmployee,
  addEmployeeSuccess:state.employee.addEmployee.success,
});

const mapDispatchToProps = (dispatch:any) => {
	return {
    getAllUser: () =>	dispatch(actions.getAllUser()),
    deleteEmployee:(id:number) => dispatch(actions.deleteEmployee(id)),
    resetDeleteEmployeeState:() =>dispatch(actions.resetDeleteEmployeeState())
	};
};

export default connect(mapStateToProps,mapDispatchToProps)
(AddEmployeePopupHOC(ChangePasswordPopupHOC(DeletePopupHOC(Employee))));