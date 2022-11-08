import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const UseContext = ({children}) => {
    const [user, setUser] = useState({});
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {CreateUser, SignIn};
    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </>
    );
};

export default UseContext;