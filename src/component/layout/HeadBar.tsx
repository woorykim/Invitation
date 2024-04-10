import React, { useContext } from "react";

import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../Modal";
import * as header from "../styled/header";
import { Weather } from "../Weather";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";

/**
 *  HeadBar Component Type
 */
interface IHeadBarProps {
  scroll: number;
}

/**
  @title HeadBar Components
*/
export const HeadBar: React.FC<IHeadBarProps> = (props) => {
  const { scroll } = props;
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  const handleOpenModal = () => {
    openModal();
  };
  return (
    <header.HeaderWrapper>
      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>

      <header.WeatherArea
        $scroll={scroll}
        onClick={handleOpenModal}
        initial={{ x: -100, y: -100 }}
        animate={{ x: 10, y: 10 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Weather />
      </header.WeatherArea>

      <header.MapArea
        $scroll={scroll}
        onClick={handleOpenModal}
        initial={{ x: 100, y: -100 }}
        animate={{ x: -10, y: 10 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <header.Map src={imagePath + "header_placeMarker.svg"} />
      </header.MapArea>
    </header.HeaderWrapper>
  );
};
