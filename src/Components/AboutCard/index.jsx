import { Box, Flex, Highlight, Image, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const AboutCard = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <Box
        h="120px"
        w="120px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {props.imagePath ? (
          <Image h="100px" w="100px" src={props.imagePath} />
        ) : (
          <Icon fontSize="50px" icon={props.icon} color="black" />
        )}
      </Box>
      <Box
        display="flex"
        flexDir="column"
        w={{ base: '', lg: '100%' }}
        gap="10px"
      >
        <Text fontWeight="700" fontSize="20px" color="#EF8D4E">
          {props.title}
        </Text>
        <Flex
          flexDir="column"
          gap="5px"
          flexWrap="nowrap"
          w={{ base: '100%', lg: '800px' }}
        >
          <Text textAlign="justify">
            <Highlight query="Nossa missão:" styles={{ fontWeight: '600' }}>
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
