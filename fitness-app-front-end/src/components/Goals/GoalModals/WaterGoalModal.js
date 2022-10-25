import Modal from "../../UI/Modal"


const WaterGoalModal = (props) => {

    return(
        <Modal>
            <button onClick={props.hideWaterModalHandler}>X</button>
            <form>
                <input />
                <h3>Litres</h3>
            </form>
        </Modal>
    )
}

export default WaterGoalModal;