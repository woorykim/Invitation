import React, { useContext, useEffect, useRef, useState } from "react";

import { ModalContext } from "../../context/ModalContext";
import { Modal } from "../util/Modal";

import * as body from "../styled/body";
import * as salutation from "../styled/salutation";
import * as binoculars from "../styled/binoculars";
import * as horizontal from "../styled/horizontal";
import * as flipCard from "../styled/flipCard";
import { StackedCards } from "../util/StackedCards";
import { images } from "../../assets/images/PostImages";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

/**
  @title Body Components
*/
export const Body = () => {
  const { isModalOpen, closeModal, openModal } = useContext(ModalContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const sectionRefs = useRef<Array<HTMLElement | null>>(Array(4).fill(null));
  const articleRefs = useRef<Array<HTMLDivElement | null>>(Array(4).fill(null));

  const refs = useRef<{
    sections: Array<HTMLElement | null>;
    articles: Array<HTMLDivElement | null>;
  }>({
    sections: [null, null, null, null],
    articles: [null, null, null, null],
  });

  // Handle Events
  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // 상태 토글
  };

  // 브라우저 Viewport 설정한 요소의 교차점 관찰
  useEffect(() => {
    const sectionObservers: IntersectionObserver[] = [];
    const articleObservers: IntersectionObserver[] = [];

    // 모든 (섹션) observer 설정
    refs.current.sections.forEach((sectionRef, index) => {
      if (sectionRef) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const targetElement = entry.target as HTMLElement; // HTMLElement로 형변환

              // 세 번째 섹션이 viewport에 들어왔을 때 모달 열기
              if (
                entry.isIntersecting &&
                entry.target === sectionRefs.current[2]
              ) {
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
        observer.observe(sectionRef);
        sectionObservers.push(observer);
      }
    });

    // 모든 (아티클) observer 설정
    refs.current.articles.forEach((articleRef, index) => {
      if (articleRef) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const targetElement = entry.target as HTMLElement; // HTMLElement로 형변환

              // viewport에 들어온 섹션 style 처리
              if (entry.isIntersecting) {
              } else {
                // viewport에 벗어난 섹션 style 처리
              }
            });
          },
          // 섹션이 20% 이상 들어올 때 콜백 실행
          { threshold: 0.2 }
        );
        observer.observe(articleRef);
        sectionObservers.push(observer);
      }
    });

    const observeIntersection = (
      refs: Array<HTMLElement | null>,
      observers: IntersectionObserver[]
    ) => {
      refs.forEach((ref, index) => {
        if (ref) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const target = entry.target as HTMLElement; // HTMLElement로 형변환

                if (entry.isIntersecting) {
                  if (target === sectionRefs.current[2]) {
                    openModal();
                  }
                  target.style.opacity = "1";
                  target.style.marginTop = "0";
                } else {
                  target.style.opacity = "0";
                  target.style.marginTop = "20px"; //TODO: 버벅임 수정
                }
              });
            },
            { threshold: 0.2 } // 섹션이 20% 이상 들어올 때 콜백 실행
          );
          observer.observe(ref);
          observers.push(observer);
        }
      });
    };

    observeIntersection(sectionRefs.current, sectionObservers);
    observeIntersection(articleRefs.current, articleObservers);

    // 컴포넌트가 언마운트될 때 observer 해제
    return () => {
      sectionObservers.forEach((observer) => observer.disconnect());
      articleObservers.forEach((observer) => observer.disconnect());
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
        {/* <Modal isOpen={isModalOpen} onClose={closeModal}></Modal> */}

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
