import {useCallback, useRef} from "react";


export const useLastNodeRef = (loading: boolean, hasMoreData: boolean, onChange: () => void) => {
    const observer = useRef<IntersectionObserver>();

    return useCallback((node: Element) => {
        if(loading) return;
        if(observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && hasMoreData) {
                onChange();
            }
        });

        if(node) {
            observer.current.observe(node);
        }
    }, [loading, hasMoreData, onChange]);
}