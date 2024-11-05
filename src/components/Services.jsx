import { assets } from '../assets/assets'
import classes from './Services.module.css'
import Title from './Title'

const Services = () => {
  return (
    <div id='services' className={classes.services}>
        <Title title='Our Services' description='Moving Every Product With Care' />
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <img src={assets.banner_slider_2} alt="truck" />
                <h1>Full Truck Freight</h1>
                <p>Move high-volume and high-capacity orders faster with our full truckload freight logistics</p>
            </div>
            <div className={classes.header}>
                <img src={assets.warehouse} alt="warehouse" />
                <h1>Warehousing</h1>
                <p>We Store inventory across highly optimised locations</p>
            </div>
            <div className={classes.header}>
                <img src={assets.ship} alt="ship" />
                <h1>Cross Border Service</h1>
                <p>Get door-to-door, port-to-port Express parcel and Freight services around globe</p>
            </div>
        </div>
        <div className={classes.items}>
            <div className={classes.details}>
                <h2>Expedited Services</h2>
                <p>  Our ever-increasing fleet (vans, sprinters straight trucks and tractor-trailers) features new equipment, satellite tracking and professional drivers who understand the importance of on-time performance and consistent communication on every shipment they handle. </p>
            </div>
            <img src={assets.map} alt="map" />
        </div>
    </div>
  )
}

export default Services