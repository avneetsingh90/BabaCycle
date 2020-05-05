import React, { useEffect, useState } from 'react';
import DeletePopup from '../DeletePopup';

const DeletePopupHOC = (Component:any) => 
function Comp(props:any){
    const [showDeletePopup,setShowDeletePopup] = useState<boolean>(false);

    const deleteToggleHandler = () => {
        setShowDeletePopup(!showDeletePopup);
    }
	
	return <Component showDeletePopup={showDeletePopup} deletePopupToggleHandler={deleteToggleHandler} {...props}/>;
};

export default DeletePopupHOC;   