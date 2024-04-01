import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Modal } from "../util/Modal";

import * as salutation from "../styled/salutation";
import * as binoculars from "../styled/binoculars";
import * as horizontal from "../styled/horizontal";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

/** * images type */
interface ImageProps {
  [key: string]: {
    name: string;
    src: string;
    alt: string;
    position: { top?: number; left?: number; right?: number; bottom?: number };
    size: {
      width?: number;
      height?: number;
    };
  };
}

interface IPositionProps {
  size: {
    width?: number;
    height?: number;
  };
  position: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 36px 0;
  padding: 1.6rem;
  grid-template-columns: repeat(1, 1fr);
`;

const Section = styled.section`
  width: 100%;
  height: auto;
  opacity: 0;
  margin-top: 40px;
  transition: opacity 0.5s ease, margin-top 0.4s ease;
`;

// section 02
const ImagesArea = styled.div<{ width: number }>`
  // Mobile
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: var(--white-color-100);
  box-shadow: 5px 5px 24px rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // Tablet
  }
  @media screen and (min-width: 1024px) {
    // PC
  }
`;

const Image = styled.img<IPositionProps>`
  width: ${({ size }) => `${size.width}%` ?? "auto"};
  max-width: 100%;
  height: auto;
  position: absolute;
  top: ${({ position }) => position.top ?? 0}%;
  left: ${({ position }) => position.left ?? 0}px;
`;

const images: ImageProps = {
  image1: {
    name: "Car",
    src: "car.png",
    alt: "post Car",
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 20,
    },
  },
  image2: {
    name: "People",
    src: "people.png",
    alt: "post People",
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 10,
    },
  },
  image3: {
    name: "Supermarket",
    src: "supermarket.png",
    alt: "post Supermarket",
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 10,
    },
  },
  image4: {
    name: "Tree",
    src: "tree.png",
    alt: "post Tree",
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 10,
    },
  },
};

/**
  @title Body Components
*/
export const Body = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false); // 회전 상태
  const sectionRefs = useRef<Array<HTMLElement | null>>([
    null,
    null,
    null,
    null,
  ]); // 4개의 섹션을 참조하기 위한 배열

  // Event handlers
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // 상태 토글
  };

  // 좌우 여백 10px씩 제외한 값으로 설정
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 20);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 브라우저 Viewport 설정한 요소의 교차점을 관찰
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetElement = entry.target as HTMLElement; // HTMLElement로 형변환

          // 세 번째 섹션이 viewport에 들어왔을 때 모달 열기
          if (entry.isIntersecting && entry.target === sectionRefs.current[2]) {
            openModal();
          }

          // viewport에 들어온 섹션 style 처리
          if (entry.isIntersecting) {
            targetElement.style.opacity = "1";
            targetElement.style.marginTop = "0px";
          } else {
            // viewport에 벗어난 섹션 style 처리
            targetElement.style.opacity = "0";
            targetElement.style.marginTop = "40px";
          }
        });
      },
      // 섹션이 30% 이상 들어올 때 콜백 실행
      { threshold: 0.3 }
    );

    // 모든 섹션에 대해 observer 설정
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer && observer.observe(ref);
      }
    });

    return () => {
      // 컴포넌트가 언마운트될 때 observer 해제
      observer && observer.disconnect();
    };
  }, []);

  return (
    <Wrapper>
      {/* 포스터  */}
      <Section ref={(ref) => (sectionRefs.current[0] = ref)}>
        <salutation.SolutionArea>
          <salutation.Img src={imagePath + "together.png"} alt="우리와 은사" />

          {/* 텍스트 */}
          <salutation.Content>
            <salutation.Solution>
              우리의 특별한 날에 <br />
              함께 해주셔서 감사합니다
            </salutation.Solution>

            <salutation.Day>
              Saturday May 25, 2024 <br />
              5:00<span>PM</span>
            </salutation.Day>

            <salutation.Woory>WOORY</salutation.Woory>
            <salutation.Eunsa>
              EUNSA <small>with (Moon * Ite)</small>
            </salutation.Eunsa>
          </salutation.Content>
        </salutation.SolutionArea>
      </Section>

      {/* 비디오 */}
      <Section ref={(ref) => (sectionRefs.current[1] = ref)}>
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
      </Section>

      {/* 가로 스크롤  */}
      <Section ref={(ref) => (sectionRefs.current[2] = ref)}>
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={closeModal}></Modal>

        <horizontal.HorizontalArea>
          {/* 에어드롭 & 인물소개 */}
          <horizontal.article>
            <horizontal.FlipCardArea onClick={toggleFlip}>
              <horizontal.FlipCardInner
                style={{
                  backgroundImage: `url(${imagePath + "package.png"})`,
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <horizontal.Front>
                  <horizontal.FlipCardTitleArea>
                    <h4>ABOUT ME</h4>
                    <h1>Lee EunSa</h1>
                  </horizontal.FlipCardTitleArea>

                  <horizontal.FlipCardImageArea
                    src={imagePath + "eunsa.png"}
                  ></horizontal.FlipCardImageArea>
                </horizontal.Front>
                <horizontal.Back>
                  <horizontal.FlipCardTitleArea>
                    <h4>ABOUT ME</h4>
                    <h1>Kim Woory</h1>
                  </horizontal.FlipCardTitleArea>

                  <horizontal.FlipCardImageArea
                    src={imagePath + "eunsa.png"}
                  ></horizontal.FlipCardImageArea>
                </horizontal.Back>
              </horizontal.FlipCardInner>
            </horizontal.FlipCardArea>
          </horizontal.article>

          {/* 단체 사진*/}
          <horizontal.article>
            <h2>Section 02</h2>
          </horizontal.article>
          <horizontal.article>
            <h2>Section 03</h2>
          </horizontal.article>
        </horizontal.HorizontalArea>
      </Section>

      {/* (임시)이미지들 */}
      <Section ref={(ref) => (sectionRefs.current[3] = ref)}>
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
      </Section>
    </Wrapper>
  );
};
