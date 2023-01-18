import { Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

const Brands = () => {
  return (
    <>
      <Flex justifyContent="center" paddingBottom="20px">
        <Heading as="h3" fontSize="28px" textAlign="center">
          Marcas que trabalhamos
        </Heading>
      </Flex>

      <Grid
        bg="black"
        w="100%"
        p="25px"
        gap="60px"
        display={{ base: 'grid', lg: 'flex' }}
        justifyContent={{ base: '', lg: 'center' }}
        templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(1, 1fr)' }}
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(7, 1fr)' }}
        marginBottom="100px"
      >
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/apple.png" h="70x" w="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/samsung.png" h="40px" w="100px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/motorola.png" h="60px" w="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/xiaomi.png" h="60px" w="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/acer.png" h="30px" w="90px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/dell.png" h="80px" w="80px" />
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          colSpan={{ base: '2', lg: '1' }}
        >
          <Image src="/logosBrands/lenovo.png" h="20px" w="90px" />
        </GridItem>
      </Grid>
    </>
  );
};

export default Brands;
