import React from 'react';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import './Header.scss';
import  logo from './logo.png';
import Search from './Search/Search';

function Header () {
    return (
        <div>
            <h1 className="headerPhone"><a className="headerPhone" href="/"><img src={logo} className="headerPhone" alt="logo" /></a></h1>
            <header className="header">
                <nav className="navbarPhone">
                    <nav className="navbar">
                        <a className="logo" href="/"><img src={logo} className="logo" alt="logo" /></a>
                        <Search />
                        <HeaderAvatar />
                    </nav>
                </nav>
            </header>
        </div>
    );
}

export default Header;
