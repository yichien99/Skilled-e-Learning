import React from 'react';
import { Text, Button, Box, Spacer, Flex } from '@chakra-ui/react';
import Image from './Image';

const Intro = () => {
    return ( 
        <Flex>
            <Box marginLeft='20'>
                <Text 
                    fontSize='40'
                    fontWeight='extrabold'
                    color='brand.darkBlue'
                    paddingTop='20'
                    paddingBottom='10'
                >
                    Maximise skill, minimise budget
                </Text>
                <Text
                    fontSize='18'
                    fontWeight='medium'
                    color='brand.darkGray'
                    paddingBottom='10'
                >
                    Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
                </Text>
                <Button 
                    bgGradient='linear(to-t, brand.red, brand.orange)'
                    textColor = '#FFFFFF'
                    size='lg'
                    borderRadius='3xl'
                    _hover={{
                        opacity: '50%'
                    }}
                >
                    Get Started
                </Button>
            </Box>
            <Spacer />
            <Box marginTop='-200' marginRight='-260' w='150%'>
                <Image />
            </Box>
        </Flex>
        
    );
}
 
export default Intro;