enum authType {
  LOGIN_START='LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGIN_LOGGED = 'LOGIN_LOGGED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  UPDATE_AUTH = 'UPDATE_AUTH',
}

export interface LoginStartAction {
	type: typeof authType.LOGIN_START
}

export interface LoginSuccessAction {
  type: typeof authType.LOGIN_START,
  payload:any
}

export interface LoginFailedAction {
  type: typeof authType.LOGIN_FAILED,
  payload:string
}

export interface LoginLoggedAction {
  type: typeof authType.LOGIN_LOGGED,
  payload:string
}


export default authType;
