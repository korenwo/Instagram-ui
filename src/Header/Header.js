import React from 'react';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import './Header.scss';
import  logo from './logo.png';
import Menu from './Menu/Menu';
import Search from './../Search/Search';

function Header () {
    return (
        <header className="header">
            <nav className="navbar">
                <a className="logo" href="/"><img src={logo} className="logo" alt="logo" /></a>
                <Menu />
                <HeaderAvatar />
            </nav>
        </header>
    );
}

export default Header;
