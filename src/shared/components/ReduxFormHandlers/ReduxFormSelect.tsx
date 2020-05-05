import React from 'react';
import {IReduxFormSelect} from '../../../models/IReduxFormHandlers';

const ReduxFormSelect:React.FC<IReduxFormSelect> = props => {
  const errorClass = `${(props.meta.error && props.meta.touched) || props.meta.warning ? 'error' : ''}`;
  return (
    <React.Fragment>
      <select
        className={props.className + ' ' + errorClass}   
        {...props.input}
        disabled={props.disabled}
      >
        {props.options &&
        props.options.map((data: any, i: number) => {
            return <option value={data.id}>{data.value}</option>;
        })}
      </select>
      {props.meta.touched &&
        ((props.meta.error && <span className="text-danger">{props.meta.error}</span>) ||
          (props.meta.warning && <span className="text-danger">{props.meta.warning}</span>))}
    </React.Fragment>
  );
};

export default ReduxFormSelect;
