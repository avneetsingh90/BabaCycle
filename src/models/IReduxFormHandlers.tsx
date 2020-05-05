export interface IMeta{
  touched:any;
  error:string;
  warning:string;
}

export interface IReduxFormInput{
  input:any;
  label:string;
  type:string;
  name:string;
  placeholder:string;
  message:string;
  meta:IMeta;
  className:string;
  divPosition:any;
  readOnly:any;
}

export interface IOption{
    id:any;
    value:any;
}

export interface IReduxFormSelect{
  input:any;
  label:string;
  type:string;
  name:string;
  placeholder:string;
  message:string;
  meta:IMeta;
  className:string;
  divPosition:any;
  readOnly:any;
  disabled:boolean;
  options:Array<IOption>;
}

export interface IReduxFormTextArea{
  input:any;
  label:string;
  type:string;
  name:string;
  placeholder:string;
  message:string;
  meta:IMeta;
  className:string;
  divPosition:any;
  readOnly:any;
  rows:number;
}
