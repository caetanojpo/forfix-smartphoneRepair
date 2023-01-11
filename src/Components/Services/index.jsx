import { Flex } from '@chakra-ui/react';
import Service from '../Service';

const Services = () => {
  return (
    <Flex flexDir="row" justifyContent="space-evenly">
      <Service title="Smartphone" icon="ion:phone-portrait-outline">
        IASOKDASKD ASKODKAS ASPKDPASDLA AOSKDKOASDKO
      </Service>
      <Service title="Notebook" icon="material-symbols:laptop-mac-outline" />
      <Service title="Acessórios" icon="mdi:cable-data" />
    </Flex>
  );
};

export default Services;
