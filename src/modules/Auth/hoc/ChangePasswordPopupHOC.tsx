import React, { useEffect, useState } from 'react';
import DeletePopup from '../../../shared/components/Popup/DeletePopup';

const ChangePasswordPopupHOC = (Component:any) => 
function Comp(props:any){
    const [showChangePasswordPopup,setShowChangePasswordPopup] = useState<boolean>(false);

    const changePasswordPopupToggleHandler = () => {
        setShowChangePasswordPopup(!showChangePasswordPopup);
    }
	
	return <Component showChangePasswordPopup={showChangePasswordPopup} changePasswordPopupToggleHandler={changePasswordPopupToggleHandler} {...props}/>;
};

export default ChangePasswordPopupHOC;   