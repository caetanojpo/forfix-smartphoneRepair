import { Icon } from '@iconify/react';
import { Box, Link, Text } from '@chakra-ui/react';
import './Topper.css';

const Topper = () => {
  return (
    <Box
      id="home"
      className="home"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      h="35px"
    >
      <Text
        marginLeft={{ base: '5px', sm: '5px', md: '20px', lg: '20px' }}
        fontWeight="700"
        fontSize={{ base: '12px', md: '12px', lg: '16px' }}
      >
        ASSISTÊNCIA TÉCNICA DE QUALIDADE
      </Text>
      <Box
        marginRight={{ base: '5px', sm: '5px', md: '20px', lg: '20px' }}
        w={{ base: '60px', sm: '60px', md: '120px' }}
        display="flex"
        gap={{ base: '5px', md: '10px' }}
      >
        <Link
          w={{ base: '60px', sm: '60px', md: '120px' }}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100087227011260"
        >
          <Icon width="30px" icon="ic:baseline-facebook" className="facebook" />
        </Link>
        <Link
          w={{ base: '60px', sm: '60px', md: '120px' }}
          target="_blank"
          href="https://www.instagram.com/forfix.assistencia/"
        >
          <Icon width="30px" icon="mdi:instagram" className="insta" />
        </Link>
      </Box>
    </Box>
  );
};

export default Topper;
