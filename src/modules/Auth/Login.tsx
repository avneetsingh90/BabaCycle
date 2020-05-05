import React,{useEffect} from 'react';
import { toast } from 'react-toastify';
import './Login.css';
import { connect } from 'react-redux';
import gardenLogo from '../../assets/images/flower-full-logo.jpg';
import loginGraphics from '../../assets/images/login-graphics.svg';
import IState from '../../core/models/IState';
import * as actions from '../../core/actions/actions';
import {withRouter,RouteComponentProps} from 'react-router-dom'; 
import ILogin from '../../models/ILogin';
import LoginForm from './components/LoginForm';
import {isAuthSelector} from '../../core/selectors/auth.selector';
import RoutesConstants from '../../shared/components/Routes/routes.constants';
import { reset } from 'redux-form';

interface  IProps{
  history:any;
}

interface IMapStateToProps{
  isAuthenticated: boolean;
  loading:boolean;
  error:string | null;
  userType:any;
}

interface IMapDispatchToProps{
  login: (data:ILogin) => void;
  resetLoginForm:() => void;
}

let Login: React.FC<IProps & IMapStateToProps & IMapDispatchToProps & RouteComponentProps<any>> = props =>{
  useEffect(() => {
    if(props.isAuthenticated)
    {
      props.resetLoginForm();
      if(props.userType == 0)
        props.history.push(RoutesConstants.Employee);
      else if(props.userType == 1)
        props.history.push(RoutesConstants.MessageManager);
      else if(props.userType == 2)
        props.history.push(RoutesConstants.PaidLeave);
    }
  }, [props.isAuthenticated]);
  
  useEffect(() => {
    if(props.error)
    {
      toast.error(props.error);
    }
	}, [props.error]);

return(
  <div className="login-form-wrapper d-flex align-items-center" >
    <div className="container">
      <div className="row form-area-wrapper justify-content-center align-items-center">
        <div className="col-md-6 login-left-image">
          <img className="img-fluid" src={loginGraphics}/>
          <div className="login-header">
              <img src={gardenLogo}/>
          </div>        
        </div>    
        <div className="col-md-6">
          <div className="form-container">     
            <h2>Login</h2>
            <LoginForm isLoading={props.loading} loginHandler={props.login}/>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <p className="sign-copyright"> &copy; 2020 Gardens. All right reserved</p>     
      </div>
    </div>
  </div> 
)};


const mapStateToProps = (state: IState) => ({
  isAuthenticated: isAuthSelector(state),
  loading:state.auth.loading,
  error:state.auth.error,
  userType:state.auth.userType
});

const mapDispatchToProps = (dispatch:any) => {
	return {
    login: (data:ILogin) =>	dispatch(actions.login(data)),
    resetLoginForm:() => dispatch(reset('LoginForm'))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
