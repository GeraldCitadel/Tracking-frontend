import classes from './Count.module.css'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <div className={classes.count}>
        <div className={classes.details}>
            <h1><CountUp end={127} enableScrollSpy /></h1>
            <hr />
            <p>Qualified Staff</p>
        </div>
        <div className={classes.details}>
            <h1><CountUp end={748} enableScrollSpy /></h1>
            <hr />
            <p>Awards</p>
        </div>
        <div className={classes.details}>
            <h1><CountUp end={57} enableScrollSpy /></h1>
            <hr />
            <p>Agents</p>
        </div>
    </div>
  )
}

export default Count