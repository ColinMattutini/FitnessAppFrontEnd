const ModalCard = (props) => {
    return(
        <div>
            {props.children}
        </div>
    )
};


const Modal = (props) => {
    return(
        <div>
            <ModalCard />
        </div>
    );
};

export default Modal;