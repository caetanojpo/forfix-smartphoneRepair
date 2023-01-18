import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

const PoliticsList = (props) => {
  return (
    <UnorderedList paddingLeft="20px">
      {props.list.map((item) => {
        return (
          <ListItem>
            <Text>{item}</Text>
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default PoliticsList;
