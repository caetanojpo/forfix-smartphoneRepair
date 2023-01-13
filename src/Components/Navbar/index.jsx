import { Image } from '@chakra-ui/react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import Burger from '../Burger/Burger';
import Menu from '../Menu';
import {
  ButtonNav,
  Container,
  DivNav,
  HamburNav,
  LiNav,
  UlNav,
} from './Navbar.styled';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <HamburNav>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </HamburNav>
        </>
      </ThemeProvider>

      <Container>
        <Image w={{ base: '150px', md: '200px' }} src="/FORFIX_4-09.png" />
        <DivNav>
          <UlNav>
            <LiNav as="a" href="/">
              Home
            </LiNav>
            <LiNav as="a" href="/">
              Serviços
            </LiNav>
            <LiNav as="a" href="#about">
              A Empresa
            </LiNav>
            <LiNav as="a" href="#team">
              Equipe
            </LiNav>
            <ButtonNav as="a" href="#">
              Fale Conosco
            </ButtonNav>
          </UlNav>
        </DivNav>
      </Container>
    </>
  );
};

export default Navbar;
