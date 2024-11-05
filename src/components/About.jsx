import Title from './Title'
import classes from './About.module.css'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div id='about'>
            <Title title='Fueling Your Logistic Chain' description="About Us" />
            <div className={classes.wrapper}>
                <img src={assets.hero_13_img} alt="" />
                <div className={classes.header}>
                    <div className={classes.items}>
                        <img src={assets.blue_transport} alt="" />
                        <div className={classes.details}>
                            <h2>Air Freight</h2>
                            <p>We Are International Forwarder Specialized In Air Transportation Forwarding Your Shipments. We offer quality air freight services all over the world.</p>
                        </div>
                    </div>
                    <div className={classes.items}>
                        <img src={assets.ship} alt="" />
                        <div className={classes.details}>
                            <h2>Ocean Freight</h2>
                            <p>Ocean Transport Is One Of The Key Factors For Strong Supply Chain Management. As One Of The Leading Ocean Freight Forwarders In The Region, We Offer Efficient Sea Freight Solutions.</p>
                        </div>
                    </div>
                    <div className={classes.items}>
                        <img src={assets.truck_and_clock} alt="" />
                        <div className={classes.details}>
                            <h2>Ground Freight</h2>
                            <p>All Our Road Transport Operators Are Professionals, With Our Fast Road Transport Services We Garanteen You Quick Delivery Of Your Goods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About