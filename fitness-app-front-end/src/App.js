import Header from './components/Header/Header.js';
import Homepage from './components/Homepage/Homepage.js';
import LoginForm from './components/UserAuth/LoginForm.js';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from './context/user-auth.js';
import SignUpForm from './components/UserAuth/SignUpForm.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.js';
import CalorieTrackerPage from './pages/CalorieTrackerPage.js';

function App() {

  const authCtx = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const showModalHandler = () => {
      setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const showSignUpForm = () => {
    setShowSignUpModal(true);
  };

  const hideSignUpFormHandler = () => {
    setShowSignUpModal(false);
  }


  return (
    <div>
    
    
      
        <Routes>
          <Route exact path = "/" element={<CalorieTrackerPage />} />
          <Route exact path ="/authpage" element={<AuthPage/>} />
        </Routes>
      
      
      
      {/* <Header 
        showLoginForm={showModalHandler}
        showSignUpForm={showSignUpForm}  
      />   
      {authCtx.isLoggedIn && <Homepage />}
      
      {showModal && <LoginForm hideLoginForm={hideModalHandler}/>}
      {showSignUpModal && <SignUpForm hideSignUpForm={hideSignUpFormHandler}/>}
      <DonutChart /> */}
    </div>

  );
}

export default App;
