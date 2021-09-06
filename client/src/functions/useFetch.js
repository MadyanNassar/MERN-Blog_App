import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Sorry ... Can't get the data ...");
      }
      const jsonData = await response.json();
      setIsPending(false);
      setData(jsonData);
      setError(false);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
