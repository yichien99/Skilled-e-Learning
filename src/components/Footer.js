import React from 'react';
import { Flex, Text, Spacer, Button } from '@chakra-ui/react';


const Footer = () => {
    return ( 
        <Flex 
            h='100'
            align='center'
            marginLeft='20'
            marginRight='20'
        >
            <Text
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
            >
                Get Started
            </Button>
        </Flex>
    );
}
 
export default Footer;