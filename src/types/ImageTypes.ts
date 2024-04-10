/**
 * @title 이미지 타입 설정
 */
export interface ImageProps {
  [key: string]: {
    name: string;
    src: string;
    alt: string;
  };
}

export interface InfoProps {
  title: string;
  chip: string;
}

export interface ImagesProps {
  baby_images: ImageProps;
  adult_images: ImageProps;
  together_images: ImageProps;
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
