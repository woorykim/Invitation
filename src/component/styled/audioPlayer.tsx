import styled from "styled-components";
import { motion } from "framer-motion";

export const AudioPlayerWrapper = styled(motion.div)`
  padding: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 0;
  & img {
    width: 20px;
    height: auto;
  }
`;
