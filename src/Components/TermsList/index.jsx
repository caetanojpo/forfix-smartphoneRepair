import { ListItem, OrderedList, Text } from '@chakra-ui/react';

const TermsList = (props) => {
  return (
    <OrderedList type="1">
      {props.listItens.map((itens) => {
        return (
          <ListItem>
            <Text fontWeight={600}>{itens.title}</Text>
            <Text>{itens.text}</Text>
          </ListItem>
        );
      })}
    </OrderedList>
  );
};

export default TermsList;
