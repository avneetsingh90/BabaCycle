import React,{useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import IState from '../../core/models/IState';
import * as actions from '../../core/actions/actions';
//import {withRouter} from 'react-router-dom'; 
import RoutesConstants from '../../shared/components/Routes/routes.constants';

const Logout = (props:any) =>{
    useEffect(() => {
        props.logout();
        //props.history.push(RoutesConstants.Login)
        //window.location.reload(false);
	}, []);
    return <Redirect to={RoutesConstants.Login} />;
};
    

const mapStateToProps = (state: IState) => ({
	
});

const mapDispatchToProps = (dispatch:any) => {
	return {
		logout: () => dispatch(actions.logout()),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Logout);