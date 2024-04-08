import styled from "styled-components";
import { motion } from "framer-motion";

export const BlinkArea = styled(motion.div)`
  width: 100%;
  height: auto;
  display: grid;
  gap: 9px;
`;

export const TitleArea = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 4px 0;
`;

export const WhiteSpace = styled(motion.div)`
  width: 100%;
  height: 8px;
`;

export const Space = styled(motion.div)`
  width: 10px;
  height: auto;
  display: inline-block;
`;

export const BlinkingChar = styled(motion.p)`
  font-size: 24px;
  display: inline-block;
  white-space: pre-line;
  color: var(--white-color-950);
`;

export const ContentArea = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 16px 0;
`;
export const Content = styled(motion.p)`
  font-weight: 400;
  font-size: 17px;
  line-height: 1.8;
  color: var(--white-color-900);
`;

export const NameArea = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 24px 0;
  display: grid;
  gap: 12px;
  position: relative;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    position: absolute;
    left: 0;
    background-image: url("/Invitation/common/images/text_line.png");
    background-size: auto 4px;
    background-position: 50% 0;
    background-repeat: no-repeat;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;

export const Name = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--white-color-950);

  & span {
    font-weight: 600;
    color: var(--custom-darkBeige-color);
    margin-right: 4px;
  }
  & span:nth-child(2) {
    font-size: 1.75rem;
    font-weight: 700;
  }
`;
