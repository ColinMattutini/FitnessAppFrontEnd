import React, { Fragment, useContext } from "react";
import classes from './Food.module.css';
import FoodListing from './FoodListing.js';
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import AuthContext from "../../context/user-auth";
import DonutChart from "../Charts/DonutChart";

const Food = () => {

    const authCtx = useContext(AuthContext);

    const [food, setFood] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, showModalHandler] = useState(false);

    const fetchFood = async (foodItem) => {
    try{
        const response = await fetch(
        'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem.json' 
            
        );
        if(!response.ok) {
            throw new Error ('Get Request Failed.');
        }

        const data = await response.json();

        const loadedFood = [];
        
        for(const foodKey in data){
            if(authCtx.UUID === data[foodKey].userId){
            loadedFood.push({
                id: foodKey,
                food: data[foodKey].foodItem,
                calories: data[foodKey].calories,
                date: data[foodKey].date
            });
        }};
            setFood(loadedFood);
            console.log(food.toString());
            // console.log('Success');
    } catch(err){
        setError(err.message || 'Request Failed.')
    }
};

    useEffect(() => {
        if(authCtx.isLoggedIn){
            fetchFood();
       }
    }, [authCtx.UUID]);
    

    const foodList = food.map((foods) =>
    <FoodListing 
        key={foods.id}
        id={foods.id}
        food={foods.food}
        calories={foods.calories}
        date={foods.date}
    />
    );

    const moreInfoModal = () => {
        showModal(true);
    }

    return(
    <Fragment>
    <div className={classes.donutChart}>
        <DonutChart foodArray={food}/>
        
    </div>
    <Card>
        <section className={classes.food}>
        
            <ul>
                {foodList}
            </ul>
            
        </section>
    </Card>
    </Fragment>

    );

}
export default Food;