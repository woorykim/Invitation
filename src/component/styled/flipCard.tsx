import styled, { keyframes } from "styled-components";

export const FlipCardArea = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 24px;
  perspective: 500px; /* 원근감 설정 */
`;

// Card 애니메이션 효과
const flipAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`;

export const FlipCardInner = styled.div`
  width: 75vmin;
  height: 100vmin;
  margin: 0 auto;
  border-radius: 24px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* 부모 요소를 기준으로 자식 요소를 배치하기 위해 필요 */
  position: relative;
  animation: ${flipAnimation} 1s ease-in-out 0.3s;

  & > div:first-child,
  & > div:nth-child(2) {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    width: 45vmin;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 35%;
    left: 25%;
  }
`;

export const Front = styled.div``;

export const Back = styled.div`
  transform: rotateY(180deg);
`;

export const FlipCardImageArea = styled.img`
  width: -webkit-fill-available;
  height: auto;
`;
