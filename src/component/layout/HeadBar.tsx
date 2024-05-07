import React, { useContext } from "react";

import * as header from "../styled/header";
import { Weather } from "../Weather";
import { AudioPlayer } from "../AudioPlayer";
import { ModalContext } from "../../context/ModalContext";

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
  const { scrollToElement } = useContext(ModalContext);

  const handleClick = () => {
    // 버튼 클릭시 scrollToElement 함수 호출
    scrollToElement();
  };

  return (
    <header.HeaderWrapper>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}></Modal> */}

      <header.WeatherArea
        $scroll={scroll}
        initial={{ x: -100, y: -100 }}
        animate={{ x: 10, y: 10 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Weather />
      </header.WeatherArea>

      <header.RightArea>
        <header.AudioArea
          $scroll={scroll}
          initial={{ x: -100, y: -100 }}
          animate={{ x: 10, y: 10 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AudioPlayer></AudioPlayer>
        </header.AudioArea>

        <header.MapArea
          $scroll={scroll}
          onClick={handleClick}
          initial={{ x: 100, y: -100 }}
          animate={{ x: -10, y: 10 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <header.Map src={imagePath + "header_placeMarker.png"} />
        </header.MapArea>
      </header.RightArea>
    </header.HeaderWrapper>
  );
};
