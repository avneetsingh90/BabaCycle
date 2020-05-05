import React from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerWrapper = (props:any) => {
     const dateFormat='yyyy/MM/dd';
     const errorClass = `${(props.meta.error && props.meta.touched) || props.meta.warning ? 'error' : ''}`;
  return (
    <React.Fragment>
    <DatePicker
        selected={props.input.value}
        onChange={props.input.onChange}  
        maxDate={new Date()} 
        dateFormat={dateFormat} 
      />
       {props.meta.touched &&
        ((props.meta.error && <span className="text-danger">{props.meta.error}</span>) ||
          (props.meta.warning && <span className="text-danger">{props.meta.warning}</span>))}
    </React.Fragment>
  );
};

export default DatePickerWrapper;
