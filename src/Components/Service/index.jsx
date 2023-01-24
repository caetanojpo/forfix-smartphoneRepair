import {
  Badge,
  Box,
  Button,
  Flex,
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
            <Flex justifyContent="center" paddingTop="5px">
              <Text
                fontSize={{ base: '25px', lg: '33px' }}
                fontWeight="500"
                textAlign="center"
                marginBottom={props.mTitle || '35px'}
              >
                {props.title}
                {props.subTitle && (
                  <Badge ml="1" variant="subtle" colorScheme="orange">
                    {props.subTitle}
                  </Badge>
                )}
              </Text>
            </Flex>
            <Flex h="auto">
              <List
                spacing="4"
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                padding={{ base: '0px 10px', lg: '0px 40px' }}
              >
                {props.description.map((item) => {
                  return (
                    <ListItem
                      key={item}
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
                display={{ base: 'flex', lg: 'none' }}
                bg="white"
                color="#25D366"
                w="200px"
                h="40px"
                border="1px solid #25D366"
                _hover={{ bg: '#EF8D4E' }}
                _active={{ bg: '#EF8D4E' }}
              >
                <Icon icon="logos:whatsapp-icon" width="20px" />
                <Link
                  target="_blank"
                  href={props.link}
                  fontSize="15px"
                  fontWeight="600"
                >
                  &nbsp;Tenho interesse!
                </Link>
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Flex
          className="contactButton"
          w="390px"
          h="480px"
          padding="5px"
          justifyContent="center"
          display={{ base: 'none', lg: 'flex' }}
        >
          <Button
            bg="#25D366"
            color="white"
            w="250px"
            h="55px"
            _hover={{ transform: 'scale(0.95)' }}
            _active={{ transform: 'scale(0.85)' }}
          >
            <Icon width="30px" icon="ic:baseline-whatsapp" />
            <Link href={props.link} target="_blank" fontSize="18px">
              &nbsp;Tenho Interesse
            </Link>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Service;
