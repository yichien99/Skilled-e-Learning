import React, { useState } from 'react';
import animation from '../assets/icon-animation.svg';
import business from '../assets/icon-business.svg';
import crypto from '../assets/icon-crypto.svg';
import design from '../assets/icon-design.svg';
import photography from '../assets/icon-photography.svg';
import { Box, Stack, Text, Flex, Button, Image, Spacer, Wrap, WrapItem } from '@chakra-ui/react';

const Courses = () => {
    const [data, setData] = useState([
        { 
            icon: animation,
            title: "Animation",
            body: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
            id: 1
        },
        { 
            icon: design,
            title: "Design",
            body: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
            id: 2
        },
        { 
            icon: photography,
            title: "Photography",
            body: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
            id: 3
        },
        { 
            icon: crypto,
            title: "Crypto",
            body: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
            id: 4
        },
        { 
            icon: business,
            title: "Business",
            body: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
            id: 5
        }
    ])
    return ( 
        <Stack 
            direction='row'
            spacing='3'
            align='baseline'
            marginLeft='20'
            marginRight='20'
        >
            <Box 
                bgGradient='linear(to-t, brand.red, brand.orange)'
                minW='300px'
                w='100%'
                h='320'
                borderRadius='2xl'
            >
                <Text 
                    padding='10'
                    color='brand.white'
                    fontWeight='extrabold'
                    fontSize='36'
                >
                    Check out our most popular courses!
                </Text>
            </Box>
            <Spacer />
            {data.map((data) => (
                <Flex key={ data.id } px={3} align='baseline'>
                    
                <Box
                    minW='300px'
                    w='100%'
                    h='320'
                    bgColor='brand.white'
                    borderRadius='2xl'
                >  
                    <Image 
                        bgGradient='linear(to-t, brand.red, brand.orange)'
                        borderRadius='full'
                        marginLeft='10'
                        marginTop='-5'
                        w='60px'
                        h='60px'
                        src={ data.icon }
                    >
                    </Image>
                    <Text 
                        paddingTop='5'
                        paddingBottom='5'
                        paddingLeft='10'
                        paddingRight='10'
                        color='brand.darkBlue'
                        fontWeight='bold'
                        fontSize='24'
                    >{ data.title }</Text>
                    <Text
                        paddingLeft='10'
                        paddingRight='10'
                        color='brand.darkGray'
                        fontWeight='medium'
                        fontSize='16'
                        h='40%'
                    >{ data.body }</Text>
                    <Button
                        size='xs'
                        bgColor='brand.white'
                        color='brand.pink'
                        marginLeft='8'
                        fontSize='16'
                        _hover={{
                            opacity: '50%'
                        }}
                    >Get Started</Button>
                </Box>
                </Flex>
            ))}
        </Stack>
        
     );
}
 
export default Courses;