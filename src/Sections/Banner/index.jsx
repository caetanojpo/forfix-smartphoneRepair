import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { BannerContainer } from './Banner.styled';
import './style.css';

const Banner = () => {
  return (
    <BannerContainer>
      <Flex h="100%" flexDir="column" justifyContent="space-evenly">
        <Flex
          flexDir="column"
          alignItems={{ base: 'center' }}
          textAlign="center"
          gap={{ base: '10px' }}
        >
          <Text
            fontSize={{ base: '32px', md: '40px', lg: '52px' }}
            fontWeight="700"
          >
            SEU APARELHO QUEBROU?
          </Text>
          <Text fontSize={{ base: '0px', md: '26px', lg: '32px' }}>
            NÓS PODEMOS CONSERTA-LO!
          </Text>
          <Flex
            w={{ base: '100%', lg: '60%' }}
            paddingTop={{ base: '', lg: '15px' }}
            paddingBottom={{ base: '20px', lg: '' }}
            justifyContent="space-evenly"
          >
            <Icon className="iconesBanner" icon="ion:phone-portrait-outline" />
            <Icon className="iconesBanner" icon="ion:desktop-outline" />
            <Icon
              className="iconesBanner"
              icon="material-symbols:laptop-chromebook-outline-rounded"
            />
            <Icon className="iconesBanner" icon="carbon:game-console" />
            <Icon className="iconesBanner" icon="mdi:cable-data" />
            <Icon
              className="iconesBanner"
              icon="teenyicons:in-ear-headphones-outline"
            />
          </Flex>
          <Button
            display={{ base: 'block', md: 'none' }}
            className="btn"
            bg="black"
            color="white"
            w={{ base: '100%', lg: '200px' }}
            h={{ base: '60px' }}
          >
            <Link
              target="_blank"
              href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Vim+pelo+seu+site+e+preciso+dos+seus+servi%C3%A7os"
            >
              Entre em contato agora!
            </Link>
          </Button>
        </Flex>
        <Box
          textAlign="justify"
          display={{ base: 'none', lg: 'flex' }}
          flexDir="column"
          gap={{ base: '10px' }}
        >
          <Text fontSize={{ base: '20px' }} fontWeight="700">
            ESPECIALISTAS EM CONSERTOS ELETRÔNICOS
          </Text>
          <Box className="caixaTexto">
            <Text w={{ lg: '100%' }}>
              Preparados para te atender, quando se trata de reparos/manutenções
              de Smartphones, Computadores/Notebooks, Video Games e Acessórios
              do mais simples até o mais avançado, fornecendo peças de alta
              qualidade, e mão de obra especializada. Extraindo o melhor da
              união entre expertise e utilização de ferramentas adequadas para
              solucionar o seu problema. Realizamos orçamentos sem custo, também
              contamos com o serviço delivery (retirada e entrega do
              equipamento).
            </Text>
            <h1>FORFIX - Assistência Técnica</h1>
          </Box>
        </Box>
      </Flex>
      <Box
        display={{ base: 'none', md: 'block' }}
        w={{ base: '0px', lg: '100px' }}
        marginLeft={{ base: '0px', md: '350px', lg: '350px' }}
      />
    </BannerContainer>
  );
};

export default Banner;
