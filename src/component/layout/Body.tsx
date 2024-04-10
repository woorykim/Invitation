import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  Variants,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { StackedCardImages } from "../../assets/images/PostImages";
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
import { KakaoMap } from "../KakaoMap";
import { Countdown } from "../Countdown";
import { Heart } from "../Heart";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

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

/**
  @title Body Components
*/
export const Body = () => {
  const targetDate = new Date("2024-05-25T17:00:00");
  const mainRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [xValue, setXValue] = useState(0);
  const totalArticles = StackedCardImages.info.length; // 전체 아티클 수
  const x = useMotionValue(xValue);

  const showNextSlide = () => {
    setDirection("next");
    setVisibleIndex((prevIndex) =>
      prevIndex === totalArticles - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevSlide = () => {
    setDirection("prev");
    setVisibleIndex((prevIndex) =>
      prevIndex === 0 ? totalArticles - 1 : prevIndex - 1
    );
  };

  // 스와이프
  const slideVariants = {
    hidden: (direction: "next" | "prev") => ({
      x: direction === "next" ? width : -width,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -width : width,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  useEffect(() => {
    const handleResize = () => {
      if (mainRef.current) {
        const { offsetHeight, offsetWidth } = mainRef.current;
        setHeight(offsetHeight);
        setWidth(offsetWidth);
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 창 크기 변경 시 실행

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    x.onChange(() => {
      console.log(x.get());
    });
  }, [x]);

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
          top: `calc(${height}px - 140px)`,
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
          <horizontal.ButtonArea>
            <button
              type="button"
              className="prev"
              onClick={showPrevSlide}
              disabled={visibleIndex === 0}
            ></button>
            <button
              type="button"
              className="next"
              onClick={showNextSlide}
              disabled={visibleIndex === totalArticles - 1}
            ></button>
          </horizontal.ButtonArea>
          <horizontal.HorizontalArea ref={mainRef}>
            <AnimatePresence custom={direction}>
              {StackedCardImages.info.map((info, index) =>
                index === visibleIndex ? (
                  <horizontal.article
                    key={index}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={direction}
                    transition={{ bounceStiffness: 300, bounceDamping: 50 }}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
                    dragConstraints={{
                      left: -window.innerWidth,
                      right: window.innerWidth,
                    }}
                    dragElastic={false}
                    onDrag={(event, info) => {
                      setXValue(info.point.x);
                      x.set(info.offset.x);
                    }}
                    onDragEnd={(event, info) => {
                      if (
                        info.offset.x < 0 &&
                        Math.abs(info.offset.x) >= window.innerWidth / 4
                      ) {
                        showNextSlide();
                      } else if (
                        info.offset.x > 0 &&
                        info.offset.x >= window.innerWidth / 4
                      ) {
                        showPrevSlide();
                      }
                      setXValue(info.point.x);
                      x.set(info.point.x);
                    }}
                  >
                    <StackedCards
                      title={info.title}
                      chip={info.chip}
                      src={process.env.PUBLIC_URL + "/common/images/"}
                      images={Object.values(StackedCardImages.images)[index]} // 이미지 배열 사용
                    />
                  </horizontal.article>
                ) : null
              )}
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
