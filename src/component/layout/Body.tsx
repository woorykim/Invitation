import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import * as salutation from "../styled/salutation";

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
`;

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
  const imagePath = process.env.PUBLIC_URL + "/common/images/";
  const videoPath = process.env.PUBLIC_URL + "/common/videos/";

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 20); // 좌우 여백 10px씩 제외한 값으로 설정
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper>
      <Section>
        <h1>section01</h1>
        <video muted autoPlay loop>
          <source src={videoPath + "sound.mp4"} type="video/mp4" />
        </video>
      </Section>

      <Section>
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
      <Section>
        <h1>section03</h1>
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
