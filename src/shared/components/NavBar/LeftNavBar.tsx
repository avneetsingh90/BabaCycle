import React from 'react';
import flowerText from '../../../assets/images/flower-text.png';
import userIcon from '../../../assets/images/User-icon.png';
import './LeftNavBar.css';
import {NavLink,withRouter} from 'react-router-dom'; 
import RoutesConstants from '../Routes/routes.constants';
import {compareString} from '../../../helpers/utility.helper';
import ChangePasswordPopupHOC from '../../../modules/Auth/hoc/ChangePasswordPopupHOC';
import ChangePasswordPopup from '../../../modules/Auth/ChangePasswordPopup';

const LeftNavBar = (props:any) => {
  
    return (
      <React.Fragment>
      {
          props.showChangePasswordPopup && 
          <ChangePasswordPopup 
            id={props.id} 
            modalClosed={props.changePasswordPopupToggleHandler}/> 
        }
        <aside className="left-sidebar bg-sidebar">
        <div id="sidebar" className="sidebar ">
          <div className="app-brand">
            <a href="#" title="Payslip">
              <img src={flowerText}/>
            </a>
          </div>
          <div className="sidebar-scrollbar">
            <ul className="nav sidebar-inner" id="sidebar-menu">  
     <li  className="nav-header" >
                <div className="profile-element">
                  <div className="profile-img">
                    <img alt="image" className="img-circle" src={userIcon}/>
                    <i className="mdi mdi-upload"></i>
                    <span className="profile-name">{props.employeeName}
                      <span className="user-id" data-toggle="modal" data-target="#change-password" onClick={props.changePasswordPopupToggleHandler}>{props.employeeId}</span>
                    </span>
                  </div>        
                  <div className="profile-email">{props.employeeEmail}</div>   
                </div>
            </li>
        {(props.userType == 0 || props.userType == 1) && 
        <li className={compareString(props.location.pathname,RoutesConstants.MessageManager)?'active' : ''}>
        <NavLink to={RoutesConstants.MessageManager}>
            <i className="mdi mdi-message"></i>             
            <span className="nav-text">Message Manager</span>
        </NavLink>
        </li>         
        }
        {props.userType == 0 && <li className={compareString(props.location.pathname,RoutesConstants.Employee)?'active' : ''}>
        <NavLink to={RoutesConstants.Employee}>
            <i className="mdi mdi-account-plus"></i>              
            <span className="nav-text">Employee List</span>
        </NavLink>
        </li>}
        <li className={compareString(props.location.pathname,RoutesConstants.PaidLeave)?'active' : ''}>
          <NavLink to={RoutesConstants.PaidLeave}>
            <i className="mdi mdi mdi-receipt"></i>             
            <span className="nav-text">Paid Leave Application</span>
          </NavLink>
        </li>  

        <li className={compareString(props.location.pathname,RoutesConstants.Expenses)?'active' : ''}>
          <NavLink to={RoutesConstants.Expenses}>
            <i className="mdi mdi-wallet-membership"></i>              
            <span className="nav-text">Expenses Application</span>
          </NavLink>
        </li>     
        <li className={compareString(props.location.pathname,RoutesConstants.PayslipDownload)?'active' : ''}>
              <NavLink to={RoutesConstants.PayslipDownload}>
                <i className="mdi mdi-download"></i>
                <span className="nav-text">Payslip	Download</span>
              </NavLink>              
          </li>
          <li className={compareString(props.location.pathname,RoutesConstants.PayslipHistory)?'active' : ''}>
            <NavLink to={RoutesConstants.PayslipHistory}>
              <i className="mdi mdi-history"></i>
              <span className="nav-text">Payslip	History</span>
            </NavLink>          
          </li>
          <li className={compareString(props.location.pathname,RoutesConstants.Logout)?'active' : ''}>
            <NavLink to={RoutesConstants.Logout}>
              <i className="mdi mdi-lock"></i>
              <span className="nav-text">LogOut</span>
            </NavLink>
          </li>
            </ul>
          </div>
        </div>
        </aside>
        </React.Fragment>
    )
}
export default withRouter(ChangePasswordPopupHOC(LeftNavBar));