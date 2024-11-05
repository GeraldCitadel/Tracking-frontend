import classes from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={classes.header}>
        <h1>Stay up to date with our news, ideas and updates</h1>
        <form action="">
            <input type="email" name="newsletter" id="email" autoComplete='false' placeholder='Your Email Address' required />
            <button className='button'>Subscribe Now</button>
        </form>
    </div>
  )
}

export default Newsletter