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
    first: `소중한 순간을`,
    second: `함께해 주셔서 감사합니다.`,
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
        <br />
        {title.second.split("").map((char, index) => (
          <blink.BlinkingChar
            key={index}
            variants={textVariants(index)}
            custom={textVariants}
          >
            {char}
          </blink.BlinkingChar>
        ))}
      </blink.TitleArea>

      <p>이곳은 조금 더 감사함을 표현하는 곳</p>
    </blink.BlinkArea>
  );
};
