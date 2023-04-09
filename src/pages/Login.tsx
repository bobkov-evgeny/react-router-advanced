import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import SigninForm from "../components/SigninForm/SigninForm";
import {useAuth} from "../context/AuthProvider";
import {FormValues} from "../types/Form.types";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleLogin = (formValues: FormValues) => {
        if(formValues.username) {
            auth?.signIn(formValues.username, () => {
                navigate(from, {replace: true});
            });
        }
    };

    return (
        <SigninForm onSubmit={handleLogin} />
    );
};

export default Login;