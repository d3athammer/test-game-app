import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

// This hook is to access all genres from the API

interface FetchResponse<T> {
  count: number;
  //In t he game API, Genre objects are in results array, therefore you set GenreArray to access them later
  results: T[];
}

const useData = <T>(endpoint: string) => {
  // tell typescript useState is setting to Game array
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  //send fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      //definite fetchresponse as a generic type parameter
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // clean up function
    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
