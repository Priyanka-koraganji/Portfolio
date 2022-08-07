import React from 'react';
import Github from '../img/Github copy.svg';
import Linkedin from '../img/linkedin.svg';

export const Footer = () => {
    return (
        <div className='footer'>
            <h2>Find me on</h2>
            <div className='footer-icons'>
                <a href='#'><img src={Github} width="30px" height="30px" alt='github icon'></img> </a>
                <a href='#'><img src={Linkedin} width="40px" height="35px" alt='linkedin icon'></img> </a>
            </div>
        </div>
    )
}