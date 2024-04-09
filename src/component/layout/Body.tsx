import React, { useEffect, useRef, useState } from "react";
import { Variants } from "framer-motion";

import * as main from "../styled/main";
import * as body from "../styled/body";
import * as salutation from "../styled/salutation";
import * as horizontal from "../styled/horizontal";
import * as binoculars from "../styled/binoculars";
import * as flipCard from "../styled/flipCard";
import { StackedCards } from "../StackedCards";
import { BlinkText } from "../BlinkText";
import { Calendar } from "../Calendar";
import { KakaoMap } from "../KakaoMap";
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

// 메인
const PosterAreaVariants: Variants = {
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

const ItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 1 },
  }),
};

/**
  @title Body Components
*/
export const Body = () => {
  const [currentArticle, setCurrentArticle] = useState(0);
  const mainRef = useRef(null);
  const [height, setHeight] = useState(0);
  const totalArticles = 3; // 전체 article 개수에 맞게 수정해주세요
  let touchStartX = 0;

  console.log(height);

  // Handle Events
  const handleSwipeStart = (event: React.TouchEvent | React.MouseEvent) => {
    if ("touches" in event) {
      // 터치의 시작점 좌표를 저장합니다.
      touchStartX = event.touches[0].clientX;
    } else {
      // 마우스의 시작점 좌표를 저장합니다.
      touchStartX = event.clientX;
    }
  };

  const handleSwipeEnd = (event: React.TouchEvent) => {
    // 터치의 끝점 좌표를 저장합니다.
    const touchEndX = event.changedTouches[0].clientX;

    // 스와이프 방향을 계산합니다.
    const deltaX = touchEndX - touchStartX;

    // 스와이프가 충분히 발생했을 때, 다음 article로 이동합니다.
    if (deltaX > 50) {
      // 예시로 50 픽셀 이상 스와이프할 때 다음 article로 이동하는 조건을 추가합니다.
      setCurrentArticle((prevArticle) =>
        Math.min(prevArticle + 1, totalArticles - 1)
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const { offsetHeight } = mainRef.current;
        setHeight(offsetHeight);
      }
    };

    // 초기 실행
    handleResize();

    // 창 크기 변경 시 실행
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mainRef]);

  return (
    <body.Wrapper variants={WrapperVariants} initial="hidden" animate="visible">
      {/* 메인  */}
      <body.Section ref={mainRef}>
        <main.MainArea
          variants={PosterAreaVariants}
          initial="hidden"
          animate="visible"
        >
          <main.PosterArea
            variants={ItemVariants}
            custom={0}
            initial="initial"
            animate="visible"
          >
            <main.PosterImage
              src={imagePath + "card_wedding_03.png"}
              alt="wedding_woory_eunsa"
            />
          </main.PosterArea>

          <main.StickerArea>
            <main.NameArea>
              <span>*</span> Moon & Ite
            </main.NameArea>
            <main.MaskingTapeImage
              src={imagePath + "main_maskingTape.png"}
              alt=""
            />

            <main.PosterTitleArea
              variants={ItemVariants}
              custom={1}
              initial="initial"
              animate="visible"
            >
              <p>Saturday May 25, 2024 </p>
              <main.PosterTitle>Memories of the Past</main.PosterTitle>
              <main.PosterTitle>
                귀한걸음 해주심에 <br /> 감사드립니다
              </main.PosterTitle>
            </main.PosterTitleArea>

            <main.DrawingArea
              variants={ItemVariants}
              custom={2}
              initial="initial"
              animate="visible"
            >
              <main.DrawingImage src={imagePath + "main_drawing.png"} alt="" />
              <main.DrawingImageDesc>
                우리 & 은사 <br /> 달이 & 이트
              </main.DrawingImageDesc>
            </main.DrawingArea>
          </main.StickerArea>
        </main.MainArea>
      </body.Section>

      <body.PositionArea
        style={{
          top: `calc(${height}px - 20px)`,
        }}
      >
        {/* 인사말  */}
        <body.Section>
          <salutation.SolutionArea>
            <salutation.Title>
              <p>INVITATION</p>
            </salutation.Title>
            <BlinkText />
          </salutation.SolutionArea>
        </body.Section>

        {/* 달력 */}
        <body.Section {...sectionVariants}>
          <Calendar></Calendar>
        </body.Section>

        {/* 가로 스크롤  */}
        <body.Section {...sectionVariants}>
          <horizontal.HorizontalArea
            onTouchStart={handleSwipeStart}
            onTouchEnd={handleSwipeEnd}
          >
            {/* 베이비 시절 */}
            <horizontal.article
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <horizontal.TitleWrapper>
                <horizontal.TitleArea>
                  <h4>ABOUT Life </h4>
                  <h1>Baby days</h1>
                </horizontal.TitleArea>
                <horizontal.ChipArea>
                  <horizontal.Chip>1994 & 1992</horizontal.Chip>
                </horizontal.ChipArea>
              </horizontal.TitleWrapper>

              <StackedCards src={imagePath} images={images.baby_images} />
            </horizontal.article>

            {/* 어덜트 시절 */}
            <horizontal.article
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <horizontal.TitleWrapper>
                <horizontal.TitleArea>
                  <h4>ABOUT Life </h4>
                  <h1>Adult days</h1>
                </horizontal.TitleArea>
                <horizontal.ChipArea>
                  <horizontal.Chip>2013 & 2015</horizontal.Chip>
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

        <body.Section {...sectionVariants}>
          <h1>test</h1>
          <KakaoMap></KakaoMap>
        </body.Section>
        {/* 비디오 */}
        {/* <body.Section {...sectionVariants}>
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
        </body.Section> */}
      </body.PositionArea>
    </body.Wrapper>
  );
};
