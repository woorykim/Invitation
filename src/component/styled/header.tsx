import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.header)`
  width: fit-content;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 10px;
  right: 20px;
`;
export const MapArea = styled(motion.div)<{ $scroll: number }>`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: var(--custom-blue-color);

  cursor: pointer;
  transition: background 0.3s;
  border-radius: 3.125rem;

  ${({ $scroll }) =>
    $scroll > 20 &&
    css`
      background: var(--custom-liteBlue-color);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      box-shadow: 3px 10px 18px rgba(0, 0, 0, 0.2);
    `};
`;

export const Map = styled.img`
  width: 20px;
  height: auto;
`;
