import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Employee from '../../../modules/Employee/Employee';
import MessageManager from '../../../modules/MessageManager/MessageManager';
import Layout from '../Layout/Layout';
import Expenses from '../../../modules/Expenses/Expenses';
import PaidLeave from '../../../modules/PaidLeave/PaidLeave';
import PayslipDownload from '../../../modules/PayslipDownload/PayslipDownload';
import PayslipHistory from '../../../modules/PayslipHistory/PayslipHistory';
import Logout from '../../../modules/Auth/Logout';
import Login from '../../../modules/Auth/Login';
import RoutesConstants from './routes.constants';
import LoginLayoutRoute from './LoginLayoutRoute';
import LayoutRoute from './LayoutRoute';
import { withRouter } from 'react-router-dom';
import Dashboard from '../../../modules/Dashboard/Dashboard';
const Routes = (props:any) => {
    return (
        <React.Fragment>
            <Switch>
            <LayoutRoute path={RoutesConstants.MessageManager} component={MessageManager} />
            <LayoutRoute exact path={RoutesConstants.Employee} component={Employee} />
            <LayoutRoute path={RoutesConstants.Expenses} component={Expenses} />
            <LayoutRoute path={RoutesConstants.PaidLeave} component={PaidLeave} />
            <LayoutRoute path={RoutesConstants.PayslipDownload} component={PayslipDownload} />
            <LayoutRoute path={RoutesConstants.PayslipHistory} component={PayslipHistory} />
            <LoginLayoutRoute path={RoutesConstants.Login} component={Login}/>
            <LayoutRoute path={RoutesConstants.Logout} component={Logout} />
            <LoginLayoutRoute path={RoutesConstants.Dashboard} component={Dashboard}/>
            <Redirect to={RoutesConstants.Dashboard} />    
            </Switch>
        </React.Fragment>
    );
};

export default withRouter(Routes);