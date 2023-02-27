import React from 'react'
import Posters from "../Components/Home/Posters"
import Slider from "../Components/Home/Slider"
import { Box } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'
const Home = () => {
  return (
    <Box>
      <Navbar/>
      <Slider/>
      <Posters/>
      <Footer/>
      <ScrollToTop/>
    </Box>
  )
}

export default Home