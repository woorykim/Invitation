import styled from "styled-components";

export const SolutionArea = styled.div`
  /* width: calc(100% - 40%); */
  width: 100%;
  max-width: 100%;
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

export const Solution = styled.p`
  left: 1rem;
  top: 0;
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
