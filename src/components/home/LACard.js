import React from "react";
import styled from "styled-components";

import { Link } from "@reach/router";

const Stories = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ColOne = styled.div`
  width: 100%;
  flex: 2;
  min-width: 500px;
  padding: 0em 1em;
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

const LACard = styled(Link)`
  display: block;
  color: #000;
  text-decoration: none;
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

  @media (max-width: 550px) {
    width: 100px;
    height: 100px;
  }
`;



export const LatestArticlesCard = ({
  title,
  content,
  date
}) => {
  return (
    <LACard to="/postDetail">
      <LACardImage></LACardImage>
      <LACardBody>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
        <CardFooter>
          <b>Travel</b> / {date}
        </CardFooter>
      </LACardBody>
    </LACard>
  );
};
