import React from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import TopNavBar from '../NavBar/TopNavBar';
import LeftMenuBar from '../NavBar/LeftNavBar';
import Footer from '../Footer/Footer';
import './Layout.css';
import IState from '../../../core/models/IState';
import { connect } from 'react-redux';

const Layout:React.FC<any> = (props) => {
    return (
        <div className="header-fixed sidebar-fixed sidebar-dark header-light" id="body">
            <div className="wrapper">
                <LeftMenuBar 
                id={props.id}
                employeeName={props.employeeName} 
                employeeId={props.employeeId}
                employeeEmail={props.employeeEmail}
                userType={props.userType}
                />
                <div className="page-wrapper">
                    <TopNavBar/>
                    <div className="content-wrapper">
                        <div className="content">
                            {props.children}
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
	);
};


const mapStateToProps = (state: IState) => ({
    employeeName:state.auth.userName,
    id:state.auth.userId,
    employeeEmail:state.auth.userEmail,
    employeeId:state.auth.employeeId,
    userType:state.auth.userType
  });

export default connect(mapStateToProps)(Layout);
