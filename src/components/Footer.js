import React from 'react';
import Github from '../img/Github copy.svg';
import Linkedin from '../img/linkedin.svg';
import Medium from '../img/medium.svg';
import Twitter from '../img/twitter.svg';

export const Footer = () => {
    return (
        <div className='footer-page' id="contact">
            <h2>Want to get in touch?</h2>
            <div className='footer'>
                <div className='footer-div'>
                    <h6>Find me on</h6>
                    <div className='footer-icons'>
                        <a target="_blank"  rel="noopener noreferrer"  href='https://github.com/Priyanka-koraganji'><img src={Github} width="30px" height="30px" alt='github icon'></img> </a>
                        <a target="_blank"  rel="noopener noreferrer"  href='https://www.linkedin.com/in/priyanka-koraganji'><img src={Linkedin} width="40px" height="35px" alt='linkedin icon'></img> </a>
                        <a target="_blank"  rel="noopener noreferrer"  href='https://medium.com/@priya.koraganji04'><img src={Medium} width="40px" height="40px" alt='linkedin icon'></img> </a>
                        <a target="_blank"  rel="noopener noreferrer"  href='https://twitter.com/priya_koraganji'><img src={Twitter} width="30px" height="30px" alt='linkedin icon'></img> </a>
                    </div>
                </div>
            </div>

        </div>
    )
}