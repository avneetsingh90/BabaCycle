import axios from 'axios';
import config from '../../helpers/config.helper';
import store from '../store/store';
 
 const appConfig = config();
 export const baseURL = appConfig.REACT_APP_API_URL;
 export const baseAPI = axios.create({ baseURL });

 const requestHandler = (request:any) => {
    const token = store.getState().auth.token;
    request.headers['authorization'] = 'Bearer ' + token;
    return request;
};

const errorHandler = (error:any) => {
        if (error.response.status == 401) {
        }
        return Promise.reject({ ...error });
};

const successHandler = (response:any) => {
    return response;
};

baseAPI.interceptors.request.use(request => requestHandler(request));
baseAPI.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);

    