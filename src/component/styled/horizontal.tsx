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
  /* padding: 40px 0; */
`;
