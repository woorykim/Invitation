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
  padding: 40px 0;
`;

export const FlipCardArea = styled.div`
  width: fit-content;
  max-width: 100%;
  min-width: 330px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  border-radius: 24px;
  perspective: 500px; /* 원근감 설정 */
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  & div {
    width: 100%;
    height: 100%;

    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

export const Front = styled.div`
  & div:last-child {
    position: absolute;
    background-size: calc(100% - 20%);
    background-position: 50% 85%;
    background-repeat: no-repeat;
    left: 0;
    bottom: 0;
  }
`;
export const Back = styled.div`
  /* 초기에는 뒷면이 보이도록 회전시킴 */
  transform: rotateY(180deg);

  & div:last-child {
    position: absolute;
    background-size: calc(100% - 20%);
    background-position: 50% 85%;
    background-repeat: no-repeat;
    left: 0;
    bottom: 0;
  }
`;

export const FlipCardTitleArea = styled.div``;

export const FlipCardImageArea = styled.div``;

export const Image = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
