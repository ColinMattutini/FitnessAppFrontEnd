import Header from './components/Header/Header.js';
import Homepage from './components/Homepage/Homepage.js';
import LoginForm from './components/UserAuth/LoginForm.js';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from './context/user-auth.js';
import SignUpForm from './components/UserAuth/SignUpForm.js';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.js';
import CalorieTrackerPage from './pages/CalorieTrackerPage.js';
import SignUpPage from './pages/SignUpPage.js';
import WelcomePage from './pages/WelcomePage.js';
import WorkoutPage from './pages/WorkoutPage.js';
import MainHomePage from './pages/MainHomePage.js';
import GoalPage from './pages/GoalPage.js';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div>

        <Routes>  
          {authCtx.isLoggedIn && <Route exact path = "/calorietrackerpage" element={<CalorieTrackerPage />} />}
          <Route exact path ="/" element={!authCtx.isLoggedIn ? <WelcomePage /> : <Navigate to="/homepage" />} />
          <Route exact path ="/authpage" element={<AuthPage/>} />
          <Route exact path ='/signuppage' element = {<SignUpPage />} />
          {authCtx.isLoggedIn && <Route exact path = '/workoutpage' element = {<WorkoutPage />} />}
          {authCtx.isLoggedIn && <Route exact path = '/homepage' element = {<MainHomePage />} />}
          {authCtx.isLoggedIn && <Route exact path = '/goalpage' element = {<GoalPage />} />}
        </Routes>
    </div>

  );
}

export default App;
