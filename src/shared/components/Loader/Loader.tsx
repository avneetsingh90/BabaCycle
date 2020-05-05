import React from 'react';
import {Spinner} from 'react-bootstrap';

interface IProps {

}

const Loader:React.FC<IProps>= props =>{
    return (
        <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        />
    )
};

export default Loader;