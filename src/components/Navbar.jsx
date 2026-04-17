import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container glass">
          <div className="nav-logo">
            <h1><span className="text-gradient">Vanshika.</span></h1>
          </div>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul className={`nav-links ${isOpen ? 'mobile-open' : ''}`}>
            <li><a onClick={() => scrollTo('home')}>Home</a></li>
            <li><a onClick={() => scrollTo('about')}>About</a></li>
            <li><a onClick={() => scrollTo('experience')}>Experience</a></li>
            <li><a onClick={() => scrollTo('projects')}>Projects & Apps</a></li>
            <li><a onClick={() => scrollTo('achievements')}>Achievements</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
