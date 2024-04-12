import styled from "styled-components";
import { motion } from "framer-motion";

export const article = styled(motion.div)`
  width: 100%; /* 가로 스크롤을 가로 방향으로 만들기 위해 화면 너비와 같은 값으로 설정 */
  height: 100%;
  flex: 0 0 auto;
  padding: 20px 0;
  scroll-snap-align: start;
  display: grid;
  gap: 15px;
  overflow: hidden;
  padding-bottom: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 0;
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    background: var(--custom-frenchRose-color);
    opacity: 0.45;
    filter: blur(35px);
    border-radius: 50%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 15%;
    left: 12%;
    z-index: 0;
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    background: var(--custom-liteBlue-color);
    opacity: 0.45;
    filter: blur(38px);
    border-radius: 50%;
  }

  & > button:nth-child(1) {
    left: 0;
    transform: rotate(90deg);
  }
  & > button:nth-child(2) {
    right: 0;
    transform: rotate(-90deg);
  }
`;

export const Button = styled(motion.button)`
  position: absolute;
  top: 60%;
  z-index: 997;
  transform: translate(-50%, -60%);
  cursor: pointer;
  padding: 10px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  background-image: url("/Invitation/common/images/arrow.svg");
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const ChipArea = styled.div`
  width: fit-content;
  height: auto;
  padding: 10px;
  background: var(--white-color-200);
  border-radius: 25px;
  margin: 0 auto;
  box-shadow: inset -12px 10px 14px #ffffff73,
    inset 3px 3px 5px rgba(94, 104, 121, 0.288);
`;

export const Chip = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.0081rem;
`;

export const TitleArea = styled.div`
  padding: 10px 0;
  display: grid;
  gap: 4px;
  text-align: center;
  position: relative;

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 900;
  }

  & h4 {
    font-size: 1.125rem;
    color: var(--white-color-950);
  }
  & h1 {
    font-size: 2.5rem;
  }
`;

export const wrapperStyle = styled(motion.div)`
  margin: 8.5% 0;
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

export const CardWrap = styled(motion.div)`
  position: relative;
  width: 80vmin;
  height: 110vmin;
  margin: 10px auto;
  text-align: center;
`;

export const CardItem = styled(motion.li)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 34px;
  transform-origin: top center;
  list-style: none;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
  padding: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
`;
