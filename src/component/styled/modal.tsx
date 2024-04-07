import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경 */
  z-index: 1000; /* 다른 요소 위에 나타나도록 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal 애니메이션 효과
const modalAnimation = keyframes`
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-4px);
  }
`;

export const ModalContent = styled(motion.div)`
  background-color: var(--white-color-100);
  border-radius: 8px;
  max-width: 100%;
  width: calc(100% - 40%);
  min-width: 230px;
  margin: 0 auto;
  text-align: center;
  animation: ${modalAnimation} 0.4s cubic-bezier(0, 0, 0.18, 0.99) infinite
    alternate;
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  gap: 10px;
  padding: 20px 0;
  & h2 {
    font-size: 2.25rem;
  }
  & p {
    font-size: 1.75rem;
    & span {
      color: coral;
      font-weight: 600;
    }
  }
`;
export const ButtonArea = styled.div`
  border-top: 1px solid var(--white-color-400);
  padding: 1.4rem 0;
  transition: background-color 0.3s, color 0.3s;
  &:active,
  &:focus {
    background-color: var(--custom-blue-color);
  }
  &:active button,
  &:focus button {
    color: var(--white-color-100);
  }
`;

export const ModalButton = styled.button`
  border: none;
  font-weight: 700;
  font-size: 1.625rem;
  color: var(--custom-blue-color);
  background-color: transparent;
`;
