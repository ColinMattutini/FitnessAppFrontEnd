import React from 'react';
import Modal from '../UI/Modal';

const SuccessSignUpModal = () => {
    return(
        <Modal>
            <div>
                <h1>Successfully Signed Up!</h1>
                <h3>Redirecting to Login Page</h3>
            </div>
        </Modal>
    );
};

export default SuccessSignUpModal;