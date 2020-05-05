import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import ILogin from '../../../models/ILogin';
import { Field, FieldArray, reduxForm, InjectedFormProps, FormSection, formValueSelector } from 'redux-form';
import {Button} from 'react-bootstrap';
import Loader from '../../../shared/components/Loader/Loader';
import ReduxFormInput from '../../../shared/components/ReduxFormHandlers/ReduxFormInput';
import {validateRequired,validatePassword} from '../../../helpers/validation.helper';
import LoaderButton from '../../../shared/components/Button/LoaderButton';
import * as normalizer from '../../../helpers/normalizer.helper';

interface  IProps{
    loginHandler:(data:ILogin) => void;  
    isLoading:boolean;
}


let LoginForm: React.FC<InjectedFormProps<ILogin,IProps> & IProps> = props =>{
return(
          <form onSubmit={props.handleSubmit((values:ILogin) => props.loginHandler(values))} noValidate>
              <div className="form-group">
                <label className="label-style">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text justify-content-center">
                      <FontAwesomeIcon icon={faEnvelope} />                     
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    name="username"
                    component={ReduxFormInput}
                    type="email"
                    placeholder="Enter Username"
                    normalize={normalizer.alphaNumeric(20)}
                    validate={[ validateRequired("Username is required.")]}
                />
                </div> 

              </div>
              <div className="form-group">
                <label className="label-style">Password </label>      
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text justify-content-center">
                    <FontAwesomeIcon icon={faLock} />                      
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    name="password"
                    component={ReduxFormInput}
                    type="password"
                    placeholder="Enter Password"
                    normalize={normalizer.maxLimit(20)}
                    validate={[ validateRequired("Password is required."),
                    validatePassword]}
                />
                </div> 
              </div>
              <div className="form-group login-action">
                <div className="forgot-password-link">
                  <a className="ForgetPwd">Forget Password?</a>
                </div>   
                <div className="login-button-column">
                <LoaderButton isLoading={props.isLoading} text="Login"/>
                </div>              
               
              </div>
          </form>  
      
)};


const form = reduxForm<ILogin, IProps>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: false,
	form: 'LoginForm',
	enableReinitialize: true
})(LoginForm);

export default form;
