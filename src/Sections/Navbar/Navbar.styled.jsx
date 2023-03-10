import styled from 'styled-components';

export const Container = styled.div`
  z-index: 3;
  background-color: black;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  @media (min-width: 768px) {
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 3;
  }
`;

export const HamburNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DivNav = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    margin-right: 20px;
  }
`;

export const UlNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: white;
`;

export const LiNav = styled.li`
  cursor: pointer;
  text-align: center;

  &:after {
    padding: 2px 0;
    display: block;
    content: '';
    border-bottom: 3px solid white;
    transform: scaleX(0);
    transition: transform 400ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const ButtonNav = styled.button`
  @media (min-width: 576px) {
    padding: 0.8em 1.8em;
    border: 2px solid white;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: 0.5s;
    z-index: 1;
    font-family: inherit;
    color: white;

    &:before {
      content: '';
      width: 0;
      height: 350%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      background: white;
      transition: 0.5s ease;
      display: block;
      z-index: -1;
    }

    &:hover:before {
      width: 105%;
    }

    &:hover {
      color: black;
    }
  }
`;
