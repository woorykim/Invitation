import React, { useState } from "react";
import { PanInfo } from "framer-motion";

import * as card from "../styled/card";
import { images } from "../../assets/images/PostImages";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06; // 절대경로 설정

interface StackedCardsProps {
  src: string; // 이미지 경로를 가리키는 prop
}

export const StackedCards: React.FC<StackedCardsProps> = (props) => {
  const { src } = props;
  const imageKeys = Object.keys(images); // 이미지 객체의 키 배열을 변수에 저장
  const [cards, setCards] = useState(imageKeys); // 카드 배열
  const [swipedRight, setSwipedRight] = useState(false);

  // 맨 앞 카드를 맨 뒤로 이동하는 함수
  const moveToEnd = (from: number) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const movedCard = updatedCards.splice(from, 1);
      updatedCards.push(movedCard[0]);
      return updatedCards;
    });
  };

  // 카드 클릭 이벤트
  const handleClick = () => {
    setSwipedRight(true);
    setTimeout(() => {
      moveToEnd(0);
      setSwipedRight(false);
    }, 300); // 0.3초 후에 다시 회전을 원래대로 복귀
  };

  return (
    <card.wrapperStyle>
      <card.CardWrap>
        {cards.map((imageName, index) => (
          <card.CardItem
            key={imageName}
            style={{
              cursor: index === 0 ? "grab" : "auto",
              zIndex: imageKeys.length - index,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              rotate: index === 0 ? (swipedRight ? -45 : 0) : 0, // 맨 앞 카드만 회전
            }}
            drag={index === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ scale: 0.95 }}
            onTouchEnd={handleClick}
            onClick={handleClick}
          >
            <card.Image
              src={src + images[imageName].src} // 이미지 소스를 이미지 객체에서 가져옴
              alt={src + images[imageName].alt} // 이미지 대체 텍스트를 이미지 객체에서 가져옴
            />
          </card.CardItem>
        ))}
      </card.CardWrap>
    </card.wrapperStyle>
  );
};
