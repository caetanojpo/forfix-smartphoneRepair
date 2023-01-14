import { Flex, Image, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import './Footer.css';

const Footer = () => {
  return (
    <Flex bg="black" h="250px" justifyContent="center" alignItems="center">
      <Flex w="30%">
        <Image
          src="/forfixlogo2-11-v2.png"
          w={{ base: '90px', lg: '180px' }}
          h={{ base: '70px', lg: '150px' }}
        />
      </Flex>
      <Flex
        w="40%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <a href="/">
          <Text color="white" fontSize={{ base: '10px', lg: '20px' }}>
            Política de Privacidade
          </Text>
        </a>
        <Text
          textAlign="center"
          color="white"
          fontSize={{ base: '10px', lg: '20px' }}
        >
          Todos os direitos reservados à Forfix Assistência Técnica
          <br />
          Copyright © 2023
        </Text>
      </Flex>
      <Flex
        w="30%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDirection="column" alignItems="center" color="white">
          <Text fontSize={{ base: '10px', lg: '20px' }}>Desenvolvido por</Text>
          <Link
            href="https://www.instagram.com/tyoutecnologia/"
            target="_blank"
          >
            <Icon className="logo" icon="mdi:instagram" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
