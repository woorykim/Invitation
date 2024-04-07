import React from "react";
import styled from "styled-components";

import { useScroll } from "./hook/useScroll";
import { useWindowResize } from "./hook/useWindowResize";
import { ModalProvider } from "./context/ModalContext";

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
    <ModalProvider>
      <Wrapper>
        <HeadBar scroll={y}></HeadBar>
        <Body></Body>
      </Wrapper>
    </ModalProvider>
  );
}

export default App;
