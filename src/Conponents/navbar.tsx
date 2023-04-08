import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/MuseHive2.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {

  return (
    <HStack justify='space-between' padding='12px' height='100px' alignItems='stretch'>
      <Image src={logo} height='100%' objectFit='cover' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar;
