export enum actionType {
    DEFAULT_STATE='DEFAULT_STATE'
  }

export interface IActionType {
    type: any
}

export interface IActionTypePayload {
    type: any,
    payload:any
}