import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      {/* Adding search Icon */}
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
