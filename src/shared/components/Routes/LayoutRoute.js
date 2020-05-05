import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import Layout from '../Layout/Layout';
import AuthProvider from '../../../contexts/Auth/AuthProvider';

const LayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <Layout>  
        <AuthProvider>
            <Component {...matchProps} />
        </AuthProvider>      
        </Layout>  
      )} />  
    )  
  };  
  
export default LayoutRoute;  