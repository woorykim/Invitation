import React from "react";
import styled, { css } from "styled-components";

const Header = styled.header<{ $scroll: number }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
  background: var(--white-color-100);
  ${({ $scroll }) =>
    $scroll > 0 &&
    css`
      top: -35px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 100%
      );
      transition: 0.3s;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    `};
`;

/**
 * @title HeadBar Component Type
 */
interface IHeadBarProps {
  scroll: number;
}

/**
  @title HeadBar Components
*/
export const HeadBar: React.FC<IHeadBarProps> = (props) => {
  const { scroll } = props;

  return (
    <Header $scroll={scroll}>
      <div>💗</div>
      <div>🗺️</div>
    </Header>
  );
};
