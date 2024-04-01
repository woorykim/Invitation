import styled from "styled-components";

export const HorizontalArea = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

export const article = styled.div`
  width: 100%; /* 가로 스크롤을 가로 방향으로 만들기 위해 화면 너비와 같은 값으로 설정 */
  height: 100vh;
  flex: 0 0 auto;
  scroll-snap-align: start;
  /* padding: 40px 0; */
`;

export const FlipCardArea = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 24px;
  perspective: 500px; /* 원근감 설정 */
`;

export const FlipCardInner = styled.div`
  width: 100%;
  min-width: 287px;
  max-width: 356px;
  height: calc(100% - 28%);
  margin: 0 auto;
  border-radius: 24px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative; /* 부모 요소를 기준으로 자식 요소를 배치하기 위해 필요 */
  & > div:first-child,
  & > div:nth-child(2) {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Front = styled.div``;

export const Back = styled.div`
  transform: rotateY(180deg);
`;

export const FlipCardTitleArea = styled.div`
  padding: 50px 0;
  display: grid;
  gap: 4px;

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

export const FlipCardImageArea = styled.img`
  position: absolute;
  bottom: 36.7%;
  left: 50%;
  transform: translate(-50%, 50%);
  max-width: 230px;
  max-height: 100%;
  width: -webkit-fill-available;
`;
