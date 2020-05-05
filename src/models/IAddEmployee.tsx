interface IAddEmployee{
    EmployeeId: string;
    Position: number;
    TimezoneId: number;
    UserDetails: 
    {
        AccountNumber: string;
        Address1: string;
        Address1Ruby: string;
        Address2: string;
        Address2Ruby: string;
        Address3: string;
        Address3Ruby: string;
        Address4: string;
        Address4Ruby: string;
        BankCode: any;
        BranchCode: string;
        BranchName: string;
        CompanyEmailAddress: string;
        CompanyPhoneNumber: string;
        CountryCode2: string;
        DayOfBirth: string;
        EmploymentInsuranceNumber: string;
        EntranceDate: string;
        ExpiryDateForResidentialCard: any;
        FamilyNameAlpha: string;
        FamilyNameKanji: string;
        FamilyNameRuby: string;
        FirstNameAlpha: string;
        FirstNameKanji: string;
        FirstNameRuby: string;
        Gender: number;
        HealthInsuranceNumber: string;
        HomePhoneNumber: string;
        Memo: string;
        MyNumber: string;
        PaidLeaveCompensation: string;
        PostalCode: string;
        PrivateEmailAddress: string;
        PrivatePhoneNumber: string;
        ResidentialCardNumber: string;
        RetirementDate: any;
        RetirementFlag: boolean;
        SocialPensionNumber: string;
        AccountType:number;
    }
    UserId: number;
    UserLoginId: string;
}

export default IAddEmployee;