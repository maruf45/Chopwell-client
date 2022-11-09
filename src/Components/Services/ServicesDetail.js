import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetail = () => {
    const {food_type} = useLoaderData();
    return (
        <>
         ServicesDeatil   
         {food_type}
        </>
    );
};

export default ServicesDetail;