import React from 'react';
import Navbar from '../nav-bar/nav-bar.component';
import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-text'>
                <div className='text-box'>Immersive Experiences that deliver</div>
            </div>
        </div>
    );
}


export default Header;
