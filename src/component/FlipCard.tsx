import React, { useCallback, useState } from "react";
import * as flipCard from "./styled/flipCard";
import * as horizontal from "./styled/horizontal";

interface IFlipProps {
  imagePath: string;
  isCollapsed: boolean;
}

export const FlipCard: React.FC<IFlipProps> = (props) => {
  const { imagePath, isCollapsed } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  console.log(isCollapsed);

  /** * Toggle 함수 콜백 */
  const toggleFlip = useCallback(() => {
    setIsFlipped(!isFlipped); // 상태 토글
  }, [isFlipped]);

  return (
    <horizontal.article
      style={{
        height: isCollapsed ? "100vh" : 0,
        transition: "height 0.35s ease-in-out",
      }}
    >
      <horizontal.TitleWrapper>
        <horizontal.TitleArea>
          <h4>ABOUT Character </h4>
          <h1>{isFlipped ? "Lee EunSa" : "Kim Woory"}</h1>
        </horizontal.TitleArea>
      </horizontal.TitleWrapper>

      <flipCard.FlipCardArea onClick={toggleFlip}>
        <flipCard.FlipCardInner
          style={{
            backgroundImage: `url(${imagePath + "package_white.png"})`,
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <flipCard.Front>
            <flipCard.FlipCardImageArea
              src={imagePath + "eunsa.png"}
            ></flipCard.FlipCardImageArea>
          </flipCard.Front>
          <flipCard.Back>
            <flipCard.FlipCardImageArea
              src={imagePath + "eunsa.png"}
            ></flipCard.FlipCardImageArea>
          </flipCard.Back>
        </flipCard.FlipCardInner>
      </flipCard.FlipCardArea>

      <horizontal.ContentArea>
        <horizontal.Content>
          {isFlipped ? "자신감" : "아이디어뱅크"}
        </horizontal.Content>
      </horizontal.ContentArea>
    </horizontal.article>
  );
};
