import { useState, useEffect } from 'react';

export default function useDebounce(searchKey, delay) {
    const [debounceSearchKey, setDebounceSearchKey] = useState(searchKey);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceSearchKey(searchKey);
        }, delay);
        return () => {
            clearTimeout(timeOut);
        };
    }, [searchKey]);

    return debounceSearchKey;
}