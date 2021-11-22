import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Nav,
  HeadingContainer,
  LStories,
  Latest,
  TopPost,
  LatestArticlesCard
} from "../components";

import { Link, navigate } from "@reach/router";

const Homebar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    justify-content: space-between;
  }
`;

const Heading = styled.h1`
  text-align: center;
`;

const Header = styled.div`
  display: inline;
`;

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1em 0em;
  grid-gap: 1vmin;

  & > div:nth-of-type(1) {
    grid-row: span 2;
    background: url("https://images.unsplash.com/photo-1636839271471-989bd190372c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
      no-repeat;
    background-size: cover;
  }

  & > div:nth-of-type(2) {
    background: url("https://images.unsplash.com/photo-1636794756058-957d555a9cd6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
      no-repeat;
    background-size: cover;
  }

  & > div:nth-of-type(3) {
    background: url("https://images.unsplash.com/photo-1636875172785-be59a8d4c319?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
      no-repeat;
    background-size: cover;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

const ImageContainer = styled.div`
  display: block;
  text-decoration: none;
  background: #eee;
  border-radius: 6px;
  padding: 4em 2em;
  display: flex;
  color: white;
  flex-flow: column wrap;
  cursor: pointer;
  filter: grayscale(1);
  justify-content: flex-end;

  &:hover {
    box-shadow: 0px 0px 10px 1px #0f0f0f4f;
    transition: box-shadow 0.7s ease-out,
      filter 0.4s cubic-bezier(0, 0, 0.85, 0.41);
    filter: none;
  }

  @media (max-width: 550px) {
    margin: 1em 0em;
    padding: 4em 1em;
  }
`;

const ImageTitle = styled.h2``;

const ImageContent = styled.div`
  color: #989898;
`;

//const Latest = styled.div``;

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

const CardWrapper = styled.div`
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

const Card = styled.div`
  background: #fff;
  width: 300px;
  cursor: pointer;
  flex-shrink: 0;
  min-height: 300px;
  margin: 0em 1em;
  border-radius: 6px;
  background: #fafafa5e;

  &:hover {
    background: #000;
    color: #fff;
    box-shadow: 0px 15px 20px 0px #e2e2e2;
    transition: background 0.5s linear;
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

const CardTitle = styled.h3``;

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

const LAWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 1fr;

  @media (max-width: 550px) {
    display: block;
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

const Advisement = styled.div`
  height: 100%;
  display: grid;
  border: 1px solid black;
  place-items: center;
`;

const Hamburger = styled.div`
  display: none;
  & > svg {
    width: 40px;
  }

  @media (max-width: 550px) {
    display: block;
  }
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

export const Home = () => {
  const [showNav, setShowNav] = useState(true);
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    setResult(dummyData);
  }, []);

  const goDetail = () => {
    navigate("/postDetail");
  };

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
    <>
      <HeadingContainer showNav={showNav} setShowNav={setShowNav} />
      {showNav ? <Nav /> : null}
      <HomeContainer>
        <ImageContainer onClick={goDetail}>
          <ImageTitle>Title of vertical gallery</ImageTitle>
          <ImageContent
            style={{
              color: "#fff"
            }}
          >
            Travel / August 21 2017
          </ImageContent>
        </ImageContainer>
        <ImageContainer onClick={goDetail}>
          <ImageTitle>The Sound cloud You Loved is doomed</ImageTitle>
          <ImageContent
            style={{
              color: "#fff"
            }}
          >
            Travel / August 21 2017
          </ImageContent>
        </ImageContainer>
        <ImageContainer onClick={goDetail}>
          <ImageTitle>The Sound cloud You Loved is doomed</ImageTitle>
          <ImageContent
            style={{
              color: "#fff"
            }}
          >
            Travel / August 21 2017
          </ImageContent>
        </ImageContainer>
      </HomeContainer>
      <Latest />
      <div>
        <Title>Latest Articles</Title>
        <LAWrapper>
          <div>
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
          </div>
          <TopPost showAdvertisement={true} />
        </LAWrapper>
      </div>
      <LStories />
    </>
  );
};
