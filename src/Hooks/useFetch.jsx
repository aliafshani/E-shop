import {useState, useEffect} from 'react';

export function useGetFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const fetchData = async () => {
            setIsPending(true);
            setError(null);

            try {
                const res = await fetch(url, {signal: abortCont.signal});
                if (!res.ok) {
                    throw new Error('Could not fetch the data for that resource');
                }
                const json = await res.json();
                setData(json);
                setIsPending(false);
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('the fetch was aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            }
        };

        fetchData();

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}