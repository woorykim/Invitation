import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import scrollbar from "smooth-scrollbar";
import { AnimatePresence, Variants } from "framer-motion";

import { StackedCardImages } from "../../assets/images/PostImages";
import * as main from "../styled/main";
import * as body from "../styled/body";
import * as blink from "../styled/blink";
import * as salutation from "../styled/salutation";
import * as horizontal from "../styled/horizontal";
import * as guide from "../styled/guide";
import { StackedCards } from "../StackedCards";
import { BlinkText } from "../BlinkText";
import { Calendar } from "../Calendar";
import { KakaoMap } from "../KakaoMap";
import { Navigation } from "../Navigation";
import { Countdown } from "../Countdown";
import { Heart } from "../Heart";
import { FlipCard } from "../FlipCard";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
// smooth scroll 설정
const element = document.querySelector("#smooth-scroll");
if (element instanceof HTMLElement) {
  scrollbar.init(element);
}

/** * Section Wrapping Animation */
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
/** * Section Animation  */
const sectionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
};

/** * Main animation */
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

/** * Main item animation  */
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
  const [size, setSize] = useState({ height: 0, width: 0 });
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const totalArticles = StackedCardImages.info.length + 1; // 전체 아티클 수
  const element = document.querySelector<HTMLElement>("#smooth-scroll");

  /** * 스와이프 */
  const slideVariants = {
    hidden: (direction: "next" | "prev") => ({
      x: direction === "next" ? size.width : -size.width,
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

  /** * Main 가로, 세로 값 체크 함수*/
  const handleResize = useCallback(() => {
    if (mainRef.current) {
      const { offsetHeight, offsetWidth } = mainRef.current;
      setSize({ height: offsetHeight, width: offsetWidth });
    }
  }, []);

  // Main 가로, 세로 업데이트
  useEffect(() => {
    if (element !== null) {
      scrollbar.init(element);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  /** * Next */
  const showNextSlide = useCallback(() => {
    setDirection("next");
    setVisibleIndex((prevIndex) =>
      prevIndex === totalArticles - 1 ? 0 : prevIndex + 1
    );
  }, [totalArticles]);

  /** * Prev */
  const showPrevSlide = useCallback(() => {
    setDirection("prev");
    setVisibleIndex((prevIndex) =>
      prevIndex === 0 ? totalArticles - 1 : prevIndex - 1
    );
  }, [totalArticles]);

  // prev | next 업데이트
  useEffect(() => {
    if (direction === "prev" && visibleIndex === 0) {
      setVisibleIndex(totalArticles - 1);
    } else if (direction === "next" && visibleIndex === totalArticles - 1) {
      setVisibleIndex(0);
    }
  }, [direction, totalArticles, visibleIndex]);

  const showCollapsed = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

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
              src={imagePath + "wedding_bg_02.webp"}
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
              initial={{ y: -100 }}
              animate={{ y: 10 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <p>The Adventure Begins </p>
              <main.PosterTitle>Together!</main.PosterTitle>
            </main.PosterTitleArea>

            <main.DrawingArea
              initial={{ x: -100, y: -100 }}
              animate={{ x: 10, y: 10 }}
              transition={{ duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <main.DrawingImageDesc>
                은사 & 우리 <br /> 달이 & 이트
              </main.DrawingImageDesc>
              <main.DrawingImage src={imagePath + "main_drawing.png"} alt="" />
            </main.DrawingArea>
          </main.StickerArea>
        </main.MainArea>
      </body.Section>

      <body.PositionArea
        style={{
          top: `calc(${size.height}px - 180px)`,
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

        {/* 사진들  */}
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

        {/* <body.Section {...sectionVariants}>
          <body.plusContent onClick={showCollapsed}>+ 인사말</body.plusContent>
          <FlipCard imagePath={imagePath} isCollapsed={isCollapsed} />
        </body.Section> */}
      </body.PositionArea>
    </body.Wrapper>
  );
};
