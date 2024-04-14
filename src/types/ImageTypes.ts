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
  adult_images_01: ImageProps;
  adult_images_02: ImageProps;
  cats_images: ImageProps;
  together_images_01: ImageProps;
  together_images_02: ImageProps;
  wedding_images_01: ImageProps;
  wedding_images_02: ImageProps;
}

/**
 * @title 계좌번호 타입 설정
 */
interface BankInfo {
  name: string;
  bank: string;
  accountNumber: string;
  pay?: string | null;
}
export interface AccountNumberProps {
  woory: {
    bride: BankInfo & { pay: string | null };
    bride_mother: BankInfo & { pay: string | null };
    bride_father: BankInfo & { pay: string | null };
  };
  eunsa: {
    bridegroom: BankInfo & { pay: string | null };
    bridegroom_mother: BankInfo & { pay: string | null };
    bridegroom_father: BankInfo & { pay: string | null };
  };
}
/**
 * @title 날씨 타입 설정
 */
export interface WeatherDescKoItem {
  [key: number]: string;
}
