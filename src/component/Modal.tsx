import React from "react";
import * as modal from "./styled/modal";

/** * images type */
interface ModalProps {
  isOpen: boolean; // 모달이 열려 있는지 여부
  onClose: () => void; // 모달 닫기 함수
}

/**
  @title Modal Components
*/
export const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <modal.ModalOverlay onClick={onClose}>
      {isOpen ? (
        <modal.ModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <modal.ModalTitle>
            <h2>웨딩 홀 위치</h2>
            <p>
              <span>👰🏻🤵🏻</span>
            </p>
          </modal.ModalTitle>
          <modal.ButtonArea onClick={onClose}>
            <modal.ModalButton>닫기</modal.ModalButton>
          </modal.ButtonArea>
        </modal.ModalContent>
      ) : null}
    </modal.ModalOverlay>
  );
};
