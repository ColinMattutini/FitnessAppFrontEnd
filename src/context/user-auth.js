import React from 'react';
import { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    UUID: '',
    updatedState: 1,
    isLoggedIn: false,
    login: (token, UUID) => {},
    logout: () => {},
    // id: (UUID) => {},
    updatedStateHandler: (number) => {}

});

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [UUID, setUUID] = useState(null);
    const [updatedState, setUpdatedState] = useState(1);
    const userIsLoggedIn = !!token;

    const loginHandler = (token, UUID) => {
        setToken(token);
        setUUID(UUID);
        localStorage.setItem('token', token);
        setUpdatedState(70);
    };

    // const idHandler = (UUID) => {
    //     setUUID(UUID);
    // };

    const logoutHandler = () => {
        setToken(null);
        setUUID(null);
        localStorage.clear();
        // localStorage.removeItem('token');
    };

    const updateStateHandler = (number) => {
        setUpdatedState(number);
    };

    const contextValue = {
        token: token,
        UUID: UUID,
        updatedState: updatedState,
        isLoggedIn: userIsLoggedIn,
        //id: idHandler,
        login: loginHandler,
        logout: logoutHandler,
        updatedStateHandler: updateStateHandler
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContext;