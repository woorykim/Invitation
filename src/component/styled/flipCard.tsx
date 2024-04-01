import styled, { keyframes } from "styled-components";

export const FlipCardArea = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 24px;
  perspective: 500px; /* 원근감 설정 */
`;

export const FlipCardTitleArea = styled.div`
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
  width: 100%;
  min-width: 284px;
  max-width: 100%;
  height: 480px;
  margin: 0 auto;
  border-radius: 24px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  /* 부모 요소를 기준으로 자식 요소를 배치하기 위해 필요 */
  position: relative;
  animation: ${flipAnimation} 1s ease-in-out 0.3s;

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

export const FlipCardImageArea = styled.img`
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: -webkit-fill-available;
  max-width: 190px;
  min-width: inherit;
  max-height: 100%;
`;

export const ContentsArea = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
