import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const GuideArea = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 40px 25px;
  margin: 0 auto;
  position: relative;
  /* overflow: hidden; */
  text-align: center;

  &::before {
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
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  padding: 10px 0;
  letter-spacing: 0.1875rem;
  color: var(--custom-liteBlue-color);
  margin-top: 30px;
`;

export const ContentArea = styled.div`
  width: 100%;
  min-width: 250px;
  height: 100%;
  padding: 25px 0;
`;
