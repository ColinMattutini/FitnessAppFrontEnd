import { Fragment, useEffect } from 'react';
import CalorieTrackerForm from '../FoodTrackerForm/CalorieTrackerForm';
import classes from './Homepage.module.css';
import { useContext } from 'react';
import AuthContext from '../../context/user-auth';
import Food from './Food.js';

const Homepage = (props) => {

  const authCtx = useContext(AuthContext);

  const userInfo =() => {
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDp4Tq7CcT5TUe1a5pPDBjUlly9zE-K6dM',
    {
        method: 'POST',
        body: JSON.stringify({
            idToken: authCtx.token
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }
    ).then(res => {
        if(res.ok){
            return res.json();
        }
    }).then(data => {
        // authCtx.userInfo(data.users.localId);
        
        authCtx.id(data.users[0].localId);
        console.log('Tracking userInfo Function')
        
    })
};

  // if(authCtx.UUID === null){
  //   userInfo();
  // };


// useEffect(() => {
//   if(authCtx.token !== 'null'){
//   userInfo();
// }
// })


    return(
      <Fragment>
        
        <div className={classes.homepage}>
          <div className={classes.calorieSheet}>
          <h1>
              Track Food and Calories Here
          </h1>
          
          <CalorieTrackerForm />
          </div>
          
        </div> 
        <div className={classes.foodListing}>
          <Food />
        </div> 
         
        
          
        
      </Fragment>
    );

};

export default Homepage;