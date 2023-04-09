import {useEffect, useState} from "react";
import axios from "axios";

export const useFetch = (url: string, params?: {[key: string]: string}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);

        axios({
            method: 'get',
            url,
            params,
        }).then((response) => {
            setData(response.data);
            setIsLoading(false);
        }).catch((error) => {
            if(axios.isCancel(error)) {
                return;
            }

            setHasError(true);
            console.error(error);
        });
    }, []);

    return {
        isLoading,
        hasError,
        data
    };
};