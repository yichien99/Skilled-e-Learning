import React from 'react';
import { Stack, Text, Button, Box, Spacer, Flex, Image } from '@chakra-ui/react';
import imageMobile from '../assets/image-hero-mobile.png';
import imageTablet from '../assets/image-hero-tablet.png';
import imageDesktop from '../assets/image-hero-desktop.png';


const Intro = () => {
    return ( 
        <Stack direction='column'>
        <Flex>
            <Box  
                marginLeft={['5','10','10','20']} 
                marginRight={['5','0','0','0']} 
                w={['90%','70%','70%','70%']}
            >
                <Text 
                    fontFamily='font.heading'
                    fontSize={['36','36','36','56']}
                    fontWeight='extrabold'
                    color='brand.darkBlue'
                    paddingTop={['5','10','20']}
                    paddingBottom='10'
                >Maximise skill, minimise budget</Text>
                <Text
                    fontFamily='font.body'
                    fontSize='18'
                    fontWeight='medium'
                    color='brand.darkGray'
                    paddingBottom='10'
                >Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</Text>
                <Button 
                    bgGradient='linear(to-t, brand.red, brand.orange)'
                    textColor = '#FFFFFF'
                    size='lg'
                    borderRadius='3xl'
                    _hover={{
                        opacity: '50%'
                    }}
                >Get Started</Button>
            </Box>
            <Spacer />
            <Box
                marginTop={['0','0','0','-200']} 
                marginRight='-15' 
                w={['0%','0%','0%','150%']}
            >
                <Image src={imageDesktop} alt="img" />
            </Box>
            <Box 
                marginTop={['0','-100','-100','0']} 
                marginRight='-260' 
                w={['0%','150%','150%','0%']}
            >
                <Image src={imageTablet} alt="imgTablet" />
            </Box>
        </Flex>
        <Box 
            marginLeft={['5','10','10','20']} 
            marginRight={['5','10','10','20']} 
            w={['100%','0%','0%','0%']}
        >
            <Image src={imageMobile} alt="imgMobile" />
        </Box>
        </Stack>
        
    );
}
 
export default Intro;