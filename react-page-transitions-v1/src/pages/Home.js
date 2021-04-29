import React from 'react'
import Hero from './../components/Hero';
import Header from './../components/Header';
import Image from '../images/img3.jpg';
import { motion } from 'framer-motion'
import { animationOne, transition } from './../animations/index';

const Home = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Header />
            <Hero image={Image} title='Experience Nature' desc='Once in a lifetime' />
        </motion.div>
    );
};

export default Home;
