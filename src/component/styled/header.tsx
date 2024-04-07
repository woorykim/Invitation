import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.header)`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
`;
export const MapArea = styled(motion.div)<{ $scroll: number }>`
  padding: 10px;
  width: fit-content;
  background: var(--custom-frenchPurple-color);
  cursor: pointer;
  transition: 0.3s;
  border-radius: 3.125rem;

  ${({ $scroll }) =>
    $scroll > 20 &&
    css`
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

export const Map = styled.img`
  width: 20px;
  height: auto;
`;
