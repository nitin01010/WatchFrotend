import React from 'react';
import Profile from './Profile'
const About = () => {
    console.log('about');
    return (
        <div>
            <h2 style={{ textAlign: 'center', padding: '10px', fontSize: '25px' }}>ABOUT</h2>
            <Profile />
        </div>
    );
}

export default About;
