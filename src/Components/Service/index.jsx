import {
  Box,
  Button,
  Flex,
  Highlight,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import './Service.css';

const Service = (props) => {
  return (
    <Flex className="container">
      <Box
        className="box"
        position={{ base: 'static', lg: 'relative' }}
        w={{ base: '', lg: '390px' }}
        h={{ base: '', lg: '480px' }}
      >
        <Box
          className="serviceCard"
          p="10px 10px"
          w={{ base: '300px', lg: '390px' }}
          h={{ base: '430px', lg: '480px' }}
          borderRadius="20px"
          boxShadow="8px 8px 9px #c0cad4,
          -8px -8px 9px #f4ffff"
          backgroundColor="white"
          position={{ base: 'static', lg: 'absolute' }}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            bg="#EF8D4E"
            h={{ base: '100px', lg: '115px' }}
            borderRadius="5% 5% 100% 0% / 11% 8% 65% 100%"
          >
            <Icon className="icones" icon={props.icon} color="white" />
          </Flex>
          <Flex flexDirection="column">
            <Flex
              justifyContent="center"
              paddingTop={{ base: '5px', lg: '0px' }}
            >
              <Text
                fontSize={{ base: '30px', lg: '40px' }}
                fontWeight="500"
                textAlign="center"
                marginBottom={props.mTitle || '35px'}
              >
                {props.title}
                {props.subTitle && (
                  <Highlight
                    query="Venda"
                    styles={{
                      py: '1',
                      fontWeight: '600',
                      fontSize: '10px',
                      color: '#EF8D4E',
                    }}
                  >
                    {props.subTitle}
                  </Highlight>
                )}
              </Text>
            </Flex>
            <Flex h="auto">
              <List
                spacing="4"
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
                      fontSize={{ base: '13px', lg: '15px' }}
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
            <Flex
              display={{ base: 'flex', lg: 'flex' }}
              justifyContent="center"
              padding={props.pButton || '20px 0px'}
            >
              <Button
                display={{ base: 'block', lg: 'none' }}
                bg="black"
                color="white"
                w="150px"
                h="35px"
              >
                <Link href="/">Tenho interesse!</Link>
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Flex
          className="wppbtn"
          w="390px"
          h="480px"
          padding="5px"
          justifyContent="flex-start"
          alignItems="flex-start"
          display={{ base: 'none', lg: 'flex' }}
        >
          <Button bg="black" color="white" w="150px" h="35px">
            <Link href="/">Tenho interesse!</Link>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Service;
