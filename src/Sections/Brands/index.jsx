import { Flex, Heading, Image } from '@chakra-ui/react';

const Brands = () => {
  return (
    <>
      <Flex justifyContent="center" bg="black" color="white" paddingTop="10px">
        <Heading as="h3" fontSize="28px">
          Marcas que trabalhamos
        </Heading>
      </Flex>

      <Flex
        bg="black"
        color="white"
        h={{ base: '100%' }}
        flexDir={{ base: 'column', md: 'row' }}
        padding={{ base: '20px' }}
        textAlign="center"
        justifyContent={{ base: 'center' }}
        gap={{ base: '40px' }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/apple.png" h="70x" w="60px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/samsung.png" h="40px" w="100px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/motorola.png" h="60px" w="60px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/xiaomi.png" h="60px" w="60px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/acer.png" h="30px" w="90px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/dell.png" h="80px" w="80px" />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="110px"
          h="110px"
          borderRadius="100%"
        >
          <Image src="/logosBrands/lenovo.png" h="20px" w="90px" />
        </Flex>
      </Flex>
    </>
  );
};

export default Brands;
