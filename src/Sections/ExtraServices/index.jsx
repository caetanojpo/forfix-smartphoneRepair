import { Button, Flex, Link, Text } from '@chakra-ui/react';

const ExtraServices = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="black"
      justifyContent="center"
      alignItems="center"
      color="white"
      flexDir="column"
      padding="20px 0px"
      gap="10px"
    >
      <Text textAlign="center" fontWeight={700} fontSize="32px">
        FAÇA SEU ORÇAMENTO DE FORMA GRATUITA
      </Text>
      <Link
        target="_blank"
        href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Vim+pelo+seu+site+e+preciso+dos+seus+servi%C3%A7os"
      >
        <Button bg="white" color="black">
          Clique aqui
        </Button>
      </Link>
    </Flex>
  );
};

export default ExtraServices;
