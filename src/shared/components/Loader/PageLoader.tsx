import React from 'react';
import {Spinner} from 'react-bootstrap';

const PageLoader = (props:any) =>{
    return (
        <div className="loader-backdrop">
            <Spinner
            className="page-loader"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        </div>
    )
};

export default PageLoader;