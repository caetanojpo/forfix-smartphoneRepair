import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const Service = (props) => {
  return (
    <>
      <Flex h="300px" width="100%">
        <Flex
          width="18%"
          height="18%"
          justifyContent="center"
          alignItems="center"
          border="1px solid blue"
        >
          <Icon icon={props.icon} width="50px" />
        </Flex>
        <Flex
          width="70%"
          flexDirection="column"
          border="1px solid green"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="40px" fontWeight="500">
            {props.title}
          </Text>
          <List spacing="3">
            {props.description.map((item) => {
              return (
                <ListItem display="flex" lineHeight="90%" fontSize="18px">
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
      </Flex>
    </>
  );
};

export default Service;
