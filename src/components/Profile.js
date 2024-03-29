import React from 'react';
import Priya from '../img/priya.jpg';

export const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-content'>
                <h1 class="profile-header">Priyanka Koraganji</h1>
                <h6>A full stack web developer who is passionate about creating interactive applications and experiences on the web.</h6>
                <div className='fill'><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1yxpO0lhywNq5As1uIvxt8TF5zdVdfLYP/view?usp=sharing">Checkout My Resume</a> </div>
            </div>
            <img src={Priya} width="400px" alt='Profile'></img>
        </div>
    )
}