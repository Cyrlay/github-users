import React from 'react';
import './PageNotFound.css'

const PageNotFound = () => {
    return (

        <div className={'page-not-found'}>
            <h1 className={'error-number fw-bold display-1'}>404</h1>
            <h2 className={'error-message fw-bold h2'}>Page not found</h2>
        </div>
    )
}

export default PageNotFound;