import React from 'react';
import { Flex, Spacer, Box, Image } from '@chakra-ui/react';
import image from '../assets/image-hero-desktop.png';

const ImageBg = () => {
    return (
        <Flex>
            <Spacer />
            <Box>
                <Image src={image} alt="img" />
            </Box>
        </Flex>
        
        
    );
}
 
export default ImageBg;