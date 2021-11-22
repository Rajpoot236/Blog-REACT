import React from "react";
import styled from "styled-components";

import { Link } from "@reach/router";

const Container = styled.div`
  width: 100%;
  background: #fff;
  margin: 5em 0em 0em 0em;
`;

const Heading = styled.h1`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.2em;
    left: 0;
    width: 3ch;
    height: 0.15rem;
    background-color: #f08080;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 1em 0em;
  border: 2px solid transparent;
  border-top-color: #ddd;
  border-bottom-color: #ddd;

  & > div:nth-of-type(2) {
    border: 2px solid transparent;
    border-right-color: #ddd;
    border-left-color: #ddd;
  }

  @media (max-width: 500px) {
    flex-flow: column nowrap;

    & > div:nth-of-type(2) {
      border: none;
    }
  }
`;

const Card = styled(Link)`
  text-decoration: none;
  display: block;
  flex: 1;
  color: #000;
  padding: 2em 1em;

  &:hover {
    background: #000;
    color: #fff;
    transition: background 0.5s ease-out;
  }
`;

const Title = styled.h1``;

const Content = styled.div``;

export const LStories = () => {
  return (
    <Container>
      <Heading>Latest Stories</Heading>
      <Wrapper>
        <Card to="/postDetail">
          <Title>Catch waves with an adventure guide</Title>
          <Content>
            Gujarat is vastly and it's mystery to us why the region isn't more
            well-known as toursit destination. It has a phelthora of temples and
            places.Gujarat is vastly and it's mystery to us why the region isn't
            more well-known as toursit destination. It has a phelthora of
            temples and places
          </Content>
        </Card>
        <Card to="postDetail">
          <Title>Catch waves with an adventure guide</Title>
          <Content>
            Gujarat is vastly and it's mystery to us why the region isn't more
            well-known as toursit destination. It has a phelthora of temples and
            places.Gujarat is vastly and it's mystery to us why the region isn't
            more well-known as toursit destination. It has a phelthora of
            temples and places
          </Content>
        </Card>
        <Card to="postDetail">
          <Title>Catch waves with an adventure guide</Title>
          <Content>
            Gujarat is vastly and it's mystery to us why the region isn't more
            well-known as toursit destination. It has a phelthora of temples and
            places.Gujarat is vastly and it's mystery to us why the region isn't
            more well-known as toursit destination. It has a phelthora of
            temples and places
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};
