import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const apiData = await response.json();

        setData(apiData.users);
      } catch (error) {
        setError("Something went wrong !!");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
