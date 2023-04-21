import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text
} from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "./image-url";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Box>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Box>
    </Card>
  );
};

export default GameCard;
