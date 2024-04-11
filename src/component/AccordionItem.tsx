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
    [key: string]: {
      name: string;
      bank: string;
      accountNumber: string;
      pay?: string | null | undefined; // pay 속성이 string, null, undefined 중 하나일 수 있음을 명시
    };
  };
}

/**
  @title AccordionItem components
*/
export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const { title, content } = props;
  const [isOpen, setIsOpen] = useState(false);

  /** 클릭 이벤트 핸들러 */
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  /**
   * 계좌번호 클릭하여 복사
   * @param string accountNumber
   */
  const copyAccountNumber = (accountNumber: string) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert("클립보드에 복사되었습니다.");
        // 복사가 성공했을 때 원하는 동작을 추가할 수 있습니다.
      })
      .catch((error) => {
        console.error("Error copying account number to clipboard:", error);
      });
  };

  /**
   * 카카오페이 링크로 이동
   */

  const kakaoPayClick = (pay: string | null | undefined) => {
    if (pay === null || pay === undefined) return; // pay가 null 또는 undefined인 경우 함수를 종료
    window.open(pay); // 현재 창에서 해당 URL로 이동
  };

  return (
    <accordion.AccordionItem>
      <accordion.AccordionTitle onClick={toggleAccordion}>
        <p>{title}</p>
        <accordion.ArrowImage src={imagePath + "arrow.svg"} $open={isOpen} />
      </accordion.AccordionTitle>
      <accordion.AccordionContent $open={isOpen}>
        {Object.entries(content).map(([key, item]) => (
          <accordion.LiArea key={key}>
            <accordion.AccountNameArea>
              <accordion.AccountName>
                <p>예금주 :</p>
                <p>{item.name}</p>
              </accordion.AccountName>
              {item.pay && (
                <accordion.copyButton
                  className="kakaoPay"
                  onClick={() => kakaoPayClick(item.pay)}
                >
                  Pay 송금하기
                </accordion.copyButton>
              )}
            </accordion.AccountNameArea>
            <accordion.AccountBankArea>
              <accordion.AccountBank>
                <p>{item.bank} :</p>
                <p>{item.accountNumber}</p>
              </accordion.AccountBank>
              <accordion.copyButton
                onClick={() => copyAccountNumber(item.accountNumber)}
              >
                복사
              </accordion.copyButton>
            </accordion.AccountBankArea>
          </accordion.LiArea>
        ))}
      </accordion.AccordionContent>
    </accordion.AccordionItem>
  );
};
