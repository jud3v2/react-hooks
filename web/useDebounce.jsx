import { useEffect, useState } from 'react';

let timeOutId;

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {

        if(timeOutId) {
            setIsWaiting(true);
        }
        
        timeOutId = setTimeout(() => {
            setDebouncedValue(value);
            setIsWaiting(false);
        }, delay);

        return () => {
            clearTimeout(timeOutId);
        }
    }, [value]);

    return {debouncedValue, isWaiting};
}

export default useDebounce;