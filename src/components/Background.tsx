import { Box } from '@chakra-ui/react'
import plus from '../assets/plus.svg'

function BackgroundDiv() {
  return (
    <Box 
      w="100vw" h="100vh"
      pos="fixed"
      zIndex={0}
      color='#022B3A'
      bgImage={plus}
      >
    </Box>
  )
}

export default BackgroundDiv;
