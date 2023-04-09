import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', {
                replace: true
            })
        }, 1000);
    }, [navigate]);

    return (
        <h1>Not Found</h1>
    );
};

export default NotFound;