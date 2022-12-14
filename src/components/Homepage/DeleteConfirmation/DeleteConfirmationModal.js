import React, { useContext } from 'react';
import AuthContext from '../../../context/user-auth';
import LoginButton from '../../UI/LoginButton';
import Modal from '../../UI/Modal';

const DeleteConfirmationModal = (props) => {

    const authCtx = useContext(AuthContext);
    
    const fetchDeleteFood = async (foodItem) => {
        try{
            const response = await fetch(
                "https://fitness-go.herokuapp.com/api/user/"+authCtx.UUID+"/foodEntry/"+props.id,
                {
                    method: 'DELETE',

                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                }
            );
            authCtx.updatedStateHandler(20);
        } catch(error){
        }
    }; 

    const deleteHandler = () => {
        fetchDeleteFood(props.id);
        
        props.hideDeleteModalHandler();
        console.log('Delete Button Clicked');
    };

    return(
        <Modal>
            <h1>Are you sure you want to delete this entry?</h1>
            <LoginButton 
                value={"Delete"}
                onClick={deleteHandler}/>
            <LoginButton value={"Cancel"}
                onClick={props.hideDeleteModalHandler}
            />
        </Modal>

    );

};

export default DeleteConfirmationModal;
