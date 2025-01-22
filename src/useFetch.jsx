import { useState, useEffect } from "react";
const useFetch = (url, initialData) => {
    let [data, setData] = useState(initialData);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [url]);
    return { data, loading, error };
};
export default useFetch;