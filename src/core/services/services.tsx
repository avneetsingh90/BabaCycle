import * as axios from '../interceptors/client';

let config = {
	headers: {
		'Content-Type': 'application/json'
	}
};

export const get = (url:string) => {
	return axios.baseAPI.get(url, config)
};

export const post = (url:string, data:any) => {
	return axios.baseAPI.post(url, data,config)
};

export const deleteapi = (url:string) => {
	return axios.baseAPI.delete(url,config)
};
