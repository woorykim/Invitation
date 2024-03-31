import React, { useEffect, useRef, useState } from "react";
import * as modal from "../styled/modal";

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
      <modal.ModalContent onClick={(e) => e.stopPropagation()}>
        <modal.ModalTitle>
          <h2>AirDrop</h2>
          <p>
            <span>👰🏻🤵🏻</span>님이
            <br /> 사진을 공유하려고합니다.
          </p>
        </modal.ModalTitle>
        <modal.ButtonArea onClick={onClose}>
          <modal.ModalButton>수락</modal.ModalButton>
        </modal.ButtonArea>
      </modal.ModalContent>
    </modal.ModalOverlay>
  );
};
