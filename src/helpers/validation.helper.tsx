export const validateRequired = (message:string)=>(value:string) =>{
	value = value ? value.toString() : "";
	if (!value || (typeof value.trim === 'function' && value.trim() === '') || (Array.isArray(value) && !value.length))
		return message;
}

export const validateSelectRequired = (message:string)=>(value:any) =>{
	value = value ? value.toString() : "";
	if (value == '-1') 
		return message;
}

export const validateAlphaNumeric = (value:string) =>
	value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Test' : undefined;

export const validateEmail = (message:string)=>(value:string) =>{
	if(value != ""){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(value).toLowerCase())) {
			return message;
		}
	}
}
export const validateMinLength = (limit:number,message:string)=>(value:string) =>{
	if(value && value!= '' && value.length<limit)
		return message;
}
export const validateMaxLength = (limit:number,message:string)=>(value:string) =>{
	if(value && value!= '' && value.length>limit)
		return message;
}

export const validateConfirmPassword = (newPassword:string,message:string) => (value:string) => {
if(value != "" && value!= newPassword)
	return message;
}

export const validatePassword = (value:string) =>{
	if(value != ""){
		var re = /[^A-Za-z0-9!#$-%&()*+/:;<>@?_|¥^[\]]/;
		if (re.test(value)) {
			return "Password is invalid.";
		}
	}
}