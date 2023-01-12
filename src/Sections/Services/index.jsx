import { Box, Heading } from '@chakra-ui/react';
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
    'Adaptadores e itens externos',
  ];

  return (
    <>
      <Heading textAlign="center" p="30px">
        Serviços
      </Heading>
      <Box>
        <Service
          title="Smartphone"
          icon="ion:phone-portrait-outline"
          description={smartphoneServices}
        />
        <Service
          title="Computador"
          icon="ion:desktop-outline"
          description={computerServices}
        />
        <Service
          title="Console"
          icon="carbon:game-console"
          description={consoleServices}
        />
      </Box>
    </>
  );
};

export default Services;
