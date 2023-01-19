import { Image, Link } from '@chakra-ui/react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { theme } from '../../theme';
import Burger from '../../Components/Burger';
import Menu from '../../Components/Menu';
import {
  ButtonNav,
  Container,
  DivNav,
  HamburNav,
  LiNav,
  UlNav,
} from './Navbar.styled';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {props.burgPath ? (
        <div display="none" />
      ) : (
        <ThemeProvider theme={theme}>
          <>
            <HamburNav>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </HamburNav>
          </>
        </ThemeProvider>
      )}

      <Container>
        {props.imagePath ? (
          <Link as={LinkRoute} to="/">
            <Image
              display={{ base: 'none', lg: 'block' }}
              marginLeft={{ lg: '10px' }}
              w={{ base: '100px', md: '120px' }}
              src="/FORFIX_4-09.png"
            />
            <Image
              display={{ base: 'block', lg: 'none' }}
              marginLeft={{ md: '10px' }}
              w={{ base: '40px', md: '40px' }}
              src="/FORFIX_5-10.png"
            />
          </Link>
        ) : (
          <Link href="/#home">
            <Image
              display={{ base: 'none', lg: 'block' }}
              marginLeft={{ lg: '10px' }}
              w={{ base: '100px', md: '120px' }}
              src="/FORFIX_4-09.png"
            />
            <Image
              display={{ base: 'block', lg: 'none' }}
              marginLeft={{ md: '10px' }}
              w={{ base: '40px', md: '40px' }}
              src="/FORFIX_5-10.png"
            />
          </Link>
        )}

        <DivNav>
          {props.politicsPath ? (
            <UlNav>
              <LiNav as={LinkRoute} to="/">
                Home
              </LiNav>
              <ButtonNav
                as="a"
                target="_blank"
                href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Vim+pelo+seu+site+e+preciso+dos+seus+servi%C3%A7os"
              >
                Fale Conosco
              </ButtonNav>
            </UlNav>
          ) : (
            <UlNav>
              <LiNav as="a" href="/#home">
                Home
              </LiNav>
              <LiNav as="a" href="/#services">
                Serviços
              </LiNav>
              <LiNav as="a" href="/#about">
                A Empresa
              </LiNav>
              <LiNav as="a" href="/#team">
                Equipe
              </LiNav>
              <ButtonNav
                as="a"
                target="_blank"
                href="https://wa.me/5518996396222?text=Ol%C3%A1%21+Vim+pelo+seu+site+e+preciso+dos+seus+servi%C3%A7os"
              >
                Fale Conosco
              </ButtonNav>
            </UlNav>
          )}
        </DivNav>
      </Container>
    </>
  );
};

export default Navbar;
