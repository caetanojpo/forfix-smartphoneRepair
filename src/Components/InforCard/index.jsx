import { Box, Link, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const InfoCard = (props) => {
  return (
    <Link
      className="links"
      w={{ base: '', md: '25%' }}
      display="flex"
      flexDir={{ base: 'row', md: 'column' }}
      alignItems="center"
      gap={{ base: '20px' }}
      target="_blank"
      href={props.link}
    >
      <Icon className="icons" icon={props.icon} />
      <Box display="flex" flexDir="column" alignItems="center" flex="1">
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>
      </Box>
    </Link>
  );
};

export default InfoCard;
