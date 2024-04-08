import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(1, 1fr);
  /* background-color: #F4C2C2; */
  background-color: var(--white-color-100);

  & > section {
    opacity: 1;
    overflow: hidden;
    position: fixed;
  }
`;

export const Section = styled(motion.section)`
  width: 100%;
  height: auto;
  opacity: 0;
  margin-top: 0px;
  padding-bottom: 16px;
  transition: opacity 0.2s ease, margin-top 0.4s ease-in-out;
  position: relative;
  background-color: var(--white-color-100);
`;

export const PositionArea = styled(motion.div)`
  background: var(--white-color-100);
  position: relative;
  width: 100%;
  height: 100%;
  top: 635px;
  box-shadow: -22px -34px 33px rgb(0, 0, 0, 0.4);
`;
