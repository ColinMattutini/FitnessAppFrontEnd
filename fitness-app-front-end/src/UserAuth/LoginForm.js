import Modal from '../UI/Modal';
import classes from './LoginForm.module.css';
import { useState, useContext } from 'react'; 
import AuthContext from '../context/user-auth';

const LoginForm = (props) => {
    const authCtx = useContext(AuthContext);

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

        fetch(, 
        {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        ).then(res => {
            if(res.ok){
                console.log('Login Worked')
            } else{
                return res.json().then(data => {
                    let errorMessage = 'Authentication failed.';
                    alert(errorMessage)
                })
            }
        }).then(data => {
            authCtx.login(data.idToken);
        });



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