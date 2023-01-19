import { Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

const Brands = () => {
  return (
    <>
      <Flex bg="black" justifyContent="center" padding="20px 0px">
        <Heading color="white " as="h3" fontSize="28px" textAlign="center">
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
      >
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/apple.png" h="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/samsung.png" w="120px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/motorola.png" h="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/xiaomi.png" h="60px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/acer.png" w="120px" />
        </GridItem>
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Image src="/logosBrands/dell.png" h="60px" />
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          colSpan={{ base: '2', lg: '1' }}
        >
          <Image src="/logosBrands/lenovo.png" w="120px" />
        </GridItem>
      </Grid>
    </>
  );
};

export default Brands;
