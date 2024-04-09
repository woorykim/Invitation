import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import * as kakaoMap from "./styled/kakaoMap";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";

export const KakaoMap = () => {
  const position = {
    lat: 37.55715071108653,
    lng: 126.9186859271572,
  };

  return (
    <kakaoMap.MapWrapper>
      <kakaoMap.InformArea>
        <kakaoMap.InformContent>
          서울특별시 마포구 월드컵북로 31 <br />
          아민티 호텔 * 2F 아만티 홀
        </kakaoMap.InformContent>
      </kakaoMap.InformArea>
      <kakaoMap.MapArea>
        <Map
          //지도에 보여줄 위치 지정 (위도,경도)
          center={position}
          level={3}
          style={{
            width: "100%",
            height: "31.25rem",
            borderRadius: "1.25rem",
            backgroundColor: "#e0e0e0",
            boxShadow: ".1875rem .625rem 1.125rem rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* 핀 찍힐 위치 */}
          <MapMarker
            position={position}
            image={{
              src: imagePath + "marker_custom.png",
              size: {
                width: 64,
                height: 69,
              },
              options: {
                offset: {
                  x: 25,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          />

          <CustomOverlayMap position={position} yAnchor={1}>
            <kakaoMap.SpeechBubble>
              <a
                href="https://place.map.kakao.com/1719950135"
                target="_blank"
                rel="noreferrer"
              >
                <span className="title">아만티호텔</span>
              </a>
            </kakaoMap.SpeechBubble>
            ;
          </CustomOverlayMap>
        </Map>
      </kakaoMap.MapArea>

      <kakaoMap.OnToWayArea>
        <kakaoMap.ItemArea>
          <kakaoMap.Round> 지하철 이용시</kakaoMap.Round>
          <kakaoMap.Describe>
            <ul>
              <li>
                홍대입구역 <span className="line_2">2</span> &nbsp;
                <span className="line_name_center">경의중앙</span>&nbsp;
                <span className="line_name_airport">공항</span> 하차 | ①번 출구
                도보 8분
              </li>
              <li>
                망원역 <span className="line_6">6</span> 하차 | ①번 출구 도보 15
              </li>
              <li>
                합정역 <span className="line_6">6</span>&nbsp;
                <span className="line_2">2</span> 하차 | ②번 출구 도보 16분
              </li>
            </ul>
          </kakaoMap.Describe>
        </kakaoMap.ItemArea>
        <kakaoMap.ItemArea>
          <kakaoMap.Round> 버스 이용시</kakaoMap.Round>
          <kakaoMap.Describe>
            <ul>
              <li>
                <span className="bus_blue">간선</span> : N73(심야)
              </li>
              <li>
                <span className="bus_green">지선</span> : 7016 | 7711 | 7737
              </li>
              <li>
                <span className="bus_green">마을</span> : 마포09
              </li>
            </ul>
          </kakaoMap.Describe>
        </kakaoMap.ItemArea>

        <kakaoMap.ItemArea>
          <kakaoMap.Round> 주차 안내</kakaoMap.Round>
          <kakaoMap.Describe>
            <ul>
              <li>아만티호텔서울 주차장 이용 : 250여대 가능</li>
            </ul>
          </kakaoMap.Describe>
        </kakaoMap.ItemArea>
      </kakaoMap.OnToWayArea>
    </kakaoMap.MapWrapper>
  );
};
