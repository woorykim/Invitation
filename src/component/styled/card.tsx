import styled from "styled-components";
import { motion } from "framer-motion";

export const wrapperStyle = styled.div`
  margin: 20% 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrap = styled.div`
  position: relative;
  width: 80vmin;
  height: 100vmin;
  margin: 0 auto;
  text-align: center;
`;

export const CardItem = styled(motion.li)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform-origin: top center;
  list-style: none;
`;
