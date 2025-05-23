// src/components/Hero.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Typewriter from 'typewriter-effect';
import './Hero.css';

// Optional: Set your profile picture URL here
const userProfilePicUrl = "https://via.placeholder.com/150"; // Example placeholder

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particleOptions = { /* ... YOUR EXISTING PARTICLE OPTIONS ... */
        background: { color: { value: '#1a1a1a' } }, fpsLimit: 60, interactivity: { events: { onHover: { enable: true, mode: 'repulse' }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 } } }, particles: { color: { value: '#ffffff' }, links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.3, width: 1 }, collisions: { enable: true }, move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 1, straight: false }, number: { density: { enable: true, area: 800 }, value: 80 }, opacity: { value: 0.5 }, shape: { type: 'circle' }, size: { value: { min: 1, max: 3 } } }, detectRetina: true
    };

    return (
        <div className="hero-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particleOptions}
                className="particles-background"
            />
            <div className="hero-content">
                {/* === OPTIONAL: Profile Picture === */}
                {/* Uncomment the next line if you want the profile picture in the Hero section */}
                {/* <img src={userProfilePicUrl} alt="Saroja Vuluvabeeti" className="hero-profile-pic" /> */}

                {/* === STATIC NAME === */}
                <h1 className="hero-name-static">SAROJA VULUVABEETI</h1>

                {/* === LOOPING TYPEWRITER TAGLINE === */}
                <div className="hero-tagline-container">
                    <Typewriter
                        options={{
                            strings: [
                                "Crafting Intelligent Solutions",
                                "MS in CS, AI/ML Specialist",
                                "Innovating with Code and Data" // You can add more phrases
                            ],
                            autoStart: true,
                            loop: true, // Set to loop
                            delay: 50,
                            deleteSpeed: 30, // Speed of deleting previous string
                            wrapperClassName: "hero-tagline-typewriter",
                            cursorClassName: "hero-tagline-cursor",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;