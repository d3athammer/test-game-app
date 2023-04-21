import { ImageProps, Image } from "@chakra-ui/react";
import React from "react";
import Bullseye from "/src/assets/bulls-eye.webp";
import Meh from "/src/assets/meh.webp";
import ThumbsUp from "/src/assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  if (rating < 3) return null;

  // index signature: this object can have any number of keys,
  // where each key is a number, and the corresponding value is of type ImageProps.
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "Meh" },
    4: { src: ThumbsUp, alt: "Recommended" },
    5: { src: Bullseye, alt: "Exceptional" }
  };

  return <Image {...emojiMap[rating]} boxSize="25px" objectFit="cover" />;
};

export default Emojis;
