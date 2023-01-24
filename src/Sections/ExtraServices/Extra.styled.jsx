import styled from 'styled-components';

export const ExtraContainer = styled.div`
  position: relative;
  z-index: 3;

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    top: -7px;
    left: -7px;
    z-index: -5;
    border-top: 3px solid white;
    border-left: 3px solid white;
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    bottom: -7px;
    right: -7px;
    z-index: -5;
    border-right: 3px solid #25d366;
    border-bottom: 3px solid #25d366;
    transition: 0.5s;
  }
  &:hover {
    width: 100%;
    height: 100%;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
  }
  &:hover:after {
    width: 100%;
    height: 100%;
  }
`;

export const ExtraButton = styled.button`
  padding: 0.7em 2em;
  font-size: 16px;
  background: #25d366;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: inherit;

  @media screen and (max-width: 768px) {
    padding: 0.5em 2em;
  }
`;
