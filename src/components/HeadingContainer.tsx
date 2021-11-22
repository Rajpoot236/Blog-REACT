import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
  position: relative;
`;

const Header = styled.div`
  display: inline;

  position: absolute;
  transform: rotate(268deg);
  font-weight: 300;
  font-size: 16px;
  bottom: 0.5em;
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

const B = styled.b`
  margin-left: 1em;
`;

interface Props {
  setShowNav: any;
  showNav: any;
}

export const HeadingContainer: React.FC<Props> = ({ showNav, setShowNav }) => {
  return (
    <Container>
      <Heading>
        <Header>The</Header> <B>Siren</B>
      </Heading>
      <Hamburger onClick={() => setShowNav(!showNav)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </Hamburger>
    </Container>
  );
};
