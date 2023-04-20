import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/MuseHive2.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="12px" height="100px" alignItems="center">
      <Image src={logo} height="100%" objectFit="cover" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

// 21ead42227eb4cf3aeb7b54aae57fccc
