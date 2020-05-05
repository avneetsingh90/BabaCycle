import { createSelector } from 'reselect'
import IState from '../models/IState';
import moment from 'moment'
import IAddEmployee from '../../models/IAddEmployee';
import {addEmployeeInitialState} from '../state/employee.state';
import {IOption} from '../../models/IReduxFormHandlers';
import {convertStringToDate} from '../../helpers/utility.helper';

const dateFormat='YYYY/MM/DD';
const dateFormat2='YYYY-MM-DD';
const getEmployee = (state:IState) => state.employee.employee.employee;
const getEmployees = (state:IState) => state.employee.employeeList.employees;
const getUserId = (state:IState) => state.auth.userId;
const getUserType = (state:IState) => state.auth.userType;
const getUserName = (state:IState) => state.auth.userName;
const getCountries = (state:IState) => state.employee.countries.countries;
const getBankDetails = (state:IState) => state.employee.bankDetails.bankDetails;
export const employeesGrid = createSelector(
    getEmployees,
    getUserId,
    getUserType,
    getUserName,
    (employees,userId,userType,userName) => { 
        if(employees && employees.length>0)
            return employees.map((employee:any) => {
                let isDelete = true; 
                if(employee.DeleteFlg)
                    isDelete = false;
                else if(employee.Id == userId || employee.EmployeeId == 'admin')
                    isDelete = false;
                // else if(userType == 0 || userType == 1)
                //     isDelete = true;
                return {id:employee.Id,
                name:employee.FirstNameKanji + " " + employee.FamilyNameKanji,
                entranceDate:moment(new Date(employee.EntranceDate)).format(dateFormat),
                isDelete:isDelete}
            })
        return [];
    }
  )


  export const getEmployeeSelector = createSelector(
    getEmployee,
    (employee) => { 
        let finalEmployee =JSON.parse(JSON.stringify(addEmployeeInitialState)); 
        if(employee != null){
                finalEmployee.EmployeeId= employee.EmployeeId;
                finalEmployee.Position= employee.Position;
                finalEmployee.TimezoneId= employee.TimezoneId;
                finalEmployee.UserDetails.AccountNumber= employee.AccountNo;
                finalEmployee.UserDetails.Address1= employee.Address1;
                finalEmployee.UserDetails.Address1Ruby= employee.Address1Ruby;
                finalEmployee.UserDetails.Address2= employee.Address2;
                finalEmployee.UserDetails.Address2Ruby= employee.Address2Ruby;
                finalEmployee.UserDetails.Address3= employee.Address3;
                finalEmployee.UserDetails.Address3Ruby= employee.Address3Ruby;
                finalEmployee.UserDetails.Address4= employee.Address4;
                finalEmployee.UserDetails.Address4Ruby= employee.Address4Ruby;
                finalEmployee.UserDetails.BankCode= employee.BankCode;
                finalEmployee.UserDetails.BranchCode= employee.BranchCode;
                finalEmployee.UserDetails.BranchName= employee.BranchName;
                finalEmployee.UserDetails.CompanyEmailAddress= employee.CompanyEmailAddress;
                finalEmployee.UserDetails.CompanyPhoneNumber= employee.CompanyPhoneNumber;
                finalEmployee.UserDetails.CountryCode2= employee.CountryCode2;
                finalEmployee.UserDetails.DayOfBirth= employee.DayOfBirth;
                finalEmployee.UserDetails.EmploymentInsuranceNumber= employee.EmploymentInsuranceNumber;
                finalEmployee.UserDetails.EntranceDate= convertStringToDate(employee.EntranceDate);
                finalEmployee.UserDetails.RetirementDate=convertStringToDate(employee.RetirementDate);
                finalEmployee.UserDetails.ExpiryDateForResidentialCard= convertStringToDate(employee.ExpiryDateForResidencialCard);
                finalEmployee.UserDetails.RetirementDate=convertStringToDate(employee.RetirementDate);
                finalEmployee.UserDetails.FamilyNameAlpha= employee.FamilyNameAlpha;
                finalEmployee.UserDetails.FamilyNameKanji= employee.FamilyNameKanji;
                finalEmployee.UserDetails.FamilyNameRuby= employee.FamilyNameRuby;
                finalEmployee.UserDetails.FirstNameAlpha= employee.FirstNameAlpha;
                finalEmployee.UserDetails.FirstNameKanji= employee.FirstNameKanji;
                finalEmployee.UserDetails.FirstNameRuby= employee.FirstNameRuby;
                finalEmployee.UserDetails.Gender= employee.Gender;
                finalEmployee.UserDetails.HealthInsuranceNumber= employee.HealthInsuranceNumber;
                finalEmployee.UserDetails.HomePhoneNumber= employee.HomePhoneNumber;
                finalEmployee.UserDetails.Memo= employee.Memo;
                finalEmployee.UserDetails.MyNumber= employee.MyNumber;
                finalEmployee.UserDetails.PaidLeaveCompensation= employee.PaidLeaveCompensation;
                finalEmployee.UserDetails.PostalCode= employee.PostalCode;
                finalEmployee.UserDetails.PrivateEmailAddress= employee.PrivateEmailAddress;
                finalEmployee.UserDetails.PrivatePhoneNumber= employee.PrivatePhoneNumber;
                finalEmployee.UserDetails.ResidentialCardNumber= employee.ResidentialCardNumber;
                finalEmployee.UserDetails.RetirementFlag= employee.RetirementFlg;
                finalEmployee.UserDetails.SocialPensionNumber= employee.SocialPensionNumber;
                //finalEmployee.UserId= employee.EmployeeId;
                finalEmployee.UserLoginId= employee.EmployeeId;
        }
        return finalEmployee;
    }
  )

   export const countriesSelector = createSelector(
    getCountries,
    (countries) => {
        let countryOptions:Array<IOption> = [];
        if(countries && countries.length > 0){
            if(countryOptions.length == 0)
                countryOptions.push({id:-1,value:'--select--'});
            countries.map((element:any) => {
                countryOptions.push({id:element.CountryCode2,value:element.CountryName});
            })
        }
        return countryOptions;
    }
  )

export const bankDetailsSelector = createSelector(
    getBankDetails,
    (bankDetails) => {
        let bankOptions:Array<IOption> = [];
        if(bankDetails && bankDetails.length > 0){
            if(bankOptions.length == 0)
                bankOptions.push({id:-1,value:'--select--'});
            bankDetails.map((element:any) => {
                bankOptions.push({id:element.BankCode,value:element.BankNameJapan});
            })
        }
        return bankOptions;
    }
  )

  