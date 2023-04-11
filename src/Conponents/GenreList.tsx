import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import useData from "../Hooks/useData";
import useGenres from "../Hooks/useGenres";
import getCroppedImageURL from "./image-url";

const GenreList = () => {
  // useGenres access generic useData
  const { data } = useGenres();

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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
