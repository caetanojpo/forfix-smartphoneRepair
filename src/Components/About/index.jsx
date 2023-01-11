import {  Box, Image, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const About = () => {
    return(

 <Box display='flex' h='100vh' w='100%' padding='50px' alignItems='flex-start' justifyContent='center' >

        <Box w='20%' display='flex' justifyContent='flex-end'>
        <Text fontSize={{base:'28px', lg:'36px'}} textAlign='center' transform='rotate(90deg)' w='20%' h={{base:'35%', lg:'35%'}}  whiteSpace='nowrap' >UM POUCO DA NOSSA HISTÓRIA</Text>

        </Box>
       
 
 
    <Box display='flex' alignItems='center' flexDir='columns' h='100%' w='80%'>
        <Box display='flex'  alignItems='center'>
            <Image h='100px' src='/FORFIX-ORANGE.png'></Image>
            <Box display='flex' flexDir='column'>
                <Text>A empresa</Text>
                <Text></Text>
            </Box>
        </Box>
    </Box>
 </Box>
    )
}

export default About;