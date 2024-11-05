import classes from './TrackNav.module.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const TrackNav = () => {

    const navigate = useNavigate()
  return (
    <div className={classes.nav}>
        <img onClick={() => navigate('/')} src={assets.logo} alt="logo" />
        <button onClick={() => navigate('/')} className='button-text'>Home</button>
    </div>
  )
}

export default TrackNav