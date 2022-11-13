import { Fragment, useEffect, useState } from 'react';
import CalorieTrackerForm from '../Homepage/FoodTrackerForm/CalorieTrackerForm';
import classes from './Homepage.module.css';
import { useContext } from 'react';
import AuthContext from '../../context/user-auth';
import Food from './Food.js';
import CalorieTrackerModal from './FoodTrackerForm/CalorieTrackerModal';

const Homepage = (props) => {

  const authCtx = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
      setShowModal(true);
    }

    const hideModalHandler = () => {
      setShowModal(false);
    }

    return(
      <Fragment>
        {showModal && <CalorieTrackerModal hideModalHandler={hideModalHandler}/>}
        
        <div className={classes.homepage}>
          <Food showModalHandler={showModalHandler}/>          
        </div> 
        
        
        
      </Fragment>
    );

};

export default Homepage;