import React, { ReactNode, createContext, useEffect, useState } from "react";

/**
 * @title Modal Provider children type
 */
interface ModalContextProps {
  children: ReactNode;
}

/**
 * @title Modal Context 생성
 */
export const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

/**
 * @title Modal Provider
 * @description Modal open시 body scroll hidden
 */
export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** * 모달 Open */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /** * 모달 Close */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달 상태에따른 스크롤처리
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpen]);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
