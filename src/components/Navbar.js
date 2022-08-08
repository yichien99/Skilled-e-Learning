import React from 'react';
import { Flex, Text, Spacer, Button } from '@chakra-ui/react';
 
 const Navbar = () => {
    return ( 
        <Flex 
            align='center'
            marginLeft={['5','10','10','20']}
            marginRight={['5','10','10','20']}
            h='100'
        >
            <Text
                fontWeight='bold'
                fontSize='32'
                color='brand.darkBlue'
            >skilled</Text>
            <Spacer />
            <Button 
                bgColor = 'brand.darkBlue'
                textColor = 'brand.white'
                size='lg'
                borderRadius='3xl'
                _hover={{
                    bgColor: '#666CA3'
                }}
            >Get Started</Button>
        </Flex>
    );
 }
  
 export default Navbar;