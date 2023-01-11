import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { array } from 'prop-types';

const Service = (props) => {
  return (
    <>
      <Card maxW="sm" display="flex" alignItems="center">
        <CardHeader>
          <Heading size="md">{props.title}</Heading>
        </CardHeader>
        <CardBody display="flex" flexDir="column" alignItems="center">
          <Icon icon={props.icon} width="100" height="100" />
          {/* <Stack mt="6" spacing="3">
            
              <li>Substituição de Tela</li>
              <li>Substituição de Bateria</li>
              <li>Substituição de Conector</li>
              <li>Reparo em Placa</li>
            </ul>
          </Stack> */}
        </CardBody>
        <Divider />
      </Card>
    </>
  );
};

export default Service;
