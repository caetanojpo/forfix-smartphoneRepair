import { Flex, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const ExtraServices = () => {
  return (
    <Flex
      w="100%"
      h="250px"
      bg="black"
      justifyContent="center"
      alignItems="center"
      color="white"
      flexDir="column"
      padding="20px 5px"
      gap="10px"
      bgImage="url('/bgfix.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="bottom"
    >
      <Text
        textAlign="center"
        fontWeight={700}
        fontSize={{ base: '20px', lg: '32px' }}
      >
        FAÇA SEU ORÇAMENTO DE FORMA GRATUITA
      </Text>
      <Link
        w="80px"
        h="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50px"
        bg="#ffff"
        border="3px solid #25D366"
        target="_blank"
        href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Gostaria+de+fazer+um+orçamento."
      >
        <Icon width="30px" icon="ic:baseline-whatsapp" color="#25D366" />
      </Link>
    </Flex>
  );
};

export default ExtraServices;
