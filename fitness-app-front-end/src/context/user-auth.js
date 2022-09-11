import React from 'react';
import { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    UUID: '',
    updatedState: 0,
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    updatedStateHandler: () => {}

});

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const [UUID, setUUID] = useState(null);
    const [updatedState, setUpdatedState] = useState(0);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    };

    const idHandler = (UUID) => {
        setUUID(UUID);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const updateStateHandler = () => {
        setUpdatedState(updatedState + 1);
    };

    const contextValue = {
        token: token,
        UUID: UUID,
        updatedState: updatedState,
        isLoggedIn: userIsLoggedIn,
        id: idHandler,
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