import Modal from "../../UI/Modal.js";
import useUpdateGoalFetch from "../../../hooks/useUpdateGoalFetch.js";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../../context/user-auth.js";
const SleepGoalModal = (props) => {

    // const [hours, setHours] = useState(0);
    const hours = useRef();
    const authCtx = useContext(AuthContext);
    const { updateGoalFetch }  = useUpdateGoalFetch();
    

    // const updateGoalFetch =  async (hours) => {
    //     try{
    //         const response = fetch(
    //             "http://localhost:8080/api/goal/"+authCtx.UUID,
    //             {
    //                 method: "PUT",
    //                 body: JSON.stringify({
    //                     goalNumber: hours,
    //                     goalType: "SLEEP",
    //                 }),
    //                 headers: {
    //                     'Content-Type': 'application/json',
                       
    //                 },
    //             }
    //         )
            
            
    //     }
    //     catch{
    //         throw new Error("PUT REQUEST DID NOT WORK!");
    //     }
    //     }


    const formSubmissionHandler = (event) => {
        event.preventDefault();
        updateGoalFetch(hours.current.value, "SLEEP");
        // updateGoalFetch(hours.current.value);
        console.log(hours.current.value);
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