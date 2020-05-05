import IState from '../models/IState';

export const isAuthSelector = (state:IState) => state.auth.token ? true : false;
