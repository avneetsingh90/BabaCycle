import React, { Suspense } from 'react';
import Routes from '../Routes/Routes';

const Body: React.FC = () => {
    
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes></Routes>
            </Suspense>
        </React.Fragment>
    );
}

export default Body;