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
