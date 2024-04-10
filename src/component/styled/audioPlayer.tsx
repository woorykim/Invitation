import styled from "styled-components";
import { motion } from "framer-motion";

export const AudioPlayerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: fit-content;
  height: 100%;

  & img {
    width: 19px;
    height: auto;
  }
`;
