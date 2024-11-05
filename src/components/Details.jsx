import classes from './Details.module.css'

const Details = ({ name, number, email, address, label }) => {
    return (
        <div className={classes.header}>
            <h2>{label} Details</h2>
            <div className={classes.details}>
                    <div className={classes['details-left']}>
                        <h4>{label} Name:</h4>
                        <p>{name}</p>
                    </div>
                    <div className={classes['details-left']}>
                        <h4>{label} Address:</h4>
                        <p>{address}</p>
                    </div>
                    <div className={classes['details-left']}>
                        <h4>{label} Email:</h4>
                        <p>{email}</p>
                    </div>
                    <div className={classes['details-left']}>
                        <h4>{label} Number:</h4>
                        <p>{number}</p>
                    </div>  
            </div>
        </div>
    )
}

export default Details