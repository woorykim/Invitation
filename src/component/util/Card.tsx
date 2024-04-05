import React, { useState } from "react";
import { PanInfo } from "framer-motion";

import * as card from "../styled/card";

const CARD_COLORS = ["#266678", "#cb7c7a", "#36a18b", "#cda35f", "#747474"];
const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;

export const StackedCards = () => {
  const [cards, setCards] = useState(CARD_COLORS);
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
        {cards.map((color, index) => (
          <card.CardItem
            key={color}
            style={{
              backgroundColor: color,
              cursor: index === 0 ? "grab" : "auto",
              zIndex: CARD_COLORS.length - index,
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
          />
        ))}
      </card.CardWrap>
    </card.wrapperStyle>
  );
};
