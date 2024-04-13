import React, { useEffect, useRef, useState } from "react";
import scrollbar from "smooth-scrollbar";
import { AnimatePresence, Variants, useMotionValue } from "framer-motion";

import { StackedCardImages } from "../../assets/images/PostImages";
import * as main from "../styled/main";
import * as body from "../styled/body";
import * as blink from "../styled/blink";
import * as salutation from "../styled/salutation";
import * as horizontal from "../styled/horizontal";
import * as guide from "../styled/guide";
import * as binoculars from "../styled/binoculars";
import * as flipCard from "../styled/flipCard";
import { StackedCards } from "../StackedCards";
import { BlinkText } from "../BlinkText";
import { Calendar } from "../Calendar";
import { KakaoMap } from "../KakaoMap";
import { Navigation } from "../Navigation";
import { Countdown } from "../Countdown";
import { Heart } from "../Heart";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
// smooth scroll 설정
const element = document.querySelector("#smooth-scroll");
if (element instanceof HTMLElement) {
  scrollbar.init(element);
}

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
  const targetDate = new Date("2024-05-25 17:00:00");
  const mainRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [xValue, setXValue] = useState(0);
  const totalArticles = StackedCardImages.info.length; // 전체 아티클 수
  const x = useMotionValue(xValue);

  // 이미지 다음
  const showNextSlide = () => {
    setDirection("next");
    setVisibleIndex((prevIndex) =>
      prevIndex === totalArticles - 1 ? 0 : prevIndex + 1
    );
  };

  // 이미지 이전
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
      scale: 0.8,
      transition: { duration: 0.3 },
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
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

  return (
    <body.Wrapper
      id="smooth-scroll"
      variants={WrapperVariants}
      initial="hidden"
      animate="visible"
    >
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
              src={imagePath + "card_wedding_03.webp"}
              alt="wedding_woory_eunsa"
            />
          </main.PosterArea>

          <main.StickerArea>
            <main.NameArea>{/* <span>*</span> Moon & Ite */}</main.NameArea>
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
              <p>The Adventure Begins </p>

              <main.PosterTitle>Together !</main.PosterTitle>
            </main.PosterTitleArea>

            <main.DrawingArea
              variants={ItemVariants}
              custom={2}
              initial="initial"
              animate="visible"
            >
              <main.DrawingImageDesc>
                우리 & 은사 <br /> 달이 & 이트
              </main.DrawingImageDesc>
              <main.DrawingImage src={imagePath + "main_drawing.png"} alt="" />
            </main.DrawingArea>
          </main.StickerArea>
        </main.MainArea>
      </body.Section>

      <body.PositionArea
        style={{
          top: `calc(${height}px - 180px)`,
        }}
      >
        {/* 인사말  */}
        <body.Section>
          <salutation.SolutionArea>
            <blink.Content style={{ fontSize: "25px" }}>👰🏻🤍🤵🏻‍♂️</blink.Content>
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
          <horizontal.Button
            type="button"
            className="prev"
            onClick={showPrevSlide}
            disabled={visibleIndex === 0}
          ></horizontal.Button>
          <horizontal.Button
            type="button"
            className="next"
            onClick={showNextSlide}
            disabled={visibleIndex === totalArticles - 1}
          ></horizontal.Button>

          <horizontal.HorizontalArea ref={mainRef}>
            <horizontal.ClickBubble />
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
        <body.Section {...sectionVariants} id="scrollable-element">
          <guide.GuideArea>
            <guide.Title>
              <p>오시는길 🚶🏻‍♀️</p>
            </guide.Title>
            <guide.ContentArea>
              <KakaoMap />
              <Navigation />
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
