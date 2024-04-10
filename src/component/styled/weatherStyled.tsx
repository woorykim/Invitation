import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const WeatherWrapper = styled(motion.div)`
  width: 100%;
  height: auto;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  img {
    width: 34px;
    height: auto;
  }
`;
