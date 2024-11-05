import { assets } from '../assets/assets'
import classes from './Solution.module.css'

const Solution = () => {
  return (
    <div className={classes.header}>
        <img src={assets.img_14} alt="happy clients" />
        <div className={classes.wrapper}>
            <h2>CITADEL GLOBAL COURIER</h2>
            <h1>Quick & Powerful <br /> Logistic Solution</h1>
            <p>We have very strong local presence in the United States and Canada and you will have multiple service options when sending freight within all destinations. Whether you are sending across town or over seas country, Gateway Global offers delivery service to virtually every address in the globe.</p>
            <a href='#track' className='button'>Track Parcel</a>
        </div>
    </div>
  )
}

export default Solution