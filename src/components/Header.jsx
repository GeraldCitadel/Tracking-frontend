import { assets } from '../assets/assets'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        <h2 className={classes.h2}>Mission and Impact</h2>
        <p>Citadel Global Courier Services delivers goods and services to local communities, customers and international business partners. With access to an integrated global network of road, rail and sea transport resources, the company prides itself on delivering global service with local knowledge. Through a network of 480 offices, Citadel Global Courier ensures that shippers can talk directly to our representatives, as well as using a variety of e-business solutions for digitalized cargo bookings.</p>
        <div className={classes.wrapper}>
            <div className={classes.items}>
                <img src={assets.shield} alt="" />
                <div className={classes.details}>
                    <h2>Service Guarantee</h2>
                    <p>We offer highly secured services and we values and apply integrity, care and professionalism to members of our Team and clients alike. </p>
                </div>
            </div>
            <div className={classes.items}>
                <img src={assets.box_safe} alt="" />
                <div  className={classes.details}>
                    <h2>Linking Better</h2>
                    <p>We offer highly secured services and we values and apply integrity, care and professionalism to members of our Team and clients alike.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header