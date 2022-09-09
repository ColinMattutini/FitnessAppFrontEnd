import Header from './components/Header/Header.js';
import Homepage from './components/Homepage/Homepage.js';
import LoginForm from './components/UserAuth/LoginForm.js';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from './context/user-auth.js';
import DonutChart from './components/Charts/DonutChart.js';

function App() {

  const authCtx = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
      setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };


  return (
    <div>
      <Header showLoginForm={showModalHandler}/>   
      {authCtx.isLoggedIn && <Homepage />}
      
      {showModal && <LoginForm hideLoginForm={hideModalHandler}/>}
      <DonutChart />
    </div>

  );
}

export default App;
