import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
          <div className='flex flex-col justify-center items-center mt-9 py-9 space-y-3'>
            <img src={error} alt="" />
             <h1 className='text-5xl font-semibold'>OOOPss</h1>
           <p>The pages You Looking for not available</p>
           <Link to={`/`}><button className='btn btn-accent'>Go Back</button></Link>
          </div>
        </div>
    );
};

export default ErrorPage;