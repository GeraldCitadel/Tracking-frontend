import { useNavigate, useParams } from 'react-router-dom'
import Details from '../components/Details'
import classes from './TrackingDetails.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TrackNav from '../components/TrackNav'
import { FaLessThan } from 'react-icons/fa'

const TrackingDetails = () => {
    const { trackingNumber } = useParams()
    const [tracking, setTracking] = useState(false)
    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const currentDate = new Date()
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }

    const date = currentDate.toLocaleDateString('en-GB', options)
    const arrivalDate = new Date(tracking.arrival).toLocaleDateString('en-US', options);
    const departureDate = new Date(tracking.departure).toLocaleDateString('en-US', options);


    useEffect(() => {
        const fetchTrackingNumber = async () => {
            const { data } = await axios.post(backendUrl + `/details/${trackingNumber}`)
            if (data) {
                setTracking(data)
            }
        }
        fetchTrackingNumber()
    }, [])


    console.log(trackingNumber)
    console.log(tracking.account)
    console.log(tracking.message)

    return (
        <>
            <TrackNav />
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.overview}>
                        <p>You are to pay the Logistic Charges of {tracking.fee}</p>
                        <h2>{tracking.trackingNumber}</h2>
                        <h2>{tracking.status}</h2>
                        <h3>{tracking.location}</h3>
                        <div className={classes.description}>
                            <h4>{tracking.description}</h4>
                        </div>
                    </div>
                    <div className={classes.details}>
                        <div className={classes['details-right']}>
                            <h4>Shipment ID:</h4>
                            <p>{tracking.id}</p>
                        </div>
                        <div className={classes['details-right']}>
                            <h4>Weight:</h4>
                            <p>{tracking.weight}</p>
                        </div>
                        <div className={classes['details-right']}>
                            <h4>Freight:</h4>
                            <p>{tracking.delivery}</p>
                        </div>
                        <div className={classes['details-right']}>
                            <h4>Transit Status:</h4>
                            <p>{tracking.status}</p>
                        </div>
                    </div>
                </div>
                {tracking.account && tracking.account.trim() !== "" &&
                    <div className={classes.info}>
                        <h4>Account Information:</h4>
                        <p>{tracking.account}</p>
                    </div>
                }
                {tracking.message && tracking.message.trim() !== "" &&
                    <div className={classes.info}>
                        <h4>Company Message:</h4>
                        <p>{tracking.message}</p>
                    </div>
                }
                <table className={classes.table}>
                    <caption>Shipment Update</caption>
                    <thead>
                        <tr>
                            <th>FROM</th>
                            <th>LOCATION</th>
                            <th>TO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{tracking.senderName}</th>
                            <th>{tracking.location}</th>
                            <th>{tracking.receiverAddress}</th>
                        </tr>
                        <tr>
                            <td>{departureDate}</td>
                            <td>{date}</td>
                            <td>{arrivalDate}</td>
                        </tr>
                    </tbody>
                </table>
                <Details label="Receiver" name={tracking.receiverName} email={tracking.receiverEmail} address={tracking.receiverAddress} number={tracking.receiverNumber} />
                <Details label="Sender" name={tracking.senderName} email={tracking.senderEmail} address={tracking.senderAddress} number={tracking.senderNumber} />
                <button onClick={() => { navigate('/') }} className='button-text'><FaLessThan className={classes.arrow} /><FaLessThan className={classes.arrow} /> Back to Homepage</button>
            </div>
        </>

    )
}

export default TrackingDetails