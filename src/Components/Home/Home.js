import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    
    return (
        <>
         <h1>Hello HOme</h1>   
         there is arrya length{services.length}
         <Link className='btn btn-round bg-slate-700' to={'/services'}>See All</Link>
        </>
    );
};

export default Home;