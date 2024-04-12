import styled, { keyframes } from "styled-components";

export const CalendarArea = styled.div`
  width: 100%;
  min-width: 250px;
  height: 100%;
  padding: 0 25px 40px;
`;

export const CalendarTitle = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: grid;
  gap: 10px;
  margin-bottom: 26px;
`;

export const DayInnerArea = styled.div`
  width: 100%;
  min-width: 250px;
  height: auto;
  margin: 0 auto;
  border-radius: 43px;
  background: linear-gradient(145deg, #eeeeee, #ffffff);
  box-shadow: 22px 22px 31px #b3b3b3, -22px -22px 31px #ffffff;
  overflow: hidden;
`;

export const PictureArea = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px;
  border-radius: 14px;
  position: relative;
`;

export const Neumorphism = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dde1e7;
  box-shadow: inset -3px -3px 7px #ffffff73,
    inset 3px 3px 5px rgba(94, 104, 121, 0.288);
  border-radius: 30px;

  &::before {
    content: "";
    width: calc(100% - 15%);
    height: calc(100% - 15%);
    box-shadow: inset -3px -3px 7px #ffffff73,
      inset 3px 3px 5px rgba(94, 104, 121, 0.288);
    border-radius: 30px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background-image: url(/Invitation/common/images/card_wedding_01.webp);
    background-size: 110%;
    background-position: 50% 70%;
    background-repeat: no-repeat;
  }
`;

export const Picture = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 81px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SecTitleWrap = styled.div`
  display: grid;
  gap: 10px;
  & h1,
  & h2 {
    letter-spacing: 0.1rem;
    text-indent: 0.1rem;
    text-align: center;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  & h1 {
    font-size: 5rem;
    font-weight: 400;
  }
  & h2 {
    font-size: 24px;
    font-weight: 800;
    color: var(--custom-liteBlue-color);
  }
  & h4 {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--custom-liteBlue-color);
  }
`;

export const DayArea = styled.div`
  padding: 6px 50px;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  color: var(--white-color-900);
`;

export const PlaceArea = styled.div`
  position: relative;
  margin-top: 20px;
  cursor: pointer;
  & span {
    font-size: 1.625rem;
    color: var(--custom-liteBlue-color);
    font-weight: 700;
    padding-left: 25px;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      background: url("/Invitation/common/images/icon_location.png") no-repeat 0
        0 / 20px auto;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  & {
    font-size: 1.25rem;
    line-height: 1.38;
    text-align: center;
  }
  &::before {
    background-size: 12px;
    width: 12px;
    height: 14px;
  }
`;

export const ContentArea = styled.div`
  padding: 0 20px 15px;
  box-sizing: border-box;
  max-width: 380px;
  margin: 0 auto;
`;

export const MonthArea = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: grid;
  gap: 4px;
  font-weight: 700;

  & h1 {
    font-size: 3rem;
  }
  & p {
    color: var(--white-color-500);
  }
`;

export const TableArea = styled.table`
  width: 95%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
  & th {
    height: 53px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
  }

  & td {
    position: relative;
    font-size: 16px;
    height: 33px;
    line-height: 1.5;
    text-align: center;
    & span {
      font-weight: 500;
    }
    & span::before {
      content: "25";
      display: block;
      background-color: var(--custom-liteBlue-color);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      top: -5px;
      left: 6px;
      line-height: 1.95;
      text-align: center;
      align-items: center;
    }
  }
`;

// export const dayInnerArea = styled.div``;
// export const dayInnerArea = styled.div``;
// export const dayInnerArea = styled.div``;
