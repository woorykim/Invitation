import styled from "styled-components";
import { motion } from "framer-motion";

export const SolutionArea = styled(motion.div)`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  /* overflow: hidden; */
  text-align: center;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -12vmin;
    left: 0;
    background-image: url("/Invitation/common/images/scroll_bg.png");
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    width: -webkit-fill-available;
    height: 100%;
  }
`;

export const Title = styled.div`
  padding: 10px 0;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1875rem;
  color: var(--custom-darkBeige-color);
`;

export const Img = styled.img`
  width: 80vmin;
  height: auto;
  border-radius: 160px;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transition: 0.6s;
  & p {
    font-size: 2rem;
    position: absolute;
    text-align: left;
    line-height: 2.4rem;
  }

  @media screen and (min-width: 480px) {
    & p {
      font-size: 2.6rem;
      line-height: 3rem;
    }

    & p:nth-child(3),
    p:nth-child(4) {
      font-size: 2.4rem !important;
    }
  }

  @media screen and (min-width: 768px) {
    & p {
      font-size: 3.2rem;
    }

    & p:nth-child(3),
    p:nth-child(4) {
      font-size: 2.8rem !important;
    }
  }
`;

export const Day = styled.p`
  transform: rotate(-90deg);
  left: -8rem;
  bottom: 10rem;

  @media screen and (min-width: 480px) {
    left: -10rem;
    bottom: 12rem;
  }
  @media screen and (min-width: 768px) {
    left: -13rem;
    bottom: 14rem;
  }
`;

export const Woory = styled.p`
  right: 3.2rem;
  bottom: 0;
  @media screen and (min-width: 480px) {
    right: 3.8rem;
  }
  @media screen and (min-width: 768px) {
    right: 4rem;
    bottom: 0;
  }
`;

export const Eunsa = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
  right: -9rem;
  bottom: 9rem;

  @media screen and (min-width: 480px) {
    bottom: 9.6rem;
  }
  @media screen and (min-width: 768px) {
    right: -12rem;
    bottom: 11.6rem;
  }

  & span {
    display: inline-block;
    padding-top: 13px;
    padding-right: 6px;
    font-weight: 700;
    font-size: 45px;
  }
`;
