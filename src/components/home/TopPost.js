import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Advertisement = styled.div`
  height: 100vh;
  display: grid;
  border: 1px solid black;
  place-items: center;
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

const HeadTwo = styled.h2`
  margin-top: 0;
`;

const Heading = styled.div`
  padding: 1em 0.5em;
`;

const Content = styled.div`
  color: #989898;
`;

const Image = styled.div`
  background: url("
https://images.unsplash.com/photo-1636921102763-59e64e34905c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60")
    no-repeat;
  background-size: cover;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: minmax(200px, 1fr) auto auto;
  grid-gap: 1ch;

  & > div:nth-of-type(1) {
    grid-column: span 2;
    background: url("https://images.unsplash.com/photo-1637016323940-022b307ef920?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60")
      no-repeat;
    background-size: cover;
  }

  & > div:nth-of-type(2) {
    grid-column: span 2;
  }

  & > div:nth-of-type(3) {
    grid-column: span 2;
  }
`;



export const TopPost = ({ showAdvertisement }) => {
  return (
    <Container>
      {showAdvertisement ? <Advertisement>Advertisement</Advertisement> : null}
      <div>
        <Title>Top Post</Title>
        <Grid>
          <div></div>
          <Heading>
            <HeadTwo>Catch waves with an adventure guide</HeadTwo>
          </Heading>
          <Content>Travel / August 21 2017</Content>
          <Image></Image>
          <div>
            <HeadTwo>Catch waves with an adventure guide</HeadTwo>
            <div>Travel / August 21 2017</div>
          </div>
          <Image></Image>
          <div>
            <HeadTwo>Catch waves with an adventure guide</HeadTwo>
            <div>Travel / August 21 2017</div>
          </div>
          <Image></Image>
        </Grid>
      </div>
    </Container>
  );
};
