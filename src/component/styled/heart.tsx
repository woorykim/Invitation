import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const HeartArea = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 40px 10px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  display: grid;
  gap: 40px;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/Invitation/common/images/text_line.png");
    background-size: auto 4px;
    background-position: 50% 0;
    background-repeat: no-repeat;
  }
`;
export const HeartBorder = styled(motion.div)`
  width: calc(100% - 10%);
  height: auto;
  margin: 0 auto;
  background: #8eb0e54d;
  box-shadow: inset 0px 4px 9px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  padding: 30px;
  display: grid;
  gap: 20px;
  border: 4px dotted var(--custom-liteBlue-color);
`;
