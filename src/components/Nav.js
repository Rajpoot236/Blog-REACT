import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.nav`
  height: auto;
  display: flex;
  padding: 0em 1em;
  flex-flow: row wrap;
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-bottom-color: #eee;

  @media (max-width: 550px) {
    position: static;
  }
`;

const Tab = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5em 1em;
  cursor: pointer;
  color: #000;
  border-radius: 6px 6px 0px 0px;

  &:hover {
    background: #000;
    color: #fff;
    transition: box-shadow 0.2s linear;
  }

  @media (max-width: 550px) {
    width: 100%;
    text-align: center;
  }
`;

export const Nav = () => {
  return (
    <Container>
      <Tab to="/">Home</Tab>
      <Tab to="/bollywood">Bollywood</Tab>
      <Tab to="/technology">Technology</Tab>
      <Tab to="/hollywood">Hollywood</Tab>
      <Tab to="/fitness">Fitness</Tab>
      <Tab to="/food">Food</Tab>
    </Container>
  );
};
