import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  overscroll-behavior-y: none;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(1, 1fr);
  background-color: var(--white-color-100);
  & > section {
    overflow: hidden;
    position: fixed;
  }
  & > section,
  & > div > section:nth-child(1) {
    opacity: 1;
  }
  & > div > section:nth-child(3) {
    padding: 40px 0;
  }
`;

export const Section = styled(motion.section)`
  width: 100%;
  height: auto;
  padding-bottom: 16px;
  position: relative;
  background-color: var(--white-color-100);

  &:last-child {
    position: relative;
  }
`;

export const OpacityBox = styled(motion.div)`
  margin-top: 0px;
  opacity: 0;
  transition: opacity 0.2s ease, margin-top 0.4s ease-in-out;
`;

export const plusContent = styled(motion.div)`
  position: absolute;
  top: -4%;
  left: 50%;
  transform: translate(-50%, -0%);
  width: fit-content;
  height: auto;
  font-size: 1.6rem;
  padding: 10px 18px;
  background: var(--custom-frenchBlue-color);
  /* color: white; */
  border-radius: 25px;
  margin: 0 auto;
  box-shadow: -12px 10px 14px #ffffff73, 3px 3px 5px rgba(94, 104, 121, 0.288);
  font-weight: 500;
  letter-spacing: 1px;
  z-index: 997;
  &:focus,
  &:active {
    box-shadow: inset -12px 10px 14px #ffffff73,
      inset 3px 3px 5px rgba(94, 104, 121, 0.288);
  }
`;

export const PositionArea = styled(motion.div)`
  overscroll-behavior-y: none;
  background: var(--white-color-100);
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: -22px -34px 33px rgb(0, 0, 0, 0.4);
`;
