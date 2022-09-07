import Header from './Header/Header.js';
import Homepage from './Homepage/Homepage.js';
import LoginForm from './UserAuth/LoginForm.js';
import { useState } from 'react';

function App() {

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
      <Homepage />
      {showModal && <LoginForm hideLoginForm={hideModalHandler}/>}
    </div>

  );
}

export default App;
