import React, { ReactNode, createContext, useEffect, useState } from "react";

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  scrollToElement: () => void;
}

/**
 * @title Modal Context 생성
 */
export const ModalContext = createContext<ModalContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  scrollToElement: () => {},
});

/**
 * @title Modal Provider children type
 */
interface ModalProviderProps {
  children: ReactNode;
}
/**
 * @title Modal Provider
 * @description Modal open시 body scroll hidden
 */
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollableElement, setScrollableElement] =
    useState<HTMLElement | null>(null);

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

  /** * Scroll */
  useEffect(() => {
    const element = document.getElementById("scrollable-element");
    setScrollableElement(element);
  }, []);

  const scrollToElement = () => {
    if (scrollableElement) {
      scrollableElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, scrollToElement }}
    >
      {children}
    </ModalContext.Provider>
  );
};
