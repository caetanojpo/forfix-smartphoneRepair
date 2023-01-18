import { Button, Flex, Text } from '@chakra-ui/react';

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
      <Text fontWeight={700} fontSize="32px">
        FAÇA SEU ORÇAMENTO DE FORMA GRATUITA
      </Text>
      <Button bg="white" color="black">
        Clique aqui
      </Button>
    </Flex>
  );
};

export default ExtraServices;
