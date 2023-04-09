import {useEffect, useState} from "react";
import axios from "axios";

export const useSearch = (query: string, pageNumber: number) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [hasMoreData, setHasMoreData] = useState<boolean>(false);

    useEffect(() => {
        setData([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel: any;

        axios({
            method: 'get',
            url: 'http://openlibrary.org/search.json',
            params: {
                q: query,
                page: pageNumber
            },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((response) => {
            setData(prev => {
                return [...new Set([...prev, ...response.data.docs.map((b: any) => b.title)])]
            });
            setHasMoreData(response.data.docs.length > 0);
            setLoading(false);
        }).catch((error) => {
            if(axios.isCancel(error)) {
                return;
            }

            setError(true);
            console.error(error);
        });

        return () => cancel();
    }, [query, pageNumber]);

    return {
        loading,
        error,
        data,
        hasMoreData
    };
}