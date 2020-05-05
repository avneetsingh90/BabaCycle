import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm,formValueSelector,change } from 'redux-form';
import ReduxFormInput from '../../../shared/components/ReduxFormHandlers/ReduxFormInput';
import * as validate from '../../../helpers/validation.helper';
import LoaderButton from '../../../shared/components/Button/LoaderButton';
import IState from '../../../core/models/IState';
import { connect } from 'react-redux';

let ChangePasswordForm: React.FC<any> = (props:any) => {
    return (
        <Modal show={true} centered onHide={props.onModalClosed} dialogClassName="change-password-popup">
            <Modal.Header closeButton>
				<Modal.Title>Change password</Modal.Title> 
            </Modal.Header>
            <form onSubmit={props.handleSubmit((values:any) => props.onSubmitForm(values))} noValidate>
			<Modal.Body>
            {!props.isAdmin && <div className="form-group">
                <label className="label-style">Current Password</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text justify-content-center">
                      <i className="fa fa-lock" aria-hidden="true"></i>                     
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    name="CurrentPassword"
                    component={ReduxFormInput}
                    type="password"
                    placeholder="Current Password"
                    validate={[ validate.validateRequired("Current Password is required."),
                    validate.validatePassword
                    ]} 
                />
                </div> 
              </div>
              } 
              <div className="form-group">
                <label className="label-style">New Password </label>      
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text justify-content-center">
                      <i className="fa fa-lock" aria-hidden="true"></i>                      
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    name="NewPassword"
                    component={ReduxFormInput}
                    type="password"
                    placeholder="New Password"
                    validate={[
                      validate.validateRequired("New Password is required."),
                      validate.validatePassword, 
                      validate.validateMinLength(8,'Minimum 8 characters long.'),
                      validate.validateMaxLength(20,'Maximum 20 characters allowed.'),
                      
                    ]}
                />
                </div> 
              </div>
              <div className="form-group">
                <label className="label-style">Confirm Password </label>      
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text justify-content-center">
                      <i className="fa fa-lock" aria-hidden="true"></i>                      
                    </span>
                  </div>
                  <Field
                    className="form-control"
                    name="ConfirmPassword"
                    component={ReduxFormInput}
                    type="password"
                    placeholder="Confirm Password"
                    validate={[ validate.validateRequired("Confirm Password is required."),
                      validate.validateMinLength(8,'Minimum 8 characters long.'),
                      validate.validateMaxLength(20,'Maximum 20 characters allowed.'),
                      validate.validateConfirmPassword(props.newPasswordSelector,"New Password & Confirm Password are not same."),
                    ]}
                />
                </div> 
              </div>   
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onModalClosed} className="btnOkSize">Cancel</Button>
                <LoaderButton isLoading={props.loading} text="Save"/> 
            </Modal.Footer>
            </form>
        </Modal>
    );
};

const selector = formValueSelector('ChangePasswordForm');

const mapStateToProps = (state: IState) => ({
  newPasswordSelector: selector(state, 'NewPassword'),
});

const form  = reduxForm<any, any>({
    destroyOnUnmount: false,
	  forceUnregisterOnUnmount: false,
	  enableReinitialize: true,
    form: 'ChangePasswordForm'
  })(ChangePasswordForm)

export default connect(mapStateToProps)(form);
