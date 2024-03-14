import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

import { useScroll } from "./hook/useScroll";
import { useWindowResize } from "./hook/useWindowResize";
import { HeadBar } from "./component/layout/HeadBar";
import { Body } from "./component/layout/Body";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const { y } = useScroll();

  useWindowResize();

  return (
    <Wrapper>
      <HeadBar scroll={y}></HeadBar>
      <Body></Body>
    </Wrapper>
  );
}

export default App;
