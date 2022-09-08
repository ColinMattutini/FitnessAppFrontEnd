import Modal from '../UI/Modal';
import classes from './LoginForm.module.css';
import { useState, useContext, useEffect } from 'react'; 
import AuthContext from '../../context/user-auth.js'

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
        // setEmail('');
        // setPassword('');
        props.hideLoginForm();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDp4Tq7CcT5TUe1a5pPDBjUlly9zE-K6dM', 
        {
            method: "POST",
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
            if (res.ok){
                return res.json();
              }
              else{
                return res.json().then(data => {
                  let errorMessage = 'Authentication Failed';
                  if(data && data.error && data.error.message){
                   errorMessage = data.error.message;
                } 
                alert(errorMessage);
                throw new Error(errorMessage);
                });
              }
            }).then(data => {
              authCtx.login(data.idToken);
              console.log(authCtx.token);
            })
              .catch(error => {
                  alert('Something went wrong');
            });
    };

    

    useEffect(() => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDp4Tq7CcT5TUe1a5pPDBjUlly9zE-K6dM',
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(data => {
            // authCtx.userInfo(data.users.localId);
            
            authCtx.id(data.users[0].localId);
        });
    }, [authCtx.token])

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