import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

// This hook is to access all genres from the API

export interface Genre {
  // grab only what you need
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  //In t he game API, Genre objects are in results array, therefore you set GenreArray to access them later
  results: Genre[];
}

const useGenres = () => {
  // tell typescript useState is setting to Game array
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  //send fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;
