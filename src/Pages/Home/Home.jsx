import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import Apps from '../../Components/Apps/Apps';

const Home = () => {
    const data = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;