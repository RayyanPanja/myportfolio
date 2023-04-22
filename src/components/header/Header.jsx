import React from 'react';
import './Header.css';

const Header = () => {
    const follow = (e) => {
        const ball = document.getElementById('ball');
        var width = parseInt(getComputedStyle(ball).getPropertyValue('width')) / 2;
        var height = parseInt(getComputedStyle(ball).getPropertyValue('height')) / 2;
        ball.style.transform = `translate(${e.clientX - width}px,${e.clientY - height * 4.5}px) rotate(${e.clientX * e.clientY}deg)`;
    };
    
    return (
        <header className="hero-section" id="Hero" onMouseMove={follow}>
            <div className="hero-text-wrapper">
                <h1 className="intro-title">Rayyan Panja</h1>
                <h2 className="intro-subtitle tags">Web Developer</h2>
                <a href="/#About" className="hero-btn">
                    Explore
                </a>
            </div>
            <div className="ball" id="ball"></div>
        </header>
    );
};

export default Header;
