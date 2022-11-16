import Modal from "../../UI/Modal.js";
import useUpdateGoalFetch from "../../../hooks/useUpdateGoalFetch.js";
import { useContext, useRef } from "react";
import AuthContext from "../../../context/user-auth.js";
const SleepGoalModal = (props) => {

    const hours = useRef();
    const authCtx = useContext(AuthContext);
    const { updateGoalFetch }  = useUpdateGoalFetch();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        updateGoalFetch(hours.current.value, "SLEEP");
        console.log(hours.current.value);
        localStorage.setItem("SLEEPGOAL", hours.current.value);
    }


    return(
        <Modal>
            <button onClick={props.hideSleepModalHandler}>X</button>
            <form onSubmit={formSubmissionHandler}>
                <label></label>
                <input
                    ref={hours}
                />
                <h3>Hours</h3>
                <button>Submit</button>
            </form>
        </Modal>
    )
}

export default SleepGoalModal;