import React from 'react';
import LoginButton from '../../UI/LoginButton';
import Modal from '../../UI/Modal';

const DeleteConfirmationModal = (props) => {
    
    const fetchDeleteFood = async (foodItem) => {
        try{
            const response = await fetch(
                'https://calorie-fitness-tracker-default-rtdb.firebaseio.com/foodItem/'+props.id+'.json',
                {
                    method: 'DELETE',
                    body: JSON.stringify({
                        id: props.id
                    }),
                    headers: {'Content-Type': 'application/json'}
                }
            );
        } catch(error){
            //Add error catch here
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
