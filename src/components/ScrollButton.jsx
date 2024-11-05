import React, { useState, useEffect } from 'react';
import classes from './ScrollButton.module.css';
import { assets } from '../assets/assets';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={classes["scroll-to-top"]}>
      {visible && (
        <div onClick={scrollToTop}>
         <img src={assets.ScrollIcon} alt="scroll-icon" />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
