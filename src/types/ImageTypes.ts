/**
 * @title 이미지 타입 설정
 */
export interface ImageProps {
  [key: string]: {
    [key: string]: {
      name: string;
      src: string;
      alt: string;
    };
  };
}

/**
 * @title 계좌번호 타입 설정
 */

interface BankInfo {
  name: string;
  bank: string;
  accountNumber: string;
}
export interface AccountNumberProps {
  woory: {
    bride: BankInfo;
    bride_mother: BankInfo;
    bride_father: BankInfo;
  };
  eunsa: {
    bridegroom: BankInfo;
    bridegroom_mother: BankInfo;
    bridegroom_father: BankInfo;
  };
}
