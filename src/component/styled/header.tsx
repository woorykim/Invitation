import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.header)`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0;
`;

export const WeatherArea = styled(motion.div)<{ $scroll: number }>`
  padding: 2px 10px;
  width: fit-content;
  height: auto;
  transition: background 0.3s;
  border-radius: 3.125rem;
  background-color: var(--custom-blue-color);
  p {
    color: var(--white-color-100);
  }
  ${({ $scroll }) =>
    $scroll > 20 &&
    css`
      background-color: transparent;
      backdrop-filter: contrast(0.5);
      -webkit-backdrop-filter: contrast(0.5);
      box-shadow: 3px 10px 18px rgba(0, 0, 0, 0.2);
      p {
        color: var(--white-color-100);
      }
    `};
`;

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
`;

export const AudioArea = styled(motion.div)<{ $scroll: number }>`
  padding: 10px;
  width: fit-content;
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

export const MapArea = styled(motion.div)<{ $scroll: number }>`
  padding: 10px;
  width: fit-content;
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
