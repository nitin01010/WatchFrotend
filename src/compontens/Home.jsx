import React from 'react';
import Cart from './Cart';
import Footer from './Footer';
import Profile from './Profile';
const Home = () => {
    console.log('home');
    return (
        <main>
            <div className='MainContainerHeading'>
                <span>
                    <h1>Ultra-Luxury Watches for <br /> Millionaires ✨🌎 <br /> Elevate Your Style </h1>
                </span>
            </div>
            <section>
                <div className='ProductsContainer'>
                    <Cart />
                </div>
            </section>
            <Profile />
        </main>
    );
}

export default Home;