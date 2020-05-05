import React from 'react';
import moment from 'moment';
import { Field } from 'redux-form';
import DatePickerWrapper from './DatePickerWrapper';
import './DatePicker.css';
const formatDates = (value:any) => ((value && value!="") ? new Date(value) : "");
const normalizeDates = (value:any) => ((value && value!="") ? moment(new Date(value)).format("YYYY/MM/DD") : "");

const DatePicker = (props:any) => {
  return (
    <Field
        className={props.className}
        normalize={normalizeDates}
        format={formatDates}
        name={props.name}
        component={DatePickerWrapper}
        validate={props.validate}
        props={props}
        placeholder={props.placeholder}
      />
  );
};

export default DatePicker;
