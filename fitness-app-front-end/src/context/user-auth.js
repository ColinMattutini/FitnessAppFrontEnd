import React from 'react';
import { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    UUID: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}

});

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const [UUID, setUUID] = useState(null);
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

    const contextValue = {
        token: token,
        UUID: UUID,
        isLoggedIn: userIsLoggedIn,
        id: idHandler,
        login: loginHandler,
        logout: logoutHandler
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContext;