import React,{useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Field, reduxForm, InjectedFormProps,formValueSelector,change } from 'redux-form';
import { toast } from 'react-toastify';
import ReduxFormInput from '../../../shared/components/ReduxFormHandlers/ReduxFormInput';
import ReduxFormSelect from '../../../shared/components/ReduxFormHandlers/ReduxFormSelect';
import ReduxFormTextArea from '../../../shared/components/ReduxFormHandlers/ReduxFormTextArea';
import PageLoader from '../../../shared/components/Loader/PageLoader';
import { connect } from 'react-redux';
import IState from '../../../core/models/IState';
import LoaderButton from '../../../shared/components/Button/LoaderButton';
import { getEmployeeSelector } from '../../../core/selectors/employee.selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {validateRequired,validateSelectRequired,validateEmail,validateMaxLength,validateMinLength} from '../../../helpers/validation.helper';
import {IOption} from '../../../models/IReduxFormHandlers';
import genderConstants from '../../../constants/gender.constants';
import positionConstants from '../../../constants/position.constants';
import DatePicker from '../../../shared/components/DatePicker/DatePicker';
import accountTypeConstants from '../../../constants/accountType.constants';
import * as normalizer from '../../../helpers/normalizer.helper';

interface  IProps{
    id:number;
    isDelete:boolean;
    submitHandler:(data:any) => void;
    onModalClosed:() => void;
    getEmployeeLoading:boolean;
    countryList:Array<IOption>;
    bankDetailsList:Array<IOption>;
    addEmployeeLoading:boolean;
}

const AddEmployeeForm: React.FC<InjectedFormProps<any,IProps> & IProps> = (props:any) => {
 useEffect(() => {
   props.retirementDateSelector == "" ?props.changeRetirementFlag(false):props.changeRetirementFlag(true);
  }, [props.retirementDateSelector]);
return(
  <Modal className="add-employee-modal" show={true} centered onHide={props.onModalClosed}>
            <Modal.Header closeButton>
				<Modal.Title>
        {props.id==-1 ? "Add Employee" : "Edit Employee"}
        </Modal.Title>
        {props.getEmployeeLoading ? <PageLoader/> : null}
            </Modal.Header>
			  <Modal.Body>
            <div className="create-user-container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="basic-info-tab" data-toggle="tab" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true" title="basic Info"><i className="fa fa-user-circle" aria-hidden="true"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="additional-tab" data-toggle="tab" href="#additional" role="tab" aria-controls="additional" aria-selected="false" title="Additional Info"><i className="fa fa-user-plus" aria-hidden="true"></i></a>
            </li>
             <li className="nav-item">
              <a className="nav-link" id="bank-tab" data-toggle="tab" href="#bank" role="tab" aria-controls="bank" aria-selected="false" title="Bank Related Info"> <i className="fa fa-university" aria-hidden="true"></i> </a>
            </li>
          </ul>
        <form onSubmit={props.handleSubmit((values:any) => props.submitHandler(values))} noValidate>
            <div className="tab-content" id="myTabContent">
            <div className="tab-pane show active" id="basic-info" role="tabpanel" aria-labelledby="home-tab">
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Employee ID</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-id-card" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="EmployeeId"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Employee ID"
                          normalize={normalizer.alphaNumeric(8)}
                          validate={[
                            validateRequired("ID is required."),
                            validateMinLength(8,'Minimum 8 characters long.'),
                            validateMaxLength(8,'Maximum 8 characters allowed.')]}
                      />
                    </div>
                  </div>
                </div>
                 <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <label className="label-style">Family Name</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-address-book" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.FamilyNameKanji"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Family Name"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("Family Name is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                      />
                      </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">First Name</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-address-book" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.FirstNameKanji"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="First Name"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("First Name is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')]}
                      />
                    </div>
                  </div>

                </div>


                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <label className="label-style">FamilyName(Alpha)</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-address-book" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.FamilyNameAlpha"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Family Name Alpha"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("FamilyName(Alpha) is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')]}
                        />
                      </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">FirstName(Alpha)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-address-book" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.FirstNameAlpha"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="First Name Alpha"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("FirstName(Alpha) is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')]}
                        />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Family Name(Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-users" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.FamilyNameRuby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Family Name(Ruby)"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("Family Name(Ruby) is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')]}
                        />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">First Name (Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-address-book" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.FirstNameRuby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="First Name (Ruby)"
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ validateRequired("First Name (Ruby) is required."),
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(50,'Maximum 50 characters allowed.')]}
                        />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Date of Birth</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                      </div>
                      <DatePicker
                        className="form-control"
                        placeholder="Date of Birth"
                        name="UserDetails.DayOfBirth"
                        validate={[ validateRequired("Date of Birth is required.")]}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Gender</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-venus" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Gender"
                          component={ReduxFormSelect}
                          options={genderConstants}
                          type="text"
                          validate={[ validateSelectRequired("Gender is required.")]}
                        />
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Entrance Date</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                      </div>
                      <DatePicker
                        className="form-control"
                        name="UserDetails.EntranceDate"
                        validate={[ validateRequired("EntranceDate is required.")]}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Company Phone Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.CompanyPhoneNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Company Phone Number"
                          normalize={normalizer.phoneNumber(15)}
                          validate={[ 
                            validateMinLength(11,'Minimum 11 characters long.'),
                            validateMaxLength(15,'Maximum 15 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Private Phone Number </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.PrivatePhoneNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Private Phone Number"
                          normalize={normalizer.phoneNumber(15)}
                          validate={[ 
                            validateMinLength(11,'Minimum 11 characters long.'),
                            validateMaxLength(15,'Maximum 15 characters allowed.')
                            ]}
                        />
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Home Phone Number ( Emergency)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.HomePhoneNumber"
                          normalize={normalizer.phoneNumber(15)}
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Home Phone Number (Contact Number for Emergency)"
                          validate={[ 
                            validateMinLength(11,'Minimum 11 characters long.'),
                            validateMaxLength(15,'Maximum 15 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                </div>


                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Company Email Address</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.CompanyEmailAddress"
                          component={ReduxFormInput}
                          type="email"
                          placeholder="Company Email Address"
                          validate={[
                            validateRequired("Company Email Address is required."),
                            validateEmail("Company Email Address is not valid"),
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Private Email Address </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.PrivateEmailAddress"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Private Email Address"
                          validate={[
                            validateEmail("Private Email Address is not valid"),
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Postal Code</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.PostalCode"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Postal Code"
                          normalize={normalizer.onlyNumber(9)}
                          validate={[
                            validateRequired("Postal Code is required."),
                            validateMaxLength(9,'Maximum 9 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 1</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                         </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address1"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(20)}
                          validate={[
                            validateRequired("Address 1 is required."),
                            validateMaxLength(20,'Maximum 20 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 2</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address2"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[
                            validateRequired("Address 2 is required."),
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 3</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address3"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ 
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                  </div>
                   <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 4</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address4"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ 
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                </div>
              <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 1(Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address1Ruby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(20)}
                          validate={[
                            validateRequired("Address 1(Ruby) is required."),
                            validateMaxLength(20,'Maximum 20 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 2(Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address2Ruby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[
                            validateRequired("Address 2(Ruby) is required."),
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 3(Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address3Ruby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ 
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                  </div>
                   <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Address 4(Ruby)</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <FontAwesomeIcon icon={faAddressCard} />
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.Address4Ruby"
                          component={ReduxFormInput}
                          type="text"
                          placeholder=""
                          normalize={normalizer.alphaNumeric(50)}
                          validate={[ 
                            validateMaxLength(50,'Maximum 50 characters allowed.')
                            ]}
                        />
                    </div>
                  </div>
                </div>
                 <div className="form-group row position-row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Position</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-align-center" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="Position"
                          component={ReduxFormSelect}
                          options={positionConstants}
                          type="text"
                          validate={[ validateSelectRequired("Position is required.")]}
                        />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Retirement Flag</label>
                    <div className="input-group">
                      <Field
                        name="UserDetails.RetirementFlag"
                        component="input"
                        type="checkbox"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Delete Flag</label>
                    <div className="input-group">
                    <input type="checkbox" disabled={true} checked={props.isDelete}/>
                    </div>
                  </div>      
                  </div>
                   <div className="form-group row">            
				<div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Retirement Date</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-calendar" aria-hidden="true"></i>

                        </span>
                      </div>
                      <DatePicker
                        className="form-control"
                        placeholder="Retirement Date"
                        name="UserDetails.RetirementDate"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style"> Paid Leave Compensation </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.PaidLeaveCompensation"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Paid Leave Compensation"
                          normalize={normalizer.onlyNumber(2)}
                          validate={[
                            validateRequired("Paid Leave Compensation is required."),
                            validateMaxLength(2,'Maximum 2 digits allowed.')
                            ]}
                        />
                    </div>
                  </div>


                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <label className="label-style"> Memo </label>
                    <Field
                          className="form-control"
                          name="UserDetails.Memo"
                          component={ReduxFormTextArea}
                          placeholder="Memo"
                          rows={6}
                          normalize={normalizer.alphaNumeric(1000)}
                          validate={[
                            validateMaxLength(1000,'Maximum 1000 characters allowed.')]}
                        />
                  </div>
                </div>
            </div>
            <div className="tab-pane" id="additional" role="tabpanel" aria-labelledby="additional-tab">
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <label className="label-style">Country</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.CountryCode2"
                          component={ReduxFormSelect}
                          options={props.countryList}
                          validate={[ validateSelectRequired("Country is required.")]}
                        />
                      </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">My Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-id-badge" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.MyNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="My Number"
                          normalize={normalizer.onlyNumber(12)}
                          validate={[
                            validateMinLength(12,'Minimum 12 characters long.'),
                            validateMaxLength(12,'Maximum 12 characters allowed.')]}
                        />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Employe Insurance Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-id-badge" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.EmploymentInsuranceNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Employe Insurance Number"
                          normalize={normalizer.onlyNumber(11)}
                          validate={[
                            validateMinLength(11,'Minimum 11 characters long.'),
                            validateMaxLength(11,'Maximum 11 characters allowed.')]}
                        />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Social Pension Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-id-badge" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.SocialPensionNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Social Pension Number"
                          normalize={normalizer.onlyNumber(10)}
                          validate={[
                            validateMinLength(10,'Minimum 10 characters long.'),
                            validateMaxLength(10,'Maximum 10 characters allowed.')]}
                        />
                    </div>

                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style"> Health Insurance Number </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-medkit" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.HealthInsuranceNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Health Insurance Number"
                          normalize={normalizer.onlyNumber(7)}
                          validate={[
                            validateMinLength(1,'Minimum 1 characters long.'),
                            validateMaxLength(7,'Maximum 7 characters allowed.')]}
                        />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">

                  </div>
                </div>


                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Residental Card Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-home" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.ResidentialCardNumber"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Residental Card Number"
                          normalize={normalizer.alphaNumeric(12)}
                           validate={[
                            validateMinLength(12,'Minimum 12 characters long.'),
                            validateMaxLength(12,'Maximum 12 characters allowed.')]}
                        />
                      </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Expiry date for Residental Card </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </span>
                      </div>
                      <DatePicker
                        className="form-control"
                        name="UserDetails.ExpiryDateForResidentialCard"
                      />
                    </div>
                  </div>
               </div>
            </div>
            <div className="tab-pane" id="bank" role="tabpanel" aria-labelledby="bank-tab">
                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                      <label className="label-style">Bank Name</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-building" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.BankCode"
                          component={ReduxFormSelect}
                          options={props.bankDetailsList}
                          type="text"
                        />
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Branch Name</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-id-card" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.BranchName"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Branch Name"
                          normalize={normalizer.alphaNumeric(30)}
                          validate={[ 
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(30,'Maximum 30 characters allowed.')]}
                        />
                    </div>

                  </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                      <label className="label-style"> Branch Code </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text justify-content-center">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                        </div>
                        <Field
                          className="form-control"
                          name="UserDetails.BranchCode"
                          component={ReduxFormInput}
                          type="text"
                          placeholder="Branch Code"
                          normalize={normalizer.onlyNumber(3)}
                          validate={[ 
                            validateMinLength(3,'Minimum 3 characters long.'),
                            validateMaxLength(3,'Maximum 3 characters allowed.')]}
                        />
                      </div>

                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Account Type</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.AccountType"
                          component={ReduxFormSelect}
                          options={accountTypeConstants}
                          type="text"
                        />
                    </div>

                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <label className="label-style">Account No</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text justify-content-center">
                          <i className="fa fa-credit-card" aria-hidden="true"></i>
                        </span>
                      </div>
                      <Field
                          className="form-control"
                          name="UserDetails.AccountNumber"
                          component={ReduxFormInput}
                          type="number"
                          placeholder="Account No"
                          normalize={normalizer.onlyNumber(8)}
                          validate={[ 
                            validateMinLength(7,'Minimum 7 digits long.'),
                            validateMaxLength(8,'Maximum 8 digits allowed.')]}
                        />
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="form-group row tab-action">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <Button variant="primary" onClick={props.onModalClosed}>Cancel</Button>
              <LoaderButton isLoading={props.addEmployeeLoading} text={props.id==-1 ? "Save" : "Edit"}/>
            </div>
          </div>
        </form>
      </div>
    </Modal.Body>
  </Modal>
)
}

const selector = formValueSelector('AddEmployeeForm');

const mapStateToProps = (state: IState) => ({
  initialValues: getEmployeeSelector(state),
  retirementDateSelector: selector(state, 'UserDetails.RetirementDate'),
});


const form = reduxForm<any, IProps>({
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: false,
	form: 'AddEmployeeForm',
	enableReinitialize: true,
  onSubmitFail: (errors: any) => {
    toast.warn("Please correct validation errors before save.");
	}
})(AddEmployeeForm);

export default connect(mapStateToProps,
{
  changeRetirementFlag: (flag:boolean) => change("AddEmployeeForm", "UserDetails.RetirementFlag", flag)
})(form);
