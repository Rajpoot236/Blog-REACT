import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";

import { LStories } from "../components";

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const PostNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-bottom-color: #eee;
`

const Heading = styled.h1`
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const Header = styled.div`
  display: inline;

  position: absolute;
  transform: rotate(268deg);
  font-weight: 300;
  font-size: 16px;
  bottom: 0.5em;
`;

const B = styled.b`
  margin-left: 1em;
`;

const Button = styled.button`
  border: 2px solid #000;
  padding: 0.5em 1rem;
  border-radius: 6px;
  background: transparent;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  
  &:hover {
    background: #000;
    color: #fff;
    transition: background 0.2s ease-in;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;

  @media (max-width: 550px) {
    flex-flow: column-reverse nowrap;
  }
`

const ColOne = styled.div`
  flex: 1;
`

const ShareContainer = styled.div`
  position: sticky;
  top: 1em;
`

const ColTwo = styled.div`
  flex: 3;
`

const HeaderOne = styled.h1``

const Banner = styled.div`
  padding: 1em;
  margin: 1em 0em;
  background: #eee;
  position: sticky;
  top: 0;
  border-radius: 6px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const BannerImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #000;
`

const Image = styled.img`
  width: 100%;
  border-radius: 6px;
`

const Content = styled.div``

const Tags = styled.div`
  display: flex;
  place-items: center;
  padding: 1em 0em;
`

const Tag = styled.div`
  padding: 0.3em 1em;
  width: max-content;
  background: #eee;
  margin-right: 1em;
  font-weight: 700;
  color: #aaa;
  cursor: pointer;
`

export const Post = () => {
  const [showNav, setShowNav] = useState(true);

  const goToHome = () => {
    navigate("/")
  }

  return (
    <Container>
      <PostNav>
        <Heading onClick={goToHome}>
          <Header>The</Header> <B>Siren</B>
        </Heading>
        <Button type="button">Get Started</Button>
      </PostNav>
      <Wrapper>
        <ColOne>
          <ShareContainer>
          <div>0 claps</div>
          <div>Share the articles</div>
          </ShareContainer>
        </ColOne>
        <ColTwo>
          <HeaderOne>Change Your Breathing</HeaderOne>
          <Banner>
            <BannerImage></BannerImage>
            <div>
              <div>Shubum Rajpoot</div>
              <div>15/11/2021 1 min read</div>
            </div>
          </Banner>
          <Image alt="" src="https://images.pexels.com/photos/10177290/pexels-photo-10177290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Content>
            Have you ever thought about your breathing? Most people don’t. Breathing is an automatic function of the body, but you can also control it. You must breathe to live and so your body will do everything it can to make that happen. But your environment, stress and how you breathe can alter and even impede that process
          </Content>
          <Tags>
            <Tag>Breathing</Tag>
            <Tag>Meditation</Tag>
          </Tags>
        </ColTwo>
      </Wrapper>
      <LStories />
    </Container>
  );
};
