import CalorieTrackerForm from '../FoodTrackerForm/CalorieTrackerForm';
import classes from './Homepage.module.css';

const Homepage = (props) => {
    return(
      <div className={classes.homepage}>
        <h1>
            Track Food and Calories Here
        </h1>
        <CalorieTrackerForm />
      </div>  
    );

};

export default Homepage;