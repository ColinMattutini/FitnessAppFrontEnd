import Modal from '../UI/Modal';
import classes from './LoginForm.module.css';
import { useState } from 'react'; 

const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(email, password);
        setEmail('');
        setPassword('');
        props.hideLoginForm();
    };

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <label htmlFor='email'>E-Mail</label>
                <input 
                    type='text'
                    onChange={emailHandler}
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    onChange={passwordHandler} 
                />                
                <button onClick={props.onClick}>Submit</button>
                <button onClick={props.hideLoginForm}>Close</button>

            </form>
        </Modal>

    )

};

export default LoginForm;