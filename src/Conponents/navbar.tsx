import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/MuseHive2.png';

const NavBar = () => {

  return (
    <HStack height='80px' alignItems='stretch'>
      <Image src={logo} height='100%' objectFit='cover' />
    </HStack>
  )
}

export default NavBar;
