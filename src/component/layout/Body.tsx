import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

/** * images type */
interface ImageProps {
  [key: string]: {
    name: string;
    src: string;
    alt: string;
    position: { top?: number; left?: number; right?: number; bottom?: number };
  };
}

interface IPositionProps {
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
  padding: 1rem;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
`;

const ImagesArea = styled.div<{ width: number }>`
  width: ${({ width }) => `calc(${width}px - 50%)`};
  height: ${({ width }) => `calc(${width}px - 50%)`};
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Image = styled.img<IPositionProps>`
  width: calc(100% - 70%);
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  top: ${({ position }) => position.top ?? 0}px;
  left: ${({ position }) => position.left ?? 0}px;
`;

const images: ImageProps = {
  image1: {
    name: "Background",
    src: "background.png",
    alt: "post Background",
    position: {
      top: 0,
      left: 0,
    },
  },
  image2: {
    name: "Car",
    src: "car.png",
    alt: "post Car",
    position: {
      top: 0,
      left: 0,
    },
  },
  image3: {
    name: "People",
    src: "people.png",
    alt: "post People",
    position: {
      top: 0,
      left: 0,
    },
  },
  image4: {
    name: "Supermarket",
    src: "supermarket.png",
    alt: "post Supermarket",
    position: {
      top: 0,
      left: 0,
    },
  },
  image5: {
    name: "Tree",
    src: "tree.png",
    alt: "post Tree",
    position: {
      top: 0,
      left: 0,
    },
  },
};

export const Body = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const imagePath = process.env.PUBLIC_URL + "/common/images/";

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
        <ImagesArea width={width}>
          {Object.values(images).map((imageData, index) => (
            <Image
              key={index}
              src={imagePath + imageData.src}
              alt={imageData.alt}
              position={imageData.position}
            />
          ))}
        </ImagesArea>
      </Section>
      <Section>Section 02</Section>
      <Section>Section 03</Section>
    </Wrapper>
  );
};
