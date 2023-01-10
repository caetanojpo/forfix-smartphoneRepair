import { Box, Flex, Text} from "@chakra-ui/react";
import { Icon } from '@iconify/react';
import './Infos.css';

const Infos = () => {
    return(
        <Flex bg='black' color='white'  h={{base:'100%'}}  flexDir={{base:'column', md:'row'}} padding={{base:'20px' }} textAlign='center' justifyContent={{base:'center'}}   gap={{base:'40px'}}>
            <Box w={{base:'', md:'25%'}} display='flex' flexDir={{base:'row', md:'column'}} alignItems='center'  gap={{base:'20px'}}>
                <Icon className="icons" icon="material-symbols:nest-clock-farsight-analog-outline" />
                <Box display='flex' flexDir='column' alignItems='center'   flex='1'>
                    <Text>Segunda à Sexta-feira</Text>
                    <Text>08h-18h</Text>
                </Box>
    
            </Box>
            <Box  w={{base:'', md:'25%'}} display='flex' flexDir={{base:'row', md:'column'}} alignItems='center'   gap={{base:'20px'}}>
                <Icon className="icons"  icon="material-symbols:pin-drop" />
                <Box display='flex' flexDir='column' alignItems='center'  flex='1'>
                    <Text>Rua Cel. Valencio Carneiro, 555</Text>
                    <Text>Assis/SP</Text>
                </Box>
            
            </Box>
            <Box  w={{base:'', md:'25%'}} display='flex'  flexDir={{base:'row', md:'column'}} alignItems='center'   gap={{base:'20px'}}>
                <Icon className="icons"  icon="material-symbols:mail-outline-rounded" />
                <Box display='flex' flexDir='column' alignItems='center'  flex='1'>
                    <Text>email@forfix.com.br</Text>
                </Box>
          
            </Box>
            <Box  w={{base:'', md:'25%'}} display='flex'  flexDir={{base:'row', md:'column'}}  alignItems='center'  gap={{base:'20px'}}>
                <Icon className="icons"  icon="material-symbols:phone-android-outline" />
                <Box display='flex' flexDir='column' alignItems='center'   flex='1'>
                    <Text>(18) 99639-6222</Text>
                </Box>
                
            </Box>
        </Flex>
    )
}

export default Infos;