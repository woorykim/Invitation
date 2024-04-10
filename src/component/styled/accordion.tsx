import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const AccordionItem = styled(motion.div)`
  width: 100%;
  height: auto;
`;

export const AccordionTitle = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 800;
  border: 1px solid var(--custom-liteBlue-color);
  border-radius: 8px 8px 0 0;
  cursor: pointer;

  &:nth-child(1) {
    color: var(--custom-blue-color);
    background-color: var(--custom-aliceblue-color);
  }
  &:nth-child(2) {
    color: var(--main-color);
    background-color: var(--custom-frenchRose-color);
  }
  &:nth-child(3) {
  }
`;

export const ArrowImage = styled(motion.img)<{ $open: boolean }>`
  width: 18px;
  height: auto;
  transform: ${(props) => (props.$open ? "rotate(180deg)" : 0)};
  transition: transform 0.3s;
`;

export const AccordionContent = styled(motion.div)<{ $open: boolean }>`
  width: 100%;
  height: ${(props) => (props.$open ? "auto" : 0)};
  visibility: ${(props) => (props.$open ? "visible" : "hidden")};
  transition: height 0.35s ease, visibility 0.1s ease-in-out;
  border: 1px solid var(--white-color-500);
  border-radius: 0 0 8px 8px;
  display: grid;
  gap: 10px;
`;

export const LiArea = styled(motion.div)`
  display: grid;
  gap: 10px;
  align-items: center;
  text-align: left;
  padding: 10px;
  border-bottom: 1px dashed var(--white-color-500);
  width: 100%;
  height: auto;
  &:last-child {
    border-bottom: none;
  }
`;
export const AccountNameArea = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountName = styled(motion.div)`
  display: flex;
  gap: 3px;
  justify-content: left;
  align-items: center;
  font-size: 1.125rem;
  & p:nth-child(1) {
    font-weight: 800;
  }
`;

export const AccountBankArea = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountBank = styled(motion.div)`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  & p:nth-child(1) {
    font-weight: 800;
  }
`;

export const copyButton = styled(motion.button)`
  border: none;
  border-radius: 14px;
  background-color: var(--custom-blue-color);
  color: var(--white-color-100);
  font-size: 1.125rem;
  font-weight: 800;
  padding: 4px 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  &.kakaoPay {
    background-color: #ffeb00;
    color: var(--white-color-950);
  }
`;
