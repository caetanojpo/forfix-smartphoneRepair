import {
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { Link as LinkRoute } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Footer.css';

const Footer = () => {
  return (
    <Flex bg="black" w="100vw" h="100%" flexDir="column" color="white">
      <Flex
        h={{ base: '100%', lg: '180px' }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        flexDir={{ base: 'column', lg: 'row' }}
        padding={{ base: '20px 0px', lg: '0px' }}
        gap={{ base: '20px', lg: '0px' }}
      >
        <Flex w={{ base: '100%', lg: '30%' }} justifyContent="center">
          <Image
            display={{ base: 'block', lg: 'none' }}
            src="/Forfix-Orange-Logo-Escrita.png"
            w={{ base: '150px', lg: '180px' }}
          />
          <Image
            display={{ base: 'none', lg: 'block' }}
            src="/FORFIX_4-09.png"
            w={{ base: '150px', lg: '300px' }}
          />
        </Flex>
        <Flex
          w={{ base: '100%', lg: '70%' }}
          h="100%"
          flexDir={{ base: 'column', lg: 'row' }}
          gap={{ base: '20px', lg: '0px' }}
          alignItems="center"
        >
          <Flex
            w={{ base: '100%', lg: '60%' }}
            flexDir="column"
            padding="5px 10px"
            justifyContent="center"
          >
            <UnorderedList
              listStyleType="none"
              display="flex"
              flexDir="column"
              gap="10px"
              margin={{ base: '0px' }}
              alignItems={{ base: 'center', lg: 'flex-start' }}
            >
              <Link _hover={{ color: '#EF8D4E' }} href="/#home">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />
                  Home
                </ListItem>
              </Link>
              <Link _hover={{ color: '#EF8D4E' }} href="#services">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />
                  Serviços
                </ListItem>
              </Link>
              <Link _hover={{ color: '#EF8D4E' }} href="#about">
                <ListItem display="flex" gap="5px" alignItems="center">
                  <Icon icon="mdi:link-variant" color="white" />A Empresa
                </ListItem>
              </Link>
              <Link
                as={LinkRoute}
                _hover={{ color: '#EF8D4E' }}
                to="/politicaDePrivacidade"
              >
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
            marginTop="20px"
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
              <Text fontWeight="500">Desenvolvido por</Text>
              <Image w="95px" src="/LogoTYou.png" />
              <Text fontSize="14px" fontWeight="700">
                @tyoutecnologia
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        padding={{ base: '20px', lg: '20px 0px' }}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text>Todos os direitos reservados - Copyright © 2023</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
