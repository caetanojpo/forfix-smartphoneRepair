import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ExtraButton, ExtraContainer } from './Extra.styled';

const ExtraServices = () => {
  return (
    <Flex
      w="100%"
      h="250px"
      bg="black"
      color="white"
      flexDir="column"
      bgImage="url('/fixphone.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="bottom"
      position="relative"
      zIndex="2"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        position="absolute"
        justifyContent="center"
        alignItems="center"
        h="100%"
        bg="black"
        w="100%"
        opacity="75%"
        zIndex="1"
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        padding="20px 5px"
        gap="10px"
        zIndex="2"
        opacity="100%"
        flexDir="column"
      >
        <Text
          textAlign="center"
          fontWeight={700}
          fontSize={{ base: '22px', md: '28px', lg: '36px' }}
        >
          FAÇA SEU ORÇAMENTO DE FORMA GRATUITA
        </Text>
        <Link
          mt="20px"
          href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Gostaria+de+fazer+um+orçamento."
        >
          <ExtraContainer>
            <ExtraButton>
              <Icon icon="ic:baseline-whatsapp" color="white" width="30" />
            </ExtraButton>
          </ExtraContainer>
        </Link>
      </Flex>
    </Flex>
  );
};

export default ExtraServices;
