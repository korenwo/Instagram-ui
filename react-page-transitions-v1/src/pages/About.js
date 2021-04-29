import React from 'react'
import Hero from './../components/Hero';
import Header from './../components/Header';
import Image from '../images/img2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from './../animations/index';

const About = () => {
    return (
        <motion.div initial="out" animate='in' exit='out'
        variants={animationTwo}>
            <Header />
            <Hero image={Image} title='Web Developer' desc='Never seen before' />
            About
        </motion.div>
    )
}

export default About;
