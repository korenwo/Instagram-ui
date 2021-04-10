import React from 'react';
import  avatar from './avatar.png';
import './Avatar.scss';

function Avatar (props) {

    const image = props.image || avatar;
  
    return (
        <img src={image} className="Avatar" alt="Avatar" />
    );
}

export default Avatar;
