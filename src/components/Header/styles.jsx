import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  color: white;
  background: #203d5a;
  margin-bottom: 3rem;
  box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  height: 70px;
`;

export const Menu = styled.ul`
  list-style: none;

  & > li {
    display: inline-block;
    position: relative;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  & img {
    height: 32px;
  }

  & h1 {
    display: inline;
    font-family: Overpass;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  display: block;
  color: white;
  padding: 10px 15px;
  margin: 0px 5px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border: 0px #34495e;
  background: #34495e;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #41dabb;
  }

  &:disabled {
    color: gray;
  }

  ${({ mainBtn }) =>
    mainBtn &&
    css`
      background-color: #1abc9c;
      color: white;
      border-radius: 5px;
      transition: 0.3s;

      &:hover {
        background-color: #4ac2aa;
        color: white;
      }
    `}
`;
