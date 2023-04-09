import React from "react";
import {useAuth} from "../context/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const PrivateRoute: React.FC<any> = ({children}) => {
    const auth = useAuth();
    const location = useLocation();

    if (auth?.user === null) {
        return <Navigate to='/login' state={{from: location.pathname}} replace />
    }

    return children;
};

export default PrivateRoute;