import React from 'react';
import PropTypes from 'prop-types';
import  avatar from './avatar.png';
import './Avatar.scss';

function Avatar (props) {

    const image = props.image || avatar;
    const propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
    };
            console.log(props, 'avatar')

    return (
        <img src={image} className="Avatar" alt="Avatar" />
    );
}

export default Avatar;
