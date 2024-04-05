import styled from "styled-components";
import { motion } from "framer-motion";

export const wrapperStyle = styled.div`
  margin: 5.5% 0;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // Tablet
  }
  @media screen and (min-width: 1024px) {
    // PC
  }
`;

export const CardWrap = styled.div`
  position: relative;
  width: 70vmin;
  height: 90vmin;
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
  background-color: transparent;
  overflow: hidden;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
