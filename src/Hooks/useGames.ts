import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  // grab only what you need
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genre: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id
      }
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
