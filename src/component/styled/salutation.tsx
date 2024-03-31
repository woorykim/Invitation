import styled, { css } from "styled-components";

export const SolutionArea = styled.div`
  width: calc(100% - 40%);
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 160px;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;

  & p {
    font-size: 3.2rem;
    position: absolute;
    text-align: left;
  }

  & p:nth-child(3),
  p:nth-child(4) {
    font-size: 8.2rem !important;
  }
`;
export const Solution = styled.p`
  left: 0x;
  top: 0;
`;
export const Day = styled.p`
  left: -13rem;
  bottom: 14rem;
  transform: rotate(-90deg);
`;
export const Woory = styled.p`
  right: 4rem;
  bottom: 0;
`;
export const Eunsa = styled.p`
  right: -12rem;
  bottom: 12.6rem;
  transform: rotate(-90deg);
`;
