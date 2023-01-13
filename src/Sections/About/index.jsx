import { Box, Flex, Image, Text } from '@chakra-ui/react';
import AboutCard from '../../Components/AboutCard';
import './About.css';

const About = () => {
  return (
    <>
      <div id="about" />
      <Box
        padding="0px 50px"
        display="flex"
        h={{ bg: '100%', lg: '100vh' }}
        w="100%"
        alignItems="flex-start"
        justifyContent="center"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box
          w={{ base: '', lg: '20%' }}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Text
            fontSize={{ base: '28px', lg: '36px' }}
            textAlign={{ base: 'center', lg: 'end' }}
            transform={{ base: '', lg: 'rotate(90deg)' }}
            w={{ base: '', lg: '20%' }}
            h={{ lg: '100%' }}
            whiteSpace={{ base: 'normal', lg: 'nowrap' }}
            color="#EF8D4E"
          >
            UM POUCO DA NOSSA HISTÓRIA
          </Text>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          flexDir="column"
          h="100%"
          w={{ base: '', lg: '80%' }}
          justifyContent="space-between"
          gap={{ base: '10px', lg: '' }}
        >
          <Box
            display="flex"
            flexDir={{ base: 'column', lg: 'row' }}
            alignItems="center"
          >
            <Image h="100px" w="100px" src="/FORFIX_6-12.png" />
            <Box
              display="flex"
              flexDir="column"
              w={{ base: '', lg: '60%' }}
              gap="10px"
            >
              <Text fontWeight="700" fontSize="20px" color="#EF8D4E">
                A empresa
              </Text>
              <Flex flexDir="column" gap="5px">
                <Text textAlign="justify">
                  Forfix Assistência técnica fundada no ano de 2022, oferece
                  atualmente serviços de manutenção de celulares, notebooks e
                  vídeo games, com mão de obra especializada e as melhores peças
                  para reposição no mercado.
                </Text>
                <Text textAlign="justify">
                  Todos os reparos realizados contam com garantia do serviço e
                  peça, variando de acordo com cada produto, para você nosso
                  cliente ter a segurança que merece.
                </Text>
              </Flex>
            </Box>
          </Box>

          <AboutCard
            icon="mdi:battery-heart-variant"
            title="Missão"
            text1="Nossa missão: Oferecer um serviço qualificado, rápido e de
        confiança."
            text2="A Forfix surgiu com o objetivo de, além de atender as necessidades
        do nosso cliente superar as expectativas, proporcionando o máximo de
        satisfação, segurança e agilidade em nosso serviço Zelamos pela mão
        de obra qualificada, confiança em nossos serviços e comprometimento
        com nosso cliente, ofertando o melhor serviço em assistência
        técnica, os melhores acessórios do mercado, originais e homologados."
          />
          <AboutCard
            icon="ic:baseline-remove-red-eye"
            title="Visão e Valores"
            text1="Tornar-se referencia em padronização, qualidade e atendimento,
        estruturando a marca no mercado local e regional. Temos como
        principais valores a Ética, Inovação, Qualidade e Foco em
        resultados."
          />
        </Box>
      </Box>
    </>
  );
};

export default About;
