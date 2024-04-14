import React from "react";

import * as heart from "./styled/heart";
import { AccordionItem } from "./AccordionItem";
import { AccountNumber } from "../assets/images/AccountNumber";
/**
  @title 계좌번호 components
*/
export const Heart = () => {
  return (
    <heart.HeartArea>
      <h1>🌸 마음 전해주실 곳 🌸</h1>
      <heart.HeartBorder>
        <AccordionItem
          title="👰🏻 신부측 계좌번호"
          content={AccountNumber.woory}
        />
        <AccordionItem
          title="🤵🏻신랑측 계좌번호"
          content={AccountNumber.eunsa}
        />
      </heart.HeartBorder>
    </heart.HeartArea>
  );
};
