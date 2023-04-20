import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Spinner
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageURL from "./image-url";

interface Props {
  // Function to allow the parent component to handle the event when a genre is selected
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  // useGenres access generic useData

  const { data, isLoading, error } = useGenres();

  //guard clauses
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                console.log("Selected genre in GenreList:", genre);
                console.log("Current selected genre:", selectedGenre);
                onSelectGenre(genre);
              }}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
