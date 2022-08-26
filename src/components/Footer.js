import React from 'react';
import { Text, Spacer, Button, Flex } from '@chakra-ui/react';


const Footer = () => {
    return ( 
        <Flex 
            direction='row'
            w='100%'
            h='100'
            align='center'
            marginLeft={['5','10','10','20']}
            marginRight={['5','10','10','20']}
        >
            <Text
                fontFamily='font.heading'
                fontWeight='bold'
                fontSize='32'
                color='brand.white'
            >skilled</Text>
            <Spacer />
            <Button 
                bgGradient='linear(to-t, brand.pink, brand.blue)'
                textColor = 'brand.white'
                size='lg'
                borderRadius='3xl'
                _hover={{
                    opacity: '50%'
                }}
            >Get Started</Button>
        </Flex>
    );
}
 
export default Footer;