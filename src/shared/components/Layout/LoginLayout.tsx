import React from 'react';
import './LoginLayout.css';
const LoginLayout:React.FC<any> = (props) => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
	);
};
export default LoginLayout;
