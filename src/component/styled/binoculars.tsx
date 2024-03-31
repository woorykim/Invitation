import styled, { keyframes } from "styled-components";

export const VideoArea = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 20px;
  background-color: black;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;

export const MovieTopBottom = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 20px 1px; */
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

// blur 애니메이션 효과
const blurAnimation = keyframes`
  0% {
    filter: blur(4px);
  }
  40% {
    filter: blur(2px);
  }
  100% {
    filter: blur(4px);
  }
`;
// width 변경 애니메이션 효과
const widthAnimation = keyframes`
  0% {
    width:calc(100% + 30%); /* 초기 너비 */
  }
  40% {
    width: 100%; 
  }
  100% {
    width:calc(100% + 130%); /* 최종 너비 */
  }
`;
// opacity 변경 애니메이션 효과
const opacityAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0; 
    
  }
`;

export const BinocularsArea = styled.div`
  width: calc(100% + 30%); /* 초기 너비 */
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(4px);

  animation: ${blurAnimation} 2s ease-in-out 0.8s forwards,
    ${widthAnimation} 1.6s ease-in-out 1s forwards,
    ${opacityAnimation} 1.8s ease-in-out 2s forwards;
`;

export const Video = styled.video`
  width: 100%;
`;
