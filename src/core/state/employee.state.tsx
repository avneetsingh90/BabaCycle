import IEmployeeState from "../models/IEmployeeState";
import IAddEmployee from '../../models/IAddEmployee';

export const addEmployeeInitialState:IAddEmployee = {
        EmployeeId: "",
        Position: -1,
        TimezoneId: 0,
        UserDetails: 
        {
            AccountNumber: "",
            Address1: "",
            Address1Ruby: "",
            Address2: "",
            Address2Ruby: "",
            Address3: "",
            Address3Ruby: "",
            Address4: "",
            Address4Ruby: "",
            BankCode: null,
            BranchCode: "",
            BranchName: "",
            CompanyEmailAddress: "",
            CompanyPhoneNumber: "",
            CountryCode2: '-1',
            DayOfBirth: "",
            EmploymentInsuranceNumber: "",
            EntranceDate: "",
            ExpiryDateForResidentialCard: "",
            FamilyNameAlpha: "",
            FamilyNameKanji: "",
            FamilyNameRuby: "",
            FirstNameAlpha: "",
            FirstNameKanji: "",
            FirstNameRuby: "",
            Gender: -1,
            HealthInsuranceNumber: "",
            HomePhoneNumber: "",
            Memo: "",
            MyNumber: "",
            PaidLeaveCompensation: "",
            PostalCode: "",
            PrivateEmailAddress: "",
            PrivatePhoneNumber: "",
            ResidentialCardNumber: "",
            RetirementDate: "",
            RetirementFlag: false,
            SocialPensionNumber: "",
            AccountType:-1
        },
        UserId: 0,
        UserLoginId: ""
}

export const initialState : IEmployeeState= {
    employeeList: {
        employees:[],
        error: null,
	    loading: false
    },
    deleteEmployee:{
        success:false,
        error: null,
	    loading: false
    },
    addEmployee:{
        success:false,
        error: null,
	    loading: false
    },
    employee:{
        employee:null,
        error: null,
	    loading: false
    },
    countries:{
        countries:[],
        error: null
    },
    bankDetails:{
        bankDetails:[],
        error: null
    }
};
