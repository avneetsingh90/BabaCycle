import React,{useEffect} from 'react';
import { toast } from 'react-toastify';
import {reset} from 'redux-form';
import base64 from 'base-64';
import { connect } from 'react-redux';
import IState from '../../core/models/IState';
import IChangePassword from '../../models/IChangePassword';
import * as actions from  '../../core/actions/actions';
import ChangePasswordForm from './components/ChangePasswordForm';

let ChangePasswordPopup: React.FC<any> = (props:any) => {
 
  useEffect(() => {
    if(props.success)
    {
      toast.success("Password Changed Successfully.");
      props.resetChangePasswordState();
      props.resetChangePasswordForm();
      props.modalClosed();
    }
  }, [props.success]);
 
  useEffect(() => {
    if(props.error != null)
      toast.error(props.error);
  }, [props.error]);
  
  const onSubmitForm = (values:any) => {
        let submitData = {};
        if(props.isAdmin)
        {
            submitData = {
                UserId:props.id,
                NewPassword: base64.encode(values.NewPassword)
            }
        }
        else{
          submitData = {
                UserId:props.id,
                OldPassword: base64.encode(values.CurrentPassword),
                NewPassword: base64.encode(values.NewPassword)
            }
        }
        props.changePassword(props.isAdmin,submitData);         
    }

    const onModalClosed = () => {
      props.resetChangePasswordState();
      props.resetChangePasswordForm();
      props.modalClosed();
    }
    return (
      <ChangePasswordForm 
      isAdmin={props.isAdmin}
      onSubmitForm={onSubmitForm} 
      onModalClosed={onModalClosed}
      loading={props.loading}/>
    );
};

const mapStateToProps = (state: IState) => ({
  success:state.changePassword.success,
  loading:state.changePassword.loading,
  error:state.changePassword.error
});

const mapDispatchToProps = (dispatch:any) => {
  return {
    changePassword: (isAdmin:boolean,data:any) =>	dispatch(actions.changePassword(isAdmin,data)),
    resetChangePasswordState:() => dispatch(actions.resetChangePasswordState()),
    resetChangePasswordForm:() => dispatch(reset('ChangePasswordForm'))
  };
};
    
export default connect(mapStateToProps,mapDispatchToProps)(ChangePasswordPopup);
