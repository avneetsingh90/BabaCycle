import React from 'react';
import {IReduxFormInput} from '../../../models/IReduxFormHandlers';

const ReduxFormInput:React.FC<IReduxFormInput> = props => {
  const errorClass = `${(props.meta.error && props.meta.touched) || props.meta.warning ? 'error' : ''}`;
  return (
    <React.Fragment>
      <input
        {...props.input}
        placeholder={props.placeholder}
        type={props.type}
        readOnly={props.readOnly}
        className={props.className + ' ' + errorClass}

      />
      {props.meta.touched &&
        ((props.meta.error && <span className="text-danger">{props.meta.error}</span>) ||
          (props.meta.warning && <span className="text-danger">{props.meta.warning}</span>))}
    </React.Fragment>
  );
};

export default ReduxFormInput;
