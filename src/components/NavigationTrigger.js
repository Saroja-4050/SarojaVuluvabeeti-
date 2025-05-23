// src/components/NavigationTrigger.js
import React from 'react';
import './NavigationTrigger.css';
// Using three dots for now, can be styled or replaced with an icon/SVG
const NavigationTrigger = ({ onClick, isOpen }) => {
    return (
        <button
            className={`navigation-trigger ${isOpen ? 'open' : ''}`}
            onClick={onClick}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
        >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </button>
    );
};

export default NavigationTrigger;