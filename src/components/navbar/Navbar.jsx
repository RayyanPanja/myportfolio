import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [flag, setFlag] = useState(false);

  function responsive() {
    console.log("Called");
    const set = document.getElementById('set');
    const links = document.querySelectorAll('.nav-links');
    let speed = 100;
    if (flag === false) {
      set.classList.add('grid');
      links.forEach((link, index) => {
        setTimeout(() => {
          if (index > 0) {
            link.classList.add('block');
          }
        }, speed * index);
      });
      setFlag(true);
    } else {
      links.forEach((link, index) => {
        setTimeout(() => {
          if (index > 0) {
            link.classList.remove('block');
          }
        }, speed * index);
      });
      setTimeout(() => {
        set.classList.remove('grid');
      }, speed * links.length);
      setFlag(false);
    }
  }

  function toTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <h1>R</h1>
        </div>
        <div className="nav-link-set" id="set">
          <a href="/" className="nav-links">
            Home
          </a>
          <a href="/#About" className="nav-links">
            About
          </a>
          <a href="/#Skills" className="nav-links">
            Skills
          </a>
          <a href="/#Education" className="nav-links">
            Education
          </a>
          <a href="/contact" className="nav-links">
            Contact
          </a>
        </div>
        <button className='icon' onClick={responsive}>
          Icon
        </button>
      </nav>
      <button className="to-top" onClick={() => toTop()}>
        Up
      </button>
    </>
  );
};

export default Navbar;
