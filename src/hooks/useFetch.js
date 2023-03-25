import { useState, useEffect } from "react";

const useFetch = (url, req) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, req);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
    })();
  });
  return [data, error];
};

export default useFetch;
