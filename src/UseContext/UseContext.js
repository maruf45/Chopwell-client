import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const UseContext = ({children}) => {
    const [user, setUser] = useState({});

    
    const authInfo = {user};
    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export default UseContext;