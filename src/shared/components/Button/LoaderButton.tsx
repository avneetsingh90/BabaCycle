import React from 'react';
import Loader from '../Loader/Loader';    
import {Button} from 'react-bootstrap';

const LoaderButton = (props:any) => {
  return (
      <React.Fragment>
        <Button
            onClick={props.onClick}
            disabled={props.isLoading}
            type="submit"
            className="btnSubmit btn btn-primary">
                {props.text}
                {props.isLoading ? <Loader/> : null}
        </Button>
      </React.Fragment>
    );
}

export default LoaderButton


