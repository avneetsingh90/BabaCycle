import React from 'react';
import * as axios from './core/interceptors/client';
import { ToastContainer,Bounce} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './App.css';
import Body from './shared/components/Body/Body';
import 'axios-progress-bar/dist/nprogress.css';
const axiosProgressBar = require('axios-progress-bar');

const App = (props:any) => {
  axiosProgressBar.loadProgressBar({ showSpinner: false }, axios.baseAPI);
return ( 
    <div className="App">
      <Body /> 
      <ToastContainer transition={Bounce} />     
    </div>
  );
}
    
export default App;

