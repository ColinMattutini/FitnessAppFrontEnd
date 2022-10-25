import Modal from "../../UI/Modal.js";

const SleepGoalModal = (props) => {

    return(
        <Modal>
            <button onClick={props.hideSleepModalHandler}>X</button>
            <form>
                <label></label>
                <input></input>
                <h3>Hours</h3>
            </form>
        </Modal>
    )
}

export default SleepGoalModal;