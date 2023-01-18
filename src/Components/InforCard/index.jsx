import { Box, Button, Link, Text, useToast } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const InfoCard = (props) => {
  const toast = useToast();
  return (
    <>
      {props.email ? (
        <Button
          as={Link}
          className="links"
          w={{ base: '', md: '25%' }}
          display="flex"
          flexDir={{ base: 'row', md: 'column' }}
          alignItems="center"
          justifyContent="space-between"
          p="0px"
          gap={{ base: '20px' }}
          _hover={{ bg: 'transparent', color: '#EF8D4E' }}
          _active={{ bg: 'transparent' }}
          bg="transparent"
          h="80px"
          onClick={() => {
            navigator.clipboard.writeText(props.title);
            toast({
              title: 'Email copiado para área de transferência.',
              position: 'bottom-right',
              duration: 3000,
              status: 'warning',
              isClosable: true,
            });
          }}
        >
          <Icon className="icons" icon={props.icon} />
          <Text w="90%" fontWeight="400">
            {props.title}
          </Text>
        </Button>
      ) : (
        <Link
          target={props.target || '_blank'}
          className="links"
          w={{ base: '', md: '25%' }}
          display="flex"
          flexDir={{ base: 'row', md: 'column' }}
          alignItems="center"
          gap={{ base: '20px' }}
          href={props.link}
        >
          <Icon className="icons" icon={props.icon} />
          <Box display="flex" flexDir="column" alignItems="center" flex="1">
            <Text>{props.title}</Text>
            <Text>{props.text}</Text>
          </Box>
        </Link>
      )}
    </>
  );
};

export default InfoCard;
