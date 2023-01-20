import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import InfoCard from '../../Components/InforCard';
import './Infos.css';

const Infos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        modal={onOpen}
        icon="material-symbols:nest-clock-farsight-analog-outline"
        title="Segunda à Sexta-feira"
        text="08h-18h"
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Horários de Atendimento</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            textAlign="center"
            display="flex"
            flexDir="column"
            gap="25px"
          >
            <Stack spacing={4}>
              <Text>Segunda-feira: 08h às 18h</Text>
              <Text>Terça-feira: 08h às 18h</Text>
              <Text>Quarta-feira: 08h às 18h</Text>
              <Text>Quinta-feira: 08h às 18h</Text>
              <Text>Sexta-feira: 08h às 18h</Text>
              <Text>Sábados: 08h às 18h</Text>
            </Stack>
            <Text textAlign="justify" fontWeight="bold">
              Para atendimentos nos domingos, feriados ou fora do horário
              comercial, por favor entrar em contato no WhatsApp.
            </Text>
          </ModalBody>

          <ModalFooter justifyContent="center" gap="20px">
            <Button
              transition="0.4s"
              bg="white"
              color="#EF8D4E"
              border="2px solid #EF8D4E"
              _hover={{ backgroundColor: '#EF8D4E', color: 'white' }}
              width="100px"
              onClick={onClose}
            >
              Close
            </Button>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5518996396222&text=Ol%C3%A1%21+Vim+pelo+seu+site+e+preciso+dos+seus+servi%C3%A7os&type=phone_number&app_absent=0"
            >
              <Button
                transition="0.4s"
                bg="white"
                color="#25D366"
                border="2px solid #25D366"
                _hover={{ backgroundColor: '#25D366', color: 'white' }}
                width="100px"
              >
                <Icon width="70%" icon="ic:outline-whatsapp" />
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <InfoCard
        link="https://goo.gl/maps/FSRzZXtiQwjJLkNP6"
        icon="material-symbols:pin-drop"
        title="Rua Fortunato Bornea, nº 08"
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
