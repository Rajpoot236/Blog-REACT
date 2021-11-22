import React, { useState } from "react";
import styled from "styled-components";

import { Nav, HeadingContainer } from "../components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Post = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <Container>
      <HeadingContainer showNav={showNav} setShowNav={setShowNav} />
      {showNav ? <Nav /> : null}
    </Container>
  );
};
