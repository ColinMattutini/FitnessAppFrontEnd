import Modal from "../../UI/Modal";

const StepsGoalModal = (props) => {

    return(
        <Modal>
            <button onClick={props.hideStepsModalHandler}>X</button>
            <form>
            <input></input>
            <h3>Steps</h3>
            </form>
        </Modal>
    )
}

export default StepsGoalModal;