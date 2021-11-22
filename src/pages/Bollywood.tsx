import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Nav,
  HeadingContainer,
  TopPost,
  LatestArticlesCard
} from "../components";

const Container = styled.div``;

const Stories = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ColOne = styled.div`
  width: 100%;
  flex: 2;
  min-width: 500px;
  padding: 0em 1em;

  @media (max-width: 550px) {
    min-width: 100%;
  }
`;

const CardTitle = styled.h1``;

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

const LACard = styled.div`
  border: 1px solid transparent;
  border-top-color: #ddd;
  display: flex;
  padding: 1em 0em;
  flex-flow: row nowrap;
  align-items: center;
`;

const LACardBody = styled.div`
  padding: 1em;
`;

const LACardImage = styled.div`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  background: #eee;
  background: url("https://images.unsplash.com/photo-1636875172785-be59a8d4c319?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
    no-repeat;
  background-size: cover;

  box-shadow: 0px 15px 20px 0px #e2e2e2;
`;

const Title = styled.h1`
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

const ColTwo = styled.div`
  width: 100%;
  flex: 1;
`;

const Button = styled.button`
  width: max-content;
  background: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: flex;
  place-items: center;

  & > svg {
    width: 30px;
  }
`;

interface Prop {
  path: string;
}

const dummyData = [
  {
    title: "Catch waves with an adventure guide",
    content:
      "Gujrat is vastly underated and it's a a mystery to us why the religion isn't more well",
    date: "August 21 2017"
  },
  {
    title: "Catch waves with an adventure guide",
    content:
      "Gujrat is vastly underated and it's a a mystery to us why the religion isn't more well",
    date: "August 21 2017"
  }
];

export const Bollywood: React.FC<Prop> = () => {
  const [showNav, setShowNav] = useState(true);
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    setResult(dummyData);
  }, []);

  const addPost = () => {
    let newArr = [
      {
        title: "Catch waves with an adventure guide",
        content:
          "Gujrat is vastly underated and it's a a mystery to us why the religion isn't more well",
        date: "August 21 2017"
      },
      ...result
    ];

    setResult(newArr);
  };

  return (
    <Container>
      <HeadingContainer showNav={showNav} setShowNav={setShowNav} />
      {showNav ? <Nav /> : null}
      <Title>Bollywood</Title>
      <Stories>
        <ColOne>
          {result.map((item) => {
            return (
              <LatestArticlesCard
                title={item.title}
                content={item.content}
                date={item.date}
              />
            );
          })}
          <Button type="button" onClick={() => addPost()}>
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </ColOne>
        <ColTwo>
          <TopPost showAdvertisement={false} />
        </ColTwo>
      </Stories>
    </Container>
  );
};
