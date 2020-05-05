import React,{useEffect,useState,Component} from 'react';
import { connect } from 'react-redux';
import {isAuthSelector} from '../../core/selectors/auth.selector';
import IState from '../../core/models/IState';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import * as actions from '../../core/actions/actions';

const AuthProvider:React.FC<any> = (props) => {
    useEffect(() => {
      let token = localStorage.getItem('token');
        if(token)
          props.updateAuth();
      }, []);
          
    return (
        <React.Fragment>
          {props.isAuthenticated || localStorage.getItem('token')!=null ? 
          props.children : 
          <Redirect to="/login" />}
        </React.Fragment>
    )
}

const mapStateToProps = (state: IState) => ({
	isAuthenticated: isAuthSelector(state)
});

const mapDispatchToProps = (dispatch:any) => {
	return {
    updateAuth: () =>	dispatch(actions.updateAuth())
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthProvider);