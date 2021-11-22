import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "@reach/router";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 2em 0em;
  overflow-x: auto;
  border: 1px solid transparent;
  border-top-color: #ddd;

  @media (max-width: 550px) {
    flex-flow: column nowrap;
  }
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

const Card = styled(Link)`
  text-decoration: none;
  color: #000;
  display: block;
  background: #fff;
  width: 300px;
  cursor: pointer;
  flex-shrink: 0;
  flex: 1;
  min-height: 300px;
  margin: 0em 1em;
  border-radius: 6px;
  filter: grayscale(1);
  background: #fafafa5e;

  &:hover {
    background: #000;
    color: #fff;
    box-shadow: 0px 15px 20px 0px #e2e2e2;
    transition: background 0.5s linear;
    transition: box-shadow 0.7s ease-out,
      filter 0.4s cubic-bezier(0, 0, 0.85, 0.41);
    filter: none;
  }

  @media (max-width: 550px) {
    margin: 1em 0em;
  }
`;

const CardImage = styled.div`
  min-height: 200px;
  background: #ddd;
  border-radius: 6px 6px 0px 0px;
  background: url("https://images.unsplash.com/photo-1636875172785-be59a8d4c319?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
    no-repeat;
  background-size: cover;
  flex-shrink: 0;
`;

const CardBody = styled.div`
  padding: 1em;
`;

const CardTitle = styled.h2``;

const CardContent = styled.div`
  color: #989898;
  color: inherit;
`;

const CardFooter = styled.div`
  font-weight: 600;
  color: #a2a2a2;
  margin: 1em 0em;

  & > b {
    color: #8c8c8c;
  }
`;

const dummyData = [
  {
    title: "Joshua Tree overnight Adventure",
    content:
      "Gujrat is vastly and its a mystery to us why the religion isn't mystery to us why the religion isn't more well-known as a tourist destination. It has a plethora of temples and places",
    footer: {
      day: "Travel",
      date: "August 21 2017"
    }
  },
  {
    title: "Joshua Tree overnight Adventure",
    content:
      "Gujrat is vastly and its a mystery to us why the religion isn't mystery to us why the religion isn't more well-known as a tourist destination. It has a plethora of temples and places",
    footer: {
      day: "Travel",
      date: "August 21 2017"
    }
  },
  {
    title: "Joshua Tree overnight Adventure",
    content:
      "Gujrat is vastly and its a mystery to us why the religion isn't mystery to us why the religion isn't more well-known as a tourist destination. It has a plethora of temples and places",
    footer: {
      day: "Travel",
      date: "August 21 2017"
    }
  }
];

export const Latest = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(dummyData);
  }, []);

  return (
    <Container>
      <Heading>The Latest</Heading>
      <Wrapper>
        {result?.map((item) => {
          if (!item) return null;
          return (
            <Card to="postDetail">
              <CardImage></CardImage>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
                <CardFooter>
                  <b>{item.footer.day}</b> {item.footer.date}
                </CardFooter>
              </CardBody>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};
