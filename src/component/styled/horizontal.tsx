import styled, { keyframes } from "styled-components";

export const HorizontalArea = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: cornflowerblue;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--white-color-400);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const article = styled.div`
  width: 100%; /* 가로 스크롤을 가로 방향으로 만들기 위해 화면 너비와 같은 값으로 설정 */
  height: 100%;
  flex: 0 0 auto;
  scroll-snap-align: start;
  display: grid;
  gap: 15px;
  overflow: hidden;
  padding-bottom: 10px;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const TitleArea = styled.div`
  padding: 10px 0;
  display: grid;
  gap: 4px;
  text-align: center;

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
  }
  & h1 {
    font-size: 2.5rem;
  }
`;

export const ChipArea = styled.div`
  width: fit-content;
  height: auto;
  padding: 10px;
  background: tan;
  border-radius: 25px;
  margin: 0 auto;
`;

export const Chip = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.0081rem;
`;

export const ContentArea = styled.div`
  width: fit-content;
  margin: 0.75rem auto;
`;
export const Content = styled.p`
  font-size: 1.5rem;
`;
