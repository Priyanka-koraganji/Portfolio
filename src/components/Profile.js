import React from 'react';
import Priya from '../img/priya.JPG';

export const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-content'>
                <h1 class="profile-header">Priyanka Koraganji</h1>
                <h6>A full stack web developer who is passionate about creating interactive applications and experiences on the web.</h6>
                <div className='fill'><a href="https://teal-maribel-35.tiiny.site/">Checkout My Resume</a> </div>
            </div>
            <img src={Priya} alt='Profile'></img>
        </div>
    )
}