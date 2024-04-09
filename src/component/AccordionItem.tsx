import React, { useEffect, useRef, useState } from "react";
import * as accordion from "./styled/accordion";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";

/**
 *  AccordionItem Component Type
 */
interface AccordionItemProps {
  title: string;
  content: {
    [key: string]: { name: string; bank: string; accountNumber: string };
  };
}

/**
  @title AccordionItem components
*/
export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  // 클릭 이벤트 핸들러
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // 계좌번호 클릭하여 복사하는 함수
  const copyAccountNumber = (accountNumber: string) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        console.log("Account number copied to clipboard:", accountNumber);
        alert("클립보드에 복사되었습니다.");
        // 복사가 성공했을 때 원하는 동작을 추가할 수 있습니다.
      })
      .catch((error) => {
        console.error("Error copying account number to clipboard:", error);
      });
  };

  return (
    <accordion.AccordionItem>
      <accordion.AccordionTitle onClick={toggleAccordion}>
        <p>{title}</p>
        <accordion.ArrowImage src={imagePath + "arrow.svg"} $open={isOpen} />
      </accordion.AccordionTitle>
      <accordion.AccordionContent $open={isOpen}>
        {Object.keys(content).map((key) => (
          <accordion.LiArea key={key}>
            <accordion.AccountName>
              <p>예금주 :</p>
              <p>{content[key].name}</p>
            </accordion.AccountName>
            <accordion.AccountArea>
              <p>{content[key].bank} :</p>
              <p>{content[key].accountNumber}</p>
              <accordion.copyButton
                onClick={() => copyAccountNumber(content[key].accountNumber)}
              >
                복사하기
              </accordion.copyButton>
            </accordion.AccountArea>
          </accordion.LiArea>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};
