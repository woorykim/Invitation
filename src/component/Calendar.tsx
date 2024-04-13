import React from "react";
import * as calendar from "./styled/calendar";

export const Calendar = () => {
  /**
   * 주소 클릭하여 복사
   * @param string 주소
   */
  const onCopy = () => {
    navigator.clipboard
      .writeText("서울특별시 마포구 월드컵북로 31")
      .then(() => {
        alert("클립보드에 복사되었습니다.");
        // 복사가 성공했을 때 원하는 동작을 추가할 수 있습니다.
      })
      .catch((error) => {
        console.error("Error copying account number to clipboard:", error);
      });
  };

  return (
    <calendar.CalendarArea>
      <calendar.CalendarTitle>
        <calendar.SecTitleWrap>
          <h2>
            <span>
              <span>H</span>
              <span>Y</span>
              <span>P</span>
              <span>P</span>
              <span>Y</span>&nbsp;
              <span>W</span>
              <span>E</span>
              <span>D</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>&nbsp;
              <span>D</span>
              <span>A</span>
              <span>Y</span>
            </span>
          </h2>
        </calendar.SecTitleWrap>
        <calendar.SecTitleWrap>
          <h4>
            <span>
              <span>L</span>
              <span>e</span>
              <span>e</span>
              <span>E</span>
              <span>u</span>
              <span>n</span>
              <span>s</span>
              <span>a</span>&nbsp;
              <span>💗</span>&nbsp;
              <span>K</span>
              <span>i</span>
              <span>m</span>
              <span>W</span>
              <span>o</span>
              <span>o</span>
              <span>r</span>
              <span>y</span>
            </span>
          </h4>
        </calendar.SecTitleWrap>
      </calendar.CalendarTitle>
      <calendar.DayInnerArea>
        <calendar.PictureArea>
          <calendar.Neumorphism></calendar.Neumorphism>
          {/* <calendar.Picture
            style={{
              backgroundImage: `url(${imagePath + "card_wedding_01.png"})`,
            }}
          ></calendar.Picture> */}
        </calendar.PictureArea>

        <calendar.ContentArea>
          <calendar.MonthArea>
            <h1>5</h1>
            <p>May</p>
          </calendar.MonthArea>
          <calendar.TableArea>
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
              </tr>
              <tr>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td></td>
              </tr>
            </tbody>
          </calendar.TableArea>

          <calendar.PlaceArea onClick={onCopy}>
            <span>서울 아만티호텔 * 아만티홀</span>
          </calendar.PlaceArea>
          <calendar.DayArea>
            <p>
              2024년 5월 25일 (토)
              <br />
              오후 5시
            </p>
          </calendar.DayArea>
        </calendar.ContentArea>
      </calendar.DayInnerArea>
    </calendar.CalendarArea>
  );
};
