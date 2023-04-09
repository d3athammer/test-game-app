import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../Hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {

  // destructured from useGames custom hook
  const { games, error, isLoading} = useGames()

  return (
    <>
      {error && <Text>{error}</Text> }
      <SimpleGrid columns={{sm: 1, md:2, lg:3, xl: 4}} padding='10px' spacing={10} >
        {isLoading && Array.from({ length: 8 }).map((_, index) => <GameCardSkeleton key={index}/> )}
          {games.map(game =>
            <GameCard key={game.id} game={game}/>
          )}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
