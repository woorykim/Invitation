import React, { useState } from "react";

import * as card from "./styled/card";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06; // 절대경로 설정

/**
 *  StackedCards Component Type
 */
interface StackedCardsProps {
  title: string;
  chip: string;
  src: string; // 이미지 경로를 가리키는 prop
  images: { [key: string]: { src: string; alt: string } }; // 이미지 객체의 타입 정의
}

export const StackedCards: React.FC<StackedCardsProps> = (props) => {
  const { title, chip, src, images } = props;
  const imageKeys = Object.keys(images); // 이미지 객체의 키 배열을 변수에 저장
  const [cards, setCards] = useState(imageKeys); // 카드 배열
  const [clickRight, setClickRight] = useState(false);

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
    setClickRight(true);
    setTimeout(() => {
      moveToEnd(0);
      setClickRight(false);
    }, 300); // 0.3초 후에 다시 회전을 원래대로 복귀
  };

  return (
    <card.article>
      <card.TitleWrapper>
        <card.TitleArea>
          <h4>ABOUT Life</h4>
          <h1>{title}</h1>
        </card.TitleArea>
        <card.ChipArea>
          <card.Chip>{chip}</card.Chip>
        </card.ChipArea>
      </card.TitleWrapper>

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
                rotate: index === 0 ? (clickRight ? -45 : 0) : 0, // 맨 앞 카드만 회전
              }}
              onClick={handleClick}
            >
              <card.Image
                src={src + images[imageName].src} // 이미지 소스를 이미지 객체에서 가져옴
                alt={images[imageName].alt} // 이미지 대체 텍스트를 이미지 객체에서 가져옴
              />
            </card.CardItem>
          ))}
        </card.CardWrap>
      </card.wrapperStyle>
    </card.article>
  );
};
