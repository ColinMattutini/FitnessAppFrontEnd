import React, { Fragment } from "react";
import classes from './ExerciseList.module.css'

const ExerciseList = (props) => {
    return(
        <Fragment>
            <div className={classes.display}>
                    <div>
                        <h1>{props.exerciseName}</h1>
                    </div>
                    <div  className={classes.entries}>
                        <div className={classes.button_left}>
                            <button>-</button>
                        </div>
                        <div className={classes.holder}>
                            <h2>Sets</h2>
                            <h1>{props.sets}</h1>
                        </div>
                        <div className={classes.button_right}>
                            <button>+</button>
                        </div>
                    </div>  

                    <div className={classes.midhold}>       
                        <div className={classes.button_left}>
                            <button onClick={props.exerciseListDecreaser}>←</button>  
                        </div>
                        <div className={classes.button_right}>
                            <button onClick={props.exerciseListIncreaser}>→</button>  
                        </div>
                    </div>

                    <div  className={classes.entries}>
                        <div className={classes.button_left}>
                            <button>-</button>
                        </div>
                        <div className={classes.holder}>
                            <h2>Reps</h2>
                            <h1>{props.reps}</h1>
                        </div>
                        <div className={classes.button_right}>
                            <button>+</button>
                        </div>
                    </div>  
                         
            </div>
            
            </Fragment>
    )

}

export default ExerciseList;