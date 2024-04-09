import React, { useState } from "react";
import * as calendar from "./styled/calendar";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";
const videoPath = process.env.PUBLIC_URL + "/common/videos/";

export const Calendar = () => {
  return (
    <calendar.CalendarArea>
      <calendar.DayInnerArea>
        <calendar.PictureArea>
          <calendar.Neumorphism></calendar.Neumorphism>
          {/* <calendar.Picture
            style={{
              backgroundImage: `url(${imagePath + "card_wedding_01.png"})`,
            }}
          ></calendar.Picture> */}
        </calendar.PictureArea>
        <calendar.SecTitleWrap>
          <h2>
            <span>
              <span>H</span>
              <span>Y</span>
              <span>P</span>
              <span>P</span>
              <span>Y</span>&nbsp;
              <span>T</span>
              <span>H</span>
              <span>E</span>
              <span>E</span>
              <span>D</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>&nbsp;
              <span>D</span>
              <span>A</span>
              <span>Y</span>
              <span>💍</span>
            </span>
          </h2>
          <h1>5</h1>
        </calendar.SecTitleWrap>

        <calendar.ContentArea>
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
                <td>28</td>
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

          <calendar.PlaceArea>
            <span>서울 아만티호텔 * 아만티홀</span>
          </calendar.PlaceArea>
          <calendar.DayArea>
            <p>
              2024년 5월 25일 <br />
              토요일 오후 5시
            </p>
          </calendar.DayArea>
        </calendar.ContentArea>
      </calendar.DayInnerArea>
    </calendar.CalendarArea>
  );
};
