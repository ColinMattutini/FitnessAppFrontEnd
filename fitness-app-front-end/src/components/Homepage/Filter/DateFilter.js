import React, { useContext } from 'react';
import AuthContext from '../../../context/user-auth';

const DateFilter = (props) => {

    const authCtx = useContext(AuthContext);

    const dateChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        authCtx.updatedStateHandler(90);
        console.log(props.selected)
    };

    return(
        <div> 
            <label>Filter By Date</label>
            <input type='date' value={props.selected} onChange={dateChangeHandler}/>

        </div>

    );

};

export default DateFilter;