import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import LoginLayout from '../Layout/LoginLayout';
import AuthProvider from '../../../contexts/Auth/AuthProvider';

const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <LoginLayout>  
            <Component {...matchProps} />
        </LoginLayout>  
      )} />  
    )  
  };  
  
export default LoginLayoutRoute;  