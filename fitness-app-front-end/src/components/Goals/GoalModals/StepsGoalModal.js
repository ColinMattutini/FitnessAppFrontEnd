import { useRef } from "react";
import useUpdateGoalFetch from "../../../hooks/useUpdateGoalFetch";
import Modal from "../../UI/Modal";

const StepsGoalModal = (props) => {
    const steps = useRef();
    const { updateGoalFetch }  = useUpdateGoalFetch();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        updateGoalFetch(steps.current.value, "STEPS");
        console.log(steps.current.value);
        localStorage.setItem("STEPSGOAL", steps.current.value);
    }
    return(
        <Modal>
            <button onClick={props.hideStepsModalHandler}>X</button>
            <form onSubmit={formSubmissionHandler}>
                <input ref={steps}></input>
                <h3>Steps</h3>
                <button>Submit</button>
            </form>
        </Modal>
    )
}

export default StepsGoalModal;