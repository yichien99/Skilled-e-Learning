import React from 'react';
import {
  ChakraProvider,
  Box,
  Stack,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Courses from './components/Courses';
import Footer from './components/Footer';
import theme from './utils/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient='linear(to-t, brand.lightGray, brand.white)'>
        <Box> 
          <Navbar />
          <Intro />
        </Box>
        <Courses />
        <Box bgColor='brand.darkBlue'>
          <Footer />
        </Box>
      </Box>
        
    </ChakraProvider>
  );
}

export default App;
