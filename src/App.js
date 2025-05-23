// src/App.js
import React, { useState } from 'react'; // Import useState
// import Navbar from './components/Navbar'; // DELETE THIS LINE
import NavigationTrigger from './components/NavigationTrigger'; // IMPORT NEW
import FullScreenNav from './components/FullScreenNav';     // IMPORT NEW
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App">
      <NavigationTrigger onClick={toggleNav} isOpen={isNavOpen} />
      <FullScreenNav isOpen={isNavOpen} onClose={toggleNav} />
      <main className={`main-content ${isNavOpen ? 'blurred' : ''}`}> {/* Optional: class to blur content */}
        <Hero />
        {/* Other page sections will go here later */}
      </main>
      <Footer />
    </div>
  );
}

export default App;