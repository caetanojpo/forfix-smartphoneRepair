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
                Profissional na área técnica em manutenção de dispositivos
                moveis, computadores e afins. Mais de cinco mil aparelhos
                consertados.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Team;
