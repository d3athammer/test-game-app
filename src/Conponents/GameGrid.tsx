import { useEffect, useState } from 'react'
import apiClient from '../Services/api-client';
import { Text } from '@chakra-ui/react';


interface Game {
  // grab only what you need
  id: number;
  name: string

}

interface FetchGamesResponse {
  count: number;
  // type game array, because each game consist of an array of items (read API Doc)
  results: Game[]
}

const GameGrid = () => {
  // tell typescript useState is setting to Game array
  const [ games, setGames ] = useState<Game[]>([]);
  const [ error, setError ] = useState('');

//send fetch request to the backend
useEffect(() => {
  apiClient.get<FetchGamesResponse>('/games')
  .then(res => setGames(res.data.results))
  .catch(err => setError(err.message));
}, [])


  return (
    <>
    {error && <Text>{error}</Text> }
   <ul>
    {games.map(game => <li key={game.id}>{game.name}</li>)}
   </ul>
    </>
  )
}

export default GameGrid
