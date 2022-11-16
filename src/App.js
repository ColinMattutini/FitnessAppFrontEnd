import { useContext } from 'react';
import AuthContext from './context/user-auth.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage.js';
import CalorieTrackerPage from './pages/CalorieTrackerPage.js';
import SignUpPage from './pages/SignUpPage.js';
import WelcomePage from './pages/WelcomePage.js';
import WorkoutPage from './pages/WorkoutPage.js';
import GoalPage from './pages/GoalPage.js';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div>

        <Routes>  
          {authCtx.isLoggedIn && <Route exact path = "/calorietrackerpage" element={<CalorieTrackerPage />} />}
          <Route exact path ="/" element={!authCtx.isLoggedIn ? <AuthPage /> : <Navigate to="/calorietrackerpage" />} />
          <Route exact path ="/authpage" element={<AuthPage/>} />
          <Route exact path ='/signuppage' element = {<SignUpPage />} />
          {authCtx.isLoggedIn && <Route exact path = '/workoutpage' element = {<WorkoutPage />} />}
          {authCtx.isLoggedIn && <Route exact path = '/goalpage' element = {<GoalPage />} />}
        </Routes>
    </div>

  );
}

export default App;
