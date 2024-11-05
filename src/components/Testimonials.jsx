import { useEffect, useState } from 'react'
import classes from './Testimonials.module.css'
import Title from './Title'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { testimonials } from '../assets/assets'



const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % testimonials.length)
        }, 5000);

        return () => {clearInterval(interval)}
    }, [currentIndex])

    const handleClick = (direction) => {
        direction === 'next'
            ? setCurrentIndex((currentIndex + 1) % testimonials.length)
            : setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className={classes.card}>
            <Title title='Read What Our Users Have To Say About Us' description='We Take Your Business Further' />
            <div className={classes.header}>
                {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                    <div className={classes.details} key={index}>
                        <FaQuoteLeft style={{color: "gray"}} />
                        <p>{testimonial.text}</p>
                        {/* <FaQuoteRight /> */}
                        <img src={testimonial.image} alt="author" />
                        <h2>{testimonial.title}</h2>

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

export default Testimonials