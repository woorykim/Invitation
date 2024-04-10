import styled from "styled-components";
import { motion } from "framer-motion";

export const navigationArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 10px;
  padding: 16px 0;
  background-color: var(--custom-lavenderBlue-color);
  border-radius: 16px;
`;

export const navigationButton = styled(motion.button)`
  width: 100%;
  height: auto;
  display: grid;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  & img {
    width: 54px;
    height: auto;
    margin: 0 auto;
  }
`;
