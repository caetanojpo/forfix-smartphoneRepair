import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Service from '../../Components/Service';

const Services = () => {
  const smartphoneServices = [
    'Substituição de Tela',
    'Substituição de Bateria',
    'Substituição de Conector e Periféricos',
    'Reparo em Placa',
    'Reconstrução de vidro em telas originais',
    'Transferência de dados',
    'Desoxidação',
  ];

  const computerServices = [
    'Formatação',
    'Limpeza Preventiva',
    'Reparo em Placa',
    'Melhoria de Desempenho (Upgrade)',
  ];

  const consoleServices = [
    'Limpeza Preventiva',
    'Reparo em Placa',
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
    <>
      <Heading textAlign="center" p="30px">
        Serviços
      </Heading>
      <Grid
        h="300px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={10}
      >
        <GridItem colSpan={2} marginLeft="110px" border="1px solid red">
          <Service
            title="Smartphone"
            icon="ion:phone-portrait-outline"
            description={smartphoneServices}
          />
        </GridItem>
        <GridItem colSpan={2} marginLeft="110px">
          <Service
            title="Computador"
            icon="ion:desktop-outline"
            description={computerServices}
          />
        </GridItem>
        <GridItem colSpan={2} marginLeft="110px">
          <Service
            title="Console"
            icon="carbon:game-console"
            description={consoleServices}
          />
        </GridItem>
        <GridItem colSpan={2} marginLeft="110px">
          <Service
            title="Acessórios"
            icon="mdi:cable-data"
            description={accessoriesServices}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Services;
