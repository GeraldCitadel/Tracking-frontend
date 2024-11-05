import { useState } from 'react'
import { assets } from '../assets/assets'
import classes from './TrackInput.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const TrackInput = () => {

    const [trackingDetails, setTrackingDetails] = useState(false)
    const [trackingNumber, setTrackingNumber] = useState('')
    const [isError, setIsError] = useState()
    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const handleTrack = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(backendUrl + `/details/${trackingNumber}`)
            if (data) {
                setTrackingDetails(data)
                navigate(`/details/${trackingNumber}`)
            } else {
                toast.error('Invalid Tracking Number')
            }
        } catch (error) {
            setIsError(error?.message || 'Invalid Tracking Number')
            toast.error('Invalid Tracking Number')
        }
    }

    console.log(trackingDetails.trackingNumber)
    return (
        <div id='track' className={classes.track}>
            <div className={classes.details}>
                <h1>Track Shipment</h1>
                <p>Shipments Delivered on Time With <br className={classes.break} /> no Hassle</p>
                <form action="" onSubmit={handleTrack}>
                    {isError && <p>Could not fetch details, tracking number no found</p>}
                    <input type="text"
                        placeholder='Enter Shipment Tracking Number'
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        required
                    />
                    <button type='submit' className='button'>Track Shipment</button>
                </form>
            </div>
            <div>
                <img src={assets.dashboard_04} alt="" />
            </div>
        </div>
    )
}

export default TrackInput