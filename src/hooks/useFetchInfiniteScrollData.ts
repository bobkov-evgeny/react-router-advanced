import {useEffect, useState} from "react";
import axios from "axios";
import {useLastNodeRef} from "./useLastNodeRef";

export const useFetchInfiniteScrollData = (url: string) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [hasMoreData, setHasMoreData] = useState<boolean>(false);

    const updatePage = () => {
        setPageNumber(page => page + 1);
    };

    const lastNodeRef: any = useLastNodeRef(isLoading, hasMoreData, updatePage);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        let cancel: any;

        axios({
            method: 'get',
            url,
            params: {
                page: pageNumber
            },
            cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((response) => {
            setData(prev => {
                return [...new Set([...prev, ...response.data.results])]
            });
            setHasMoreData(!!response.data.info.next);
            setIsLoading(false);
        }).catch((error) => {
            if(axios.isCancel(error)) {
                return;
            }

            setHasError(true);
            console.error(error);
        });

        return () => cancel();
    }, [pageNumber, url]);

    return {
        lastNodeRef,
        isLoading,
        hasError,
        data
    };
};