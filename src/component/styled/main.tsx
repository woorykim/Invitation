import styled from "styled-components";
import { motion } from "framer-motion";

export const MainArea = styled(motion.div)`
  width: 100%;
  height: auto;
  position: relative;
  padding: 14vmin 16vmin 22vmin 16vmin;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/Invitation/common/images/main_background_02.svg");
    background-size: cover;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
`;

export const PosterArea = styled(motion.div)`
  width: 100%;
  height: 100vmin;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  overflow: hidden;
  border-radius: 10px;
  margin: 0px auto;
  -webkit-backdrop-filter: blur(0);
  -moz-backdrop-filter: blur(0);
  -o-backdrop-filter: blur(0);
  -ms-backdrop-filter: blur(0);
  backdrop-filter: blur(0);
  position: relative;
`;

export const PosterImage = styled(motion.img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const NameArea = styled(motion.p)`
  line-height: 120%;
  color: var(--white-color-100);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 18%;
  left: 20%;
  font-size: 1.6rem;

  & span {
    display: inline-block;
    padding-top: 13px;
    padding-right: 6px;
    font-weight: 700;
    font-size: 45px;
  }

  @media screen and (min-width: 480px) {
    bottom: 12.6rem;
  }
  @media screen and (min-width: 768px) {
    right: -12rem;
    bottom: 11.6rem;
  }
`;

export const StickerArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MaskingTapeImage = styled(motion.img)`
  width: 25vmin;
  height: auto;
  position: absolute;
  top: 3%;
  right: 10%;
`;

export const PosterTitleArea = styled(motion.div)`
  width: fit-content;
  height: auto;
  display: grid;
  gap: 10px;
  position: absolute;
  left: 7%;
  top: 10%;

  & p {
    line-height: 120%;
    color: var(--white-color-100);
    font-weight: 700;
  }
  & p:nth-child(1) {
    font-size: 10px;
    margin-bottom: -9px;
  }
  & p:nth-child(2) {
    font-size: 20px;
  }
  & p:nth-child(3) {
    font-size: 14px !important;
    line-height: 150% !important;
    font-weight: 500;
  }
`;

export const PosterTitle = styled(motion.p)`
  width: fit-content;
  height: auto;
  font-size: 1.25rem;
  letter-spacing: 2px;
`;

export const DrawingArea = styled(motion.div)`
  width: 30vmin;
  height: auto;
  position: absolute;
  right: 44px;
  bottom: 46px;
`;

export const DrawingImage = styled(motion.img)`
  width: 100%;
  height: auto;
  transform: rotate(20deg);
  z-index: 1;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;

export const DrawingImageDesc = styled(motion.p)`
  width: 100%;
  height: auto;
  margin-top: -10px;
  text-align: center;
  font-size: 10px;
  color: var(--white-color-100);
  font-weight: 600;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    margin: 4px auto;
    display: block;
    background-color: var(--white-color-100);
    width: 1px;
    height: 20px;
  }
`;
