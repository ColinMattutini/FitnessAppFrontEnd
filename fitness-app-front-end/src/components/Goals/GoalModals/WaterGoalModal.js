import { useRef } from "react";
import useUpdateGoalFetch from "../../../hooks/useUpdateGoalFetch";
import Modal from "../../UI/Modal"


const WaterGoalModal = (props) => {

    const water = useRef();
    const { updateGoalFetch }  = useUpdateGoalFetch();

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        updateGoalFetch(water.current.value, "WATER");
        console.log(water.current.value);
    }

    return(
        <Modal>
            <button onClick={props.hideWaterModalHandler}>X</button>
            <form onSubmit={formSubmissionHandler}>
                <input ref={water}/>
                <h3>Litres</h3>
                <button>Submit</button>
            </form>
        </Modal>
    )
}

export default WaterGoalModal;