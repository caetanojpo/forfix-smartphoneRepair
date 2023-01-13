import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import './Service.css';

const Service = (props) => {
  return (
    <Box
      p="10px 10px"
      w={{ base: '300px', lg: '450px' }}
      h={{ base: '420px', lg: '550px' }}
      borderRadius="20px"
      boxShadow="7px 10px 20px #aeb7c1,
      -19px -19px 38px #ffffff"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="#EF8D4E"
        h={{ base: '100px', lg: '175px' }}
        borderRadius="5% 5% 100% 0% / 11% 8% 65% 100%"
      >
        <Icon className="icones" icon={props.icon} color="white" />
      </Flex>
      <Flex flexDirection="column">
        <Flex justifyContent="center" padding={{ base: '5px', lg: '10px' }}>
          <Text
            fontSize={{ base: '30px', lg: '40px' }}
            fontWeight="500"
            textAlign="center"
            marginBottom={props.mTitle}
          >
            {props.title}
          </Text>
        </Flex>
        <List
          spacing="4"
          h="200px"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding={{ base: '0px 0px', lg: '0px 40px' }}
        >
          {props.description.map((item) => {
            return (
              <ListItem
                display="flex"
                lineHeight="100%"
                fontSize={{ base: '13px', lg: '18px' }}
              >
                <Icon
                  icon="material-symbols:check-circle-rounded"
                  color="#EF8D4E"
                />
                <Text marginLeft="5px" fontWeight="400">
                  {item}
                </Text>
              </ListItem>
            );
          })}
          ;
        </List>
      </Flex>
    </Box>
  );
};

export default Service;
