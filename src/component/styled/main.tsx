import styled from "styled-components";
import { motion } from "framer-motion";

export const MainArea = styled(motion.div)`
  width: 100%;
  height: auto;
  position: relative;
  /* padding: 14vmin 16vmin 22vmin 16vmin; */
  /* padding: 15vmin 10vmin 22vmin 10vmin; */
  padding: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/Invitation/common/images/main_background.jpeg");
    background-size: cover;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -o-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
    opacity: 0.8;
  }
`;

export const PosterArea = styled(motion.div)`
  width: 100%;
  /* height: 100vmin; */
  height: 166vmin;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
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
  margin-top: -25px;
`;

export const NameArea = styled(motion.p)`
  line-height: 120%;
  color: var(--white-color-100);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50%;
  left: 17%;
  transform: translate(-17%, -16%);
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
  width: 26vmin;
  height: auto;
  position: absolute;
  top: 6%;
  right: 2%;
  transform: translate(-2%, -6%) !important;
  opacity: 0.9;
`;

export const PosterTitleArea = styled(motion.div)`
  width: 100%;
  height: auto;
  display: grid;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 16%;
  text-align: center;
  transform: translate(-50%, -50%) !important;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  & p {
    line-height: 120%;
    color: var(--white-color-100);
    font-weight: 700;
    text-shadow: 1px 1px 3px var(--white-color-700);
    width: 100%;
  }
  & p:nth-child(1) {
    font-size: 23px;
    margin-bottom: -9px;
  }
  & p:nth-child(2) {
    font-size: 24px;
  }
  & p:nth-child(3) {
    font-size: 14px !important;
    line-height: 150% !important;
    font-weight: 500;
    text-shadow: none;
  }
`;

export const PosterTitle = styled(motion.p)`
  width: fit-content;
  height: auto;
  font-size: 1.25rem;
  letter-spacing: 2px;
`;

export const DrawingArea = styled(motion.div)`
  width: 25vmin;
  height: auto;
  position: absolute;
  right: 7%;
  bottom: 17%;
  transform: translate(-7%, -18%) !important;
`;

export const DrawingImageDesc = styled(motion.p)`
  width: 100%;
  height: auto;
  text-align: right;
  font-size: 13px;
  letter-spacing: 0.14rem;
  color: var(--white-color-100);
  font-weight: 600;
  position: relative;
  z-index: 2;
  &::after {
    content: "";
    margin: 4px auto;
    display: block;
    background-color: var(--white-color-100);
    width: 1px;
    height: 20px;
    margin-bottom: -7px;
  }
`;
export const DrawingImage = styled(motion.img)`
  width: 100%;
  height: auto;
  transform: rotate(20deg);
  z-index: 1;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;
