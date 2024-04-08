import React from "react";
import { Variants } from "framer-motion";
import * as blink from "./styled/blink";

/** * Framer motion Variants */
const blinkVariants: Variants = {
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

const textVariants = (index: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: Math.random() * index * 0.1,
      duration: Math.random() * index * 0.2,
      repeat: Math.random() * index,
      repeatType: "reverse",
    },
  },
});

/**
  @title Blink Components
*/
export const BlinkText = () => {
  const title = {
    first: `소중한`,
    second: `분들을`,
    third: `초대합니다  `,
    fourth: `:)`,
  };

  return (
    <blink.BlinkArea
      variants={blinkVariants}
      initial="hidden"
      animate="visible"
    >
      <blink.TitleArea>
        {title.first.split("").map((char, index) => (
          <blink.BlinkingChar
            key={index}
            variants={textVariants(index)}
            custom={textVariants}
          >
            {char}
          </blink.BlinkingChar>
        ))}

        {/* 공백 */}
        <blink.Space />

        {title.second.split("").map((char, index) => (
          <blink.BlinkingChar
            key={index}
            variants={textVariants(index)}
            custom={textVariants}
          >
            {char}
          </blink.BlinkingChar>
        ))}

        {/* 공백 */}
        <blink.Space />

        {title.third.split("").map((char, index) => (
          <blink.BlinkingChar
            key={index}
            variants={textVariants(index)}
            custom={textVariants}
          >
            {char}
          </blink.BlinkingChar>
        ))}
      </blink.TitleArea>

      <blink.ContentArea>
        <blink.Content>사랑이 무엇인지</blink.Content>
        <blink.Content>누군가 물어왔을 때,</blink.Content>
        <blink.Content>망설임 없이</blink.Content>
        <blink.Content>서로를 떠올리던</blink.Content>
        <blink.Content>그 마음으로.</blink.Content>
        <blink.Content>따라사로운 봄날</blink.Content>
        <blink.Content>저희 둘, 결혼합니다</blink.Content>
      </blink.ContentArea>

      <blink.NameArea>
        <blink.Name>
          <span>이창건 · 옹영신</span>의 장남 <span>이은사</span>
        </blink.Name>
        <blink.Name>
          <span>김풍연 · 오영화</span>의 차녀 <span>김우리</span>
        </blink.Name>
      </blink.NameArea>
    </blink.BlinkArea>
  );
};
