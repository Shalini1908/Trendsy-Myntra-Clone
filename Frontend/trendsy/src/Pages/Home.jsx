import React from 'react'
import Posters from "../Components/Home/Posters"
import Slider from "../Components/Home/Slider"
import { Box } from '@chakra-ui/react'
const Home = () => {
  return (
    <Box>
      <Slider/>
      <Posters/>
    </Box>
  )
}

export default Home