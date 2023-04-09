import { HStack, Icon, Text } from '@chakra-ui/react'
import { Platform } from '../Hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaLinux, FaApple, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from  'react-icons/bs'
import { MdPhoneIphone } from 'react-icons/md'
import { IconType } from 'react-icons'

interface Props {
  // an array of Platform objects
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

  //tell typescript that the key is of type string
  //each key is map to the type of IconType (defined in react's icon library)
  const iconMap: {[key:string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList
