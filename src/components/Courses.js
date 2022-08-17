import React, { useState } from 'react';
import animation from '../assets/icon-animation.svg';
import business from '../assets/icon-business.svg';
import crypto from '../assets/icon-crypto.svg';
import design from '../assets/icon-design.svg';
import photography from '../assets/icon-photography.svg';
import { Box, Text, Button, Image, Wrap, WrapItem, Spacer } from '@chakra-ui/react';

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
        <Wrap 
            marginLeft={['5','10','10','20']} 
            marginRight={['5','10','10','20']} 
            justify='center'
            w='100%'
        >
            <WrapItem py='5'>
                <Box 
                    bgGradient='linear(to-t, brand.red, brand.orange)'
                    w={['100%','330px','325px', '360px']}
                    h={['','300','300','320']}
                    borderRadius='2xl'
                >
                    <Text 
                        fontFamily='brand.heading'
                        padding='10'
                        color='brand.white'
                        fontWeight='extrabold'
                        fontSize={['24','24','24','36']}
                    >Check out our most popular courses!</Text>
                </Box>
            </WrapItem>
            {data.map((data) => (
                <WrapItem key={ data.id } py='5'>
                    <Box
                        w={['100%','330px','325px', '360px']}
                        h={['','300','300','320']}
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
                        />
                        <Text 
                            fontFamily='brand.heading'
                            paddingTop='5'
                            paddingBottom='5'
                            paddingLeft='10'
                            paddingRight='10'
                            color='brand.darkBlue'
                            fontWeight='bold'
                            fontSize='20'
                        >{ data.title }</Text>
                        <Text
                            fontFamily='brand.body'
                            paddingLeft='10'
                            paddingRight='10'
                            color='brand.darkGray'
                            fontWeight='medium'
                            fontSize='16'
                            h='40%'
                        >{ data.body }</Text>
                        <Button
                            marginTop={['5','','','']}
                            marginBottom={['5','','','']}
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
                    <Spacer />
                </WrapItem>
            ))}
        </Wrap>
     );
}
 
export default Courses;