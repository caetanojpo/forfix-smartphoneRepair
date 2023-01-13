import { Box, Flex, Highlight, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const AboutCard = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Box
        h="100px"
        w="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon fontSize="50px" icon={props.icon} />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        w={{ base: '', lg: '60%' }}
        gap="10px"
      >
        <Text fontWeight="700" fontSize="20px" color="#EF8D4E">
          {props.title}
        </Text>
        <Flex flexDir="column" gap="5px">
          <Text textAlign="justify">
            <Highlight
              query="Nossa missão:"
              styles={{ py: '1', fontWeight: '600' }}
            >
              {props.text1}
            </Highlight>
          </Text>
          <Text textAlign="justify">{props.text2}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default AboutCard;
