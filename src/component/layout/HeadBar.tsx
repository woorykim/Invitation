import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const HeadBar = () => {
  return (
    <Header>
      <div>💗</div>
      <div>🗺️</div>
    </Header>
  );
};
