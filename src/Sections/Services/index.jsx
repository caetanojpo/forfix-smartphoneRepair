import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Service from '../../Components/Service';

const Services = () => {
  const smartphoneServices = [
    'Desoxidação',
    'Reparo em Placa',
    'Transferência de Dados',
    'Substituição de Bateria',
    'Substituição de Display (Tela)',
    'Substituição de Conector e Periféricos',
    'Reconstrução de vidro em telas originais',
  ];

  const computerServices = [
    'Formatação',
    'Reparo em Placa',
    'Limpeza Preventiva',
    'Melhoria de Desempenho (Upgrade)',
  ];

  const consoleServices = [
    'Personalização',
    'Reparo em Placa',
    'Limpeza Preventiva',
    'Substituição de Componentes',
  ];

  const accessoriesServices = [
    'Cabos',
    'Capinhas',
    'Fones de Ouvido',
    'Película',
    'Acessórios para Notebook',
    'Adaptadores e Itens externos',
  ];

  return (
    <Flex
      id="services"
      class="services"
      flexDirection="column"
      height="100%"
      padding="50px 0px"
    >
      <Heading
        textAlign="center"
        h={{ base: '15%', lg: '10%' }}
        p="20px 0px"
        fontSize={{ base: '55px', lg: '70px' }}
      >
        Serviços
      </Heading>
      <Grid
        p="5%"
        h="90%"
        templateRows={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={100}
      >
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Smartphone"
            mTitle="20px"
            icon="ion:phone-portrait-outline"
            description={smartphoneServices}
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Computador"
            mTitle="35px"
            icon="ion:desktop-outline"
            description={computerServices}
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Video Game"
            mTitle="35px"
            icon="carbon:game-console"
            description={consoleServices}
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Acessórios"
            mTitle="20px"
            icon="mdi:cable-data"
            description={accessoriesServices}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Services;
