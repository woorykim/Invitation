import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../util/Modal";

import * as body from "../styled/body";
import * as salutation from "../styled/salutation";
import * as binoculars from "../styled/binoculars";
import * as horizontal from "../styled/horizontal";
import * as flipCard from "../styled/flipCard";

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
  const { isModalOpen, closeModal, openModal } = useContext(ModalContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRefs = useRef<Array<HTMLElement | null>>([
    null,
    null,
    null,
    null,
  ]);

  // Event
  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // 상태 토글
  };

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
            targetElement.style.marginTop = "20px";
          }
        });
      },
      // 섹션이 20% 이상 들어올 때 콜백 실행
      { threshold: 0.2 }
    );

    // 모든 섹션에 대해 observer 설정
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // 컴포넌트가 언마운트될 때 observer 해제
      observer.disconnect();
    };
  }, []);

  return (
    <body.Wrapper>
      {/* 포스터  */}
      <body.Section ref={(ref) => (sectionRefs.current[0] = ref)}>
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
      <body.Section ref={(ref) => (sectionRefs.current[1] = ref)}>
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>

        <horizontal.HorizontalArea>
          {/* 에어드롭 & 인물소개 (우리 은사) */}
          <horizontal.article>
            <flipCard.FlipCardArea onClick={toggleFlip}>
              <flipCard.FlipCardTitleArea>
                <h4>ABOUT Character </h4>
                <h1>{isFlipped ? "Lee EunSa" : "Kim Woory"}</h1>
              </flipCard.FlipCardTitleArea>
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
              <flipCard.ContentsArea>
                <h1>{isFlipped ? "자신감" : "아이디어뱅크"}</h1>
              </flipCard.ContentsArea>
            </flipCard.FlipCardArea>
          </horizontal.article>

          {/* 단체 사진*/}
          <horizontal.article>
            <h1>Baby Days </h1>

            <div>
              {/* 1 */}
              <div>
                <img src={imagePath + "people.png"} alt="" />
              </div>
              {/* 2 */}
            </div>
          </horizontal.article>
        </horizontal.HorizontalArea>
      </body.Section>

      {/* 비디오 */}
      <body.Section ref={(ref) => (sectionRefs.current[2] = ref)}>
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

      {/* (임시)이미지들 */}
      <body.Section ref={(ref) => (sectionRefs.current[3] = ref)}>
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
    </body.Wrapper>
  );
};
