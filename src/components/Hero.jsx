import React, { useEffect, useState } from 'react'
import { heroSlider } from '../assets/assets'
import classes from './Hero.module.css'

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % heroSlider.length)
        }, 5000);

        return () => clearInterval(intervalId)
    }, [currentIndex])

    const handleClick = (direction) => {
        direction === 'next'
            ? setCurrentIndex((currentIndex + 1) % testimonials.length)
            : setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
    }

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
            <img src={heroSlider[currentIndex].image} alt="slider image" />
            <div className={classes.details}>
            <a href="#home">{heroSlider[currentIndex].url}</a>
            <h2>{heroSlider[currentIndex].title1} <br  /> {heroSlider[currentIndex].title2}</h2>
            <p>{heroSlider[currentIndex].description}</p>
            <a href='#services' className='button'>{heroSlider[currentIndex].button}</a>
            </div>
           
            </div>
            <div className={classes.container}>
                {heroSlider.map((_, index) => (
                    <div
                        key={index}
                        className={currentIndex === index ? classes.active : classes.dot}
                        onClick={() => handleDotClick(index)}
                    >
                    </div>
                ))}
            </div>
            <div className={classes.btn}>
                <button onClick={() => handleClick('prev')} className={`${classes.prev} button-text`}>Prev</button>
                <button onClick={() => handleClick('next')} className={`${classes.next} button-text`}>Next</button>
            </div>
        </div>
    )
}

export default Hero