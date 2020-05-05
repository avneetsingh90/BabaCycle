import React from 'react';
import {IReduxFormTextArea} from '../../../models/IReduxFormHandlers';

const ReduxFormInput:React.FC<IReduxFormTextArea> = props => {
  const errorClass = `${(props.meta.error && props.meta.touched) || props.meta.warning ? 'error' : ''}`;
  return (
    <React.Fragment>
      <textarea 
        {...props.input}
        placeholder={props.placeholder}
        className={props.className + ' ' + errorClass}
        rows={props.rows}
      > 
      </textarea>  
      {props.meta.touched &&
        ((props.meta.error && <span className="text-danger">{props.meta.error}</span>) ||
          (props.meta.warning && <span className="text-danger">{props.meta.warning}</span>))}
    </React.Fragment>
  );
};

export default ReduxFormInput;
