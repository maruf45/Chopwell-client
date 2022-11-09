import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/services?size=6')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <>
           <h1>services {services.length}</h1> 
        </>
    );
};

export default Services;