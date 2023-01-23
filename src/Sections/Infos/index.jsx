import { Flex } from '@chakra-ui/react';
import InfoCard from '../../Components/InforCard';
import './Infos.css';

const Infos = () => {
  return (
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
      <InfoCard
        link="https://beacons.ai/forfix.assistencia"
        icon="material-symbols:nest-clock-farsight-analog-outline"
        title="Segunda à Sexta-feira"
        text="08h-18h"
      />
      <InfoCard
        link="https://goo.gl/maps/FSRzZXtiQwjJLkNP6"
        icon="material-symbols:pin-drop"
        title="Rua Fortunato Bornea, 08"
        text="Assis/SP"
      />
      <InfoCard
        link="https://www.instagram.com/forfix.assistencia/"
        icon="mdi:instagram"
        title="@forfix.assistencia"
      />
      <InfoCard
        link="/"
        icon="material-symbols:mail-outline-rounded"
        title="email@forfix.com.br"
        email="true"
      />
      <InfoCard
        target="_self"
        link="tel:+5518996396222"
        icon="material-symbols:phone-android-outline"
        title="(18) 99639-6222"
      />
    </Flex>
  );
};

export default Infos;
