import {
  Flex,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import './Footer.css';

const Footer = () => {
  return (
    <Flex bg="black" w="100vw" h="100%" flexDir="column" color="white">
      <Flex h="180px" justifyContent="center" alignItems="center" w="100%">
        <Flex w="30%" justifyContent="center">
          <Image
            src="/forfixlogo2-11-v2.png"
            w={{ base: '90px', lg: '180px' }}
          />
        </Flex>
        <Flex w="70%" h="100%">
          <Flex
            w="60%"
            flexDir="column"
            padding="5px 10px"
            justifyContent="center"
          >
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexDir="column"
              gap="10px"
            >
              <Link _hover={{ color: '#EF8D4E' }} href="/">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />
                  Home
                </ListItem>
              </Link>
              <Link _hover={{ color: '#EF8D4E' }} href="/">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />
                  Serviços
                </ListItem>
              </Link>
              <Link _hover={{ color: '#EF8D4E' }} href="/">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />A Empresa
                </ListItem>
              </Link>
              <Link _hover={{ color: '#EF8D4E' }} href="/">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />
                  Política de Privacidade
                </ListItem>
              </Link>
            </UnorderedList>
          </Flex>
          <Flex
            w="40%"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Link
              target="_blank"
              href="https://www.instagram.com/tyoutecnologia/"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="5px"
            >
              <Text>Desenvolvido por</Text>
              <Image w="150px" src="/4.png" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        padding="20px 0px"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Todos os direitos reservados. - Copyright © 2023</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
