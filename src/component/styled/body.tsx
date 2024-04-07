import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 30px 1.6rem;
  grid-template-columns: repeat(1, 1fr);
  /* background-color: #F4C2C2; */
  background-color: var(--white-color-100);
`;

export const Section = styled(motion.section)`
  width: 100%;
  height: auto;
  opacity: 0;
  margin-top: 0px;
  margin-bottom: 16px;
  transition: opacity 0.2s ease, margin-top 0.4s ease-in-out;

  overflow: hidden;

  &:nth-child(2) {
    background-color: var(--white-color-100);
    border-radius: 14px;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
    padding: 10px 4px;
  }
`;
