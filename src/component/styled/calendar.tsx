import styled, { keyframes } from "styled-components";

export const CalendarArea = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 0;
`;

export const DayInnerArea = styled.div`
  padding: 22px 0px;
  width: 80vmin;
  height: auto;
  margin: 0 auto;
  border-radius: 43px;
  background: linear-gradient(145deg, #eeeeee, #ffffff);
  box-shadow: 22px 22px 31px #b3b3b3, -22px -22px 31px #ffffff;
  overflow: hidden;
`;

export const SecTitleWrap = styled.div`
  display: grid;
  gap: 10px;

  & h1,
  & h2 {
    letter-spacing: 0.1em;
    text-indent: 0.1em;
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
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--custom-darkBeige-color);

    & span:not() {
      margin: 0 13px;
    }
  }
`;

export const DayArea = styled.div`
  padding: 6px 50px;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.25rem;
`;

export const PlaceArea = styled.div`
  position: relative;
  margin-top: 20px;
  & span {
    font-size: 1.5rem;
    color: var(--white-color-950);
    font-weight: 700;
    padding-left: 25px;
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 19px;
      background: url("/Invitation/common/images/icon_location.png") no-repeat 0
        0 / 16px auto;
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
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 380px;
  margin: 0 auto;
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
      background-color: var(--custom-darkBeige-color);
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
