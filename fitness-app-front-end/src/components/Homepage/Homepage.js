import { Fragment } from 'react';
import CalorieTrackerForm from '../FoodTrackerForm/CalorieTrackerForm';
import classes from './Homepage.module.css';


const Homepage = (props) => {
    return(
      <Fragment>
        
        <div className={classes.homepage}>
          <h1>
              Track Food and Calories Here
          </h1>
          <CalorieTrackerForm />
        </div>  
      </Fragment>
    );

};

export default Homepage;