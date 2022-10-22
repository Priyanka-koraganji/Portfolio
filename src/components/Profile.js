import React from 'react';
import Priya from '../img/priya.JPG';

export const Profile = () => {
    return (
        <div className='profile'>
            <div>
                <h1 class="profile-header">Priyanka Koraganji</h1>
                <h6>A full stack web developer who is passionate about creating interactive applications and experiences on the web.</h6>
                <button className='fill'><a href="https://teal-maribel-35.tiiny.site/">Checkout My Resume</a> </button>
            </div>
            <img src={Priya} alt='Profile' width="500px" height="500px"></img>
        </div>
    )
}