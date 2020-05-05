export const updateObject = (oldState:any, updatedProperties:any) => {
	return {
		...oldState,
		...updatedProperties
	};
};

export const compareString = (first:string,second:string) => {
	return first == second ? true : false;
};

export const convertStringToDate = (value:string) => {
	if(value && value!= "")
	return new Date(value);
	return value;
};
