import React from 'react';
import Navbar from '../nav-bar/nav-bar.component';
import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-text'>
                <div className='text-box'>IMMERSIVE<br /> EXPERIENCES<br /> THAT DELIVER</div>
            </div>
        </div>
    );
}


export default Header;
