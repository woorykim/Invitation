import React, { ReactNode, createContext, useState } from "react";

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

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflowY = "auto";
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
