import classes from './CalorieTrackerForm.module.css';

const CalorieTrackerForm = (props) => {
    return(
        <form>
            <div className={classes.trackerForm}>
            <label htmlFor='foodItem'>Enter Food Here</label>
            <input 
                type='text'

            />
            <label htmlFor='calories'>Enter Calories Here</label>
            <input 
                type='text'

            />
            </div>

        </form>

    );

};

export default CalorieTrackerForm;