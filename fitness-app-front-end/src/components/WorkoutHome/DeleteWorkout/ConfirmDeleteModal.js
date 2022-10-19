import React from "react";
import Modal from "../../UI/Modal";

const ConfirmDeleteModal = (props) => {
    
    return(
        <Modal>
            <h1>Are you sure you want to delete this workout and all exercises associated with it?</h1>
            <button onClick={props.hideDisplayDeletionModal}>Cancel</button>
        </Modal>
    )
}

export default ConfirmDeleteModal;