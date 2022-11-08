import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../UseContext/UseContext';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);

    const location = useLocation()
    if(loader) {
        return <Loader/>
    }
    if(user?.uid){
        return children
    }
    return <Navigate to={'/sign-in'} state={{from: location}} replace/>
};

export default PrivateRoute;