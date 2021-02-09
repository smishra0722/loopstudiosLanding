import React from 'react';
import './footer.styles.scss';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-left'>
                    <h1 className='footer-logo'>Loopstudios</h1>
                    <ul className='footer-navigation'>
                        <li className='links'>About</li>
                        <li className='links'>Services</li>
                        <li className='links'>Extras</li>
                        <li className='links'>Events</li>
                        <li className='links'>Products</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <ul className='footer-navigation-social'>
                        <li className='link'><i class="fab fa-facebook"></i></li>
                        <li className='link'><i class="fab fa-instagram-square"></i></li>
                        <li className='link'><i class="fab fa-twitter"></i></li>
                        <li className='link'><i class="fab fa-pinterest"></i></li>
                    </ul>
                    <div className='footer-copyright'>Copyright Loopstudios. All rights reserved</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;