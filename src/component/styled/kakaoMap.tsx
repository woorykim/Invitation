import styled from "styled-components";
import { motion } from "framer-motion";

export const MapWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: grid;
  gap: 12px;
  position: relative;
  border-radius: 34px;
  margin: 0 auto;
  text-align: center;
`;

export const InformArea = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const InformContent = styled.p`
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  line-height: 1.2;
`;

export const MapArea = styled.div`
  width: 100%;
  height: 100%;
`;

// 말풍선
export const SpeechBubble = styled.div`
  top: -95px;
  left: -37px;
  position: absolute;
  padding: 10px;
  background: #4893f0;
  border-radius: 14px;
  color: white;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 12px;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.4);
`;

// 오시는 길

export const OnToWayArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 10px;
  justify-content: left;
  padding: 10px 0;
`;
export const ItemArea = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  gap: 10px;
  align-items: center;
  justify-content: left;
  padding: 10px;
  border: 1px dashed var(--custom-lavenderBlue-color);
  border-radius: 20px;
`;

export const Round = styled.div`
  width: 95px;
  padding: 8px 12px;
  border-radius: 25px;
  background-color: var(--custom-liteBlue-color);
  padding: 8px 12px;
  font-size: 1.3rem;
  font-weight: 600;
`;

// 오시는 길 컬러
export const Describe = styled.div`
  width: 100%;
  height: auto;

  & ul {
    display: grid;
    gap: 10px;
    font-size: 1.25rem;
    text-align: left;
  }

  /* 지하철 */
  & span.line_name_airport,
  & span.line_name_center {
    font-size: 1.125rem;
    border-radius: 14px;
    padding: 2px 6px;
    color: var(--white-color-100);
    font-weight: 500;
  }
  & span.line_name_center {
    background-color: #85d4d4;
  }
  & span.line_name_airport {
    background-color: #3da8e9;
  }

  & span.line_2,
  & span.line_6 {
    border-radius: 50%;
    padding: 1px 5px;
    color: var(--white-color-100);
  }
  & span.line_2 {
    background-color: #3cb44a;
  }
  & span.line_6 {
    background-color: #b45d15;
  }

  /* 버스 */
  & span.bus_blue,
  & span.bus_green {
    font-size: 1.125rem;
    border-radius: 14px;
    padding: 1px 8px;
    color: var(--white-color-100);
    font-weight: 500;
  }
  & span.bus_blue {
    background-color: #3cb44a;
  }
  & span.bus_green {
    background-color: #7182f5;
  }
`;
