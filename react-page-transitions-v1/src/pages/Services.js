import React from 'react'
import Hero from './../components/Hero';
import Header from './../components/Header';
import Image from '../images/img1.jpg';

const Services = () => {
    return (
        <>
            <Header />
            <Hero image={Image} title='korenwohl@gmail.com' desc='for more Details' />
            Services
        </>
    )
}

export default Services;
