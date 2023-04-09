import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string
}

export interface Game {
  // grab only what you need
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} []
}

interface FetchGamesResponse {
  count: number;
  // type game array, because each game consist of an array of items (read API Doc)
  results: Game[]
}

const useGames = () => {

  // tell typescript useState is setting to Game array
  const [ games, setGames ] = useState<Game[]>([]);
  const [ error, setError ] = useState('');

//send fetch request to the backend
useEffect(() => {

    const controller = new AbortController();

  apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
  .then(res => setGames(res.data.results))
  .catch(err => {
    if (err instanceof CanceledError) return;
    setError(err.message)
  });

  // clean up function
  return () => controller.abort();
}, [])

  return (
   {games, error}
  )
}

export default useGames