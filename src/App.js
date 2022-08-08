import React from 'react';
import {
  ChakraProvider,
  Box,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Courses from './components/Courses';
import Footer from './components/Footer';
import theme from './utils/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Wrap bgGradient='linear(to-t, brand.lightGray, brand.white)'>
        <WrapItem>
          <Box> 
            <Navbar />
            <Intro />
          </Box>
        </WrapItem>
        <WrapItem>
          <Courses />
        </WrapItem>
        <WrapItem bgColor='brand.darkBlue' w='100%'>
            <Footer />
        </WrapItem>
      </Wrap>
    </ChakraProvider>
  );
}

export default App;
