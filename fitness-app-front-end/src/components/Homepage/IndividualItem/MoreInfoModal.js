import React from "react";
import Modal from "../../UI/Modal";

const MoreInfoModal = (props) => {
    return(
        <Modal>
            <p>{props.calories}</p>
            <p>{props.food}</p>
            <p>{props.date}</p>
        </Modal>

    )

}

export default MoreInfoModal;