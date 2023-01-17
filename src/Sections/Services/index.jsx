import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
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
    'Película',
    'Capinhas',
    'Fones de Ouvido',
    'Acessórios para Notebook',
    'Adaptadores e Itens externos',
  ];

  return (
    <Flex
      id="services"
      className="services"
      flexDirection="column"
      height="100%"
      padding="60px 0px"
    >
      <Heading
        textAlign="center"
        h={{ base: '15%', lg: '10%' }}
        fontSize={{ base: '55px', lg: '65px' }}
        paddingBottom={{ base: '15px', lg: '0px' }}
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
            icon="ion:phone-portrait-outline"
            description={smartphoneServices}
            link="https://wa.me/5518996396222?text=Ol%C3%A1.+Estou+precisando+de+ajuda+com+o+meu+smartphone%2C+aguardo+o+seu+retorno."
            mTitle="15px"
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Computador"
            icon="ion:desktop-outline"
            description={computerServices}
            link="https://wa.me/5518996396222?text=Ol%C3%A1.+Estou+precisando+de+ajuda+com+o+meu+computador/notebbok%2C+aguardo+o+seu+retorno."
            pButton="50px 0px"
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Video Game"
            icon="carbon:game-console"
            description={consoleServices}
            link="https://wa.me/5518996396222?text=Ol%C3%A1.+Estou+precisando+de+ajuda+com+o+meu+video+game%2C+aguardo+o+seu+retorno."
            pButton="50px 0px"
          />
        </GridItem>
        <GridItem colSpan={2} display="flex" justifyContent="center">
          <Service
            title="Acessórios"
            icon="mdi:cable-data"
            description={accessoriesServices}
            link="https://wa.me/5518996396222?text=Ol%C3%A1.+Gostaria+de+comprar+um+acess%C3%B3rio%2C+aguardo+seu+retorno."
            subTitle=" Venda"
            mTitle="20px"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Services;
