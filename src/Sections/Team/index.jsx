import { Image, Text, Box, Flex } from '@chakra-ui/react';
import './Team.css';

const Team = () => {
  return (
    <>
      <Box className="teamBox">
        <div id="team" />
        <Flex
          h={{ base: '100%', lg: '80vh' }}
          w="100vw"
          alignItems="center"
          justifyContent="center"
          gap="20px"
          flexDir={{ base: 'column' }}
          color="black"
          padding={{ base: '50px', lg: '50px 100px' }}
        >
          <Text
            color="black"
            fontSize={{ base: '24px', lg: '48px' }}
            fontWeight="700"
          >
            A EQUIPE
          </Text>
          <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            gap={{ base: '10px', lg: '50px' }}
            alignItems="center"
          >
            <Box>
              <Image
                w={{ base: '180px', lg: '220px' }}
                src="/perfil.jpeg"
                border="5px solid black"
                borderRadius="200px"
              />
            </Box>

            <Flex
              flexDir="column"
              justifyContent={{ base: '', lg: 'center' }}
              gap="20px"
              w={{ base: '', lg: '50%' }}
            >
              <Flex
                flexDir="column"
                alignItems={{ base: 'center', lg: 'flex-start' }}
                fontSize={{ base: '', lg: '20px' }}
              >
                <Text fontSize="24px" fontWeight="bold">
                  André Almeida
                </Text>
                <Text>Empresário/Técnico</Text>
              </Flex>
              <Text textAlign="justify">
                Profissional da área técnica em manutenção de dispositivos
                móveis, computadores e afins. Residente na cidade de Assis/SP,
                atuando por 5 anos no mercado de equipamentos eletrônicos,
                proporcionando serviço de qualidade se tratando de reparos,
                manutenções em Smartphones, Computadores/Notebooks, Video Games
                e Acessórios, sendo mais de cinco mil aparelhos consertados.
                Onde através da vontade de empreender criou a Forfix unindo a
                satisfação e prazer pela profissão com a experiência do cliente,
                entregando sempre o melhor.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Team;
