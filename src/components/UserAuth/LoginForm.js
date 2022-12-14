import classes from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom'
import { useState, useContext, Fragment } from 'react'; 
import AuthContext from '../../context/user-auth.js'

const LoginForm = (props) => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const userValidation = (email, password) => {
        fetch(
            'https://fitness-go.herokuapp.com/api/login',
            {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/json'
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    username: email,
                    password: password
                })
                    
                    
                
                
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
                    // alert(errorMessage);
                    throw new Error(errorMessage);
                    });
                  }
                }).then(data => {
                  console.log("Worked!");
                  console.log(data);
                  authCtx.login(data.access_token, data.username);
                  localStorage.setItem("username", data.username);
                  //authCtx.id(data.username);
                  navigate('/calorietrackerpage');
                  
                 
                })
                  .catch(error => {
                      alert('Something went wrong');
                });

            };

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
        userValidation(email, password);

    
    };

    const homepageRedirectHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    const signupRedirectHandler = () => {
        navigate('/signuppage')
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} className={classes.login} >
                <div className={classes.signupControl}>
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
                
                <button onClick={homepageRedirectHandler}>Cancel</button>
                <p>Feel free to use test@test.com</p>
                <p>Password: test123456789</p>
                <p onClick={signupRedirectHandler}>Don't have an account? Sign-up here!</p>
                </div>

            </form>
            </Fragment>
        

    );

};

export default LoginForm;