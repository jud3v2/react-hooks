import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [ response, setResponse ] = useState(null);
    const [ isPending, setIsPending ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        
        const fetchData = async () => {
            try {
                setIsPending(true);
                const { signal } = abortController;
                const response = await fetch(url, { ...options, signal });
                const data = await response.json();
                setResponse(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsPending(false);
            }
        }


        fetchData();

        return () => {
            if(abortController.abort) {
                abortController.abort();
            }
        }
    }, []);

    return {
        response,
        isPending,
        error
    }
}

export default useFetch;