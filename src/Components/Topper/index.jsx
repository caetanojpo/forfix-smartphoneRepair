import { Icon } from '@iconify/react';
import { Box, Link, Text } from '@chakra-ui/react';
import './Topper.css';

const Topper = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='space-between' h={35}>
            <Text marginLeft={{base:'5px', sm:'5px', md:'20px', lg:'20px'}} fontWeight='700' fontSize={{ base: '12px', md: '12px', lg: '16px'  }}>SUA ASSISTÊNCIA PERSONALIZADA</Text>
            <Box  marginRight={{base:'5px', sm:'5px', md:'20px', lg:'20px'}} w={{base:'60px', sm:'60px', md:'120px'}} display='flex' gap={{base:'5px', md:'20px'}} >
                <Link  w={{base:'60px', sm:'60px', md:'120px'}}  target='_blank' href='https://www.facebook.com/profile.php?id=100087227011260'>
                    <Icon   width='100%' cursor='pointer' target='_blank' href='https://www.facebook.com/profile.php?id=100087227011260' icon="ic:baseline-facebook" role='a' className='facebook'/>
                </Link>
                <Link w={{base:'60px', sm:'60px', md:'120px'}}  target='_blank' href='https://www.instagram.com/forfix.assistencia/'>
                    <Icon width='100%' cursor='pointer' target='_blank' icon="mdi:instagram" className='insta' />
                </Link>
                <Link w={{base:'60px', sm:'60px', md:'120px'}}  target='_blank' href='https://api.whatsapp.com/send?phone=5518996396222&text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!'>
                <Icon width='100%' cursor='pointer' icon="ic:baseline-whatsapp" className='whats' />
                </Link>
                
            </Box>
            
        </Box>
    )
}

export default Topper;