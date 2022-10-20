import React, { useContext } from "react";
import Modal from "../../UI/Modal";
import AuthContext from "../../../context/user-auth";

const ConfirmDeleteModal = (props) => {
    
    const authCtx = useContext(AuthContext);

    const deleteWorkoutFetch = async () => {
        const response = await fetch(
            'http://localhost:8080/api/user/'+authCtx.UUID+'/workout/'+props.workoutId,
            {
                method:"DELETE"
            }
        )
        props.workoutstateUpdaterHandler();
        if(!response.ok){
            throw new Error("Unable to process request!");
        }
    }

    return(
        <Modal>
            <h1>Are you sure you want to delete this workout and all exercises associated with it?</h1>
            <button onClick={deleteWorkoutFetch}>Delete</button>
            <button onClick={props.hideDisplayDeletionModal}>Cancel</button>
        </Modal>
    )
}

export default ConfirmDeleteModal;