import React, { useEffect, useState } from 'react';
import AddEmployee from '../AddEmployee';

const AddEmployeePopupHOC = (Component:any) => 
function Comp(props:any){
    const [showAddEmployeePopup,setShowAddEmployeePopup] = useState<boolean>(false);

    const addEmployeeToggleHandler = () => {
        setShowAddEmployeePopup(!showAddEmployeePopup);
    }
	
	return <Component showAddEmployeePopup={showAddEmployeePopup} addEmployeeToggleHandler={addEmployeeToggleHandler} {...props}/>;
};

export default AddEmployeePopupHOC;   