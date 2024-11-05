import classes from './Title.module.css'

const Title = ({title, description}) => {
  return (
    <div className={classes.title}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={classes.one}><div className={classes.two}></div></div>
    </div>
  )
}

export default Title