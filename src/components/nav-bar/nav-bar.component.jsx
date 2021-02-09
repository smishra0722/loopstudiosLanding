import React from 'react';
import './nav-bar.styles.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>Loopstudios</div>
            <div className='navbar-links'>
                <ul className='links'>
                    <li className='link'>About</li>
                    <li className='link'>Careers</li>
                    <li className='link'>Events</li>
                    <li className='link'>Podcasts</li>
                    <li className='link'>Support</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
