import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, Variants } from "framer-motion";
import { animate } from "popmotion";

import * as main from "../styled/main";
import * as body from "../styled/body";
import * as salutation from "../styled/salutation";
import * as horizontal from "../styled/horizontal";
import * as guide from "../styled/guide";
import * as binoculars from "../styled/binoculars";
import * as flipCard from "../styled/flipCard";
import { StackedCards } from "../StackedCards";
import { BlinkText } from "../BlinkText";
import { Calendar } from "../Calendar";
import { images } from "../../assets/images/PostImages";
import { KakaoMap } from "../KakaoMap";
import { Countdown } from "../Countdown";
import { Heart } from "../Heart";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

/** * Framer motion Variants */

// 섹션
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

// 스와이프
const SwipeVariants: Variants = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

/**
  @title Body Components
*/
export const Body = () => {
  const mainRef = useRef(null);
  const articleRef = useRef(null);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);
  const [height, setHeight] = useState(0);
  const targetDate = new Date("2024-05-25T17:00:00");

  // const nextPlease = () => {
  //   setBack(false);
  //   setVisible((prev) =>
  //     prev === images.length - 1 ? images.length - 1 : prev + 1
  //   );
  // };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
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
          <Countdown targetDate={targetDate} />
          <Calendar />
        </body.Section>

        {/* 가로 스크롤  */}
        <body.Section {...sectionVariants}>
          <horizontal.HorizontalArea>
            <AnimatePresence>
              {/* 베이비 시절 */}
              <horizontal.article
                ref={articleRef}
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
                ref={articleRef}
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
            </AnimatePresence>
          </horizontal.HorizontalArea>
        </body.Section>

        {/* 오시는 길 */}
        <body.Section {...sectionVariants}>
          <guide.GuideArea>
            <guide.Title>
              <p>오시는길 🚶🏻‍♀️</p>
            </guide.Title>
            <guide.ContentArea>
              <KakaoMap />
            </guide.ContentArea>
          </guide.GuideArea>
        </body.Section>

        {/* 입금 */}
        <body.Section {...sectionVariants}>
          <Heart />
        </body.Section>
      </body.PositionArea>
    </body.Wrapper>
  );
};
