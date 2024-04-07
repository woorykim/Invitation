import React, { useState } from "react";
import { Variants } from "framer-motion";

import * as body from "../styled/body";
import * as salutation from "../styled/salutation";
import * as binoculars from "../styled/binoculars";
import * as horizontal from "../styled/horizontal";
import * as flipCard from "../styled/flipCard";
import { StackedCards } from "../StackedCards";
import { BlinkText } from "../BlinkText";
import { images } from "../../assets/images/PostImages";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

/** * Framer motion Variants */
const WrapperVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
};

/**
  @title Body Components
*/
export const Body = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle Events
  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // 상태 토글
  };

  return (
    <body.Wrapper variants={WrapperVariants} initial="hidden" animate="visible">
      {/* 인사말  */}
      <body.Section {...sectionVariants}>
        <salutation.SolutionArea>
          <BlinkText />
        </salutation.SolutionArea>
      </body.Section>

      {/* 포스터  */}
      <body.Section {...sectionVariants}>
        <salutation.SolutionArea>
          <salutation.Img src={imagePath + "together.png"} alt="우리와 은사" />

          {/* 텍스트 */}
          <salutation.Content>
            <salutation.Solution>
              저희의 특별한 날에 <br />
              함께 해주셔서 감사합니다
            </salutation.Solution>

            <salutation.Day>
              Saturday May 25, 2024 <br />
              5:00<span>PM</span>
            </salutation.Day>

            <salutation.Woory>WOORY</salutation.Woory>

            <salutation.Eunsa>
              <span>*</span> EUNSA <small> with. 달이와 이트</small>
            </salutation.Eunsa>
          </salutation.Content>
        </salutation.SolutionArea>
      </body.Section>

      {/* 가로 스크롤  */}
      <body.Section {...sectionVariants}>
        <horizontal.HorizontalArea>
          {/* 에어드롭 & 인물소개 (우리 은사) */}
          <horizontal.article>
            <horizontal.TitleWrapper>
              <horizontal.TitleArea>
                <h4>ABOUT Character </h4>
                <h1>{isFlipped ? "Lee EunSa" : "Kim Woory"}</h1>
              </horizontal.TitleArea>
              <horizontal.ChipArea>
                <horizontal.Chip>Package</horizontal.Chip>
              </horizontal.ChipArea>
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

          {/* 베이비 시절 */}
          <horizontal.article>
            <horizontal.TitleWrapper>
              <horizontal.TitleArea>
                <h4>ABOUT Life </h4>
                <h1>Baby days</h1>
              </horizontal.TitleArea>
              <horizontal.ChipArea>
                <horizontal.Chip>베이비 시절</horizontal.Chip>
              </horizontal.ChipArea>
            </horizontal.TitleWrapper>

            <StackedCards src={imagePath} images={images.baby_images} />
          </horizontal.article>

          {/* 어덜트 시절 */}
          <horizontal.article>
            <horizontal.TitleWrapper>
              <horizontal.TitleArea>
                <h4>ABOUT Life </h4>
                <h1>Adult days</h1>
              </horizontal.TitleArea>
              <horizontal.ChipArea>
                <horizontal.Chip>어른 시절</horizontal.Chip>
              </horizontal.ChipArea>
            </horizontal.TitleWrapper>

            <StackedCards src={imagePath} images={images.adult_images} />
          </horizontal.article>

          {/* 함께  */}
          <horizontal.article>
            <horizontal.TitleWrapper>
              <horizontal.TitleArea>
                <h4>ABOUT Life </h4>
                <h1>Together days</h1>
              </horizontal.TitleArea>
              <horizontal.ChipArea>
                <horizontal.Chip>함께한 날들</horizontal.Chip>
              </horizontal.ChipArea>
            </horizontal.TitleWrapper>

            <StackedCards src={imagePath} images={images.together_images} />
          </horizontal.article>
        </horizontal.HorizontalArea>
      </body.Section>

      {/* (임시)이미지들 */}
      <body.Section {...sectionVariants}>
        <h1>section04</h1>
        {/* <ImagesArea
          width={width}
          style={{
            backgroundImage: `url(${imagePath + "background.png"})`,
          }}
        >
          {Object.values(images).map((imageData, index) => (
            <Image
              key={index}
              src={imagePath + imageData.src}
              alt={imageData.alt}
              position={imageData.position}
              size={imageData.size}
            />
          ))}
        </ImagesArea> */}
      </body.Section>

      {/* 비디오 */}
      <body.Section {...sectionVariants}>
        <binoculars.VideoArea>
          <binoculars.MovieTopBottom>
            <binoculars.BinocularsArea
              style={{
                backgroundImage: `url(${imagePath + "binoculars.png"})`,
              }}
            />
            <binoculars.Video muted autoPlay loop>
              <source src={videoPath + "sound.mp4"} type="video/mp4" />
            </binoculars.Video>
          </binoculars.MovieTopBottom>
        </binoculars.VideoArea>
      </body.Section>
    </body.Wrapper>
  );
};
