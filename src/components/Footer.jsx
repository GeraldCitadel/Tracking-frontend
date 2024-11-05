import classes from './Footer.module.css'
import { assets } from '../assets/assets'

const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()

    return (
        <div className={classes.footer}>
            <div className={classes.header}>
                {/* ......................... Left Section ...........................*/}
                <div>
                    <img src={assets.logo} alt="logo" />
                    <p>Citadel Global Courier provides global supply-chain services to help enable sustainable trade and commerce in key markets and regions. We will accomplish this by investing in our people, our facilities and in technology.</p>
                </div>

                {/* ..........................Center Section ......................... */}

                <div className={classes.center}>
                <div>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <h2>PRODUCT</h2>
                    <ul>
                        <li>Air Frieght</li>
                        <li>Ground Frieght</li>
                        <li>Maritime Frieght</li>
                        <li>Home Delivery</li>
                    </ul>
                </div>
                </div>
               

                {/* ...................... Right Section ...........................*/}
                <div>
                    <h2>GET IN TOUCH</h2>
                    <p>Birmingham B26 #QJ, United Kingdom<br /> Code: BHX, EGBB &amp; USA, Germany, Vietnam, India, Mexico etc
                    </p>
                    <ul>
                        <li>+234031009615</li>
                        <li>info@citadelglobalcourier.com</li>
                    </ul>
                </div>
            </div>
            {/*.......................... Copyright text ..............................*/}
            <div>
                <hr />
                <p className={classes.copyright}>Copyright {year} @Citadel Global Courier - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer