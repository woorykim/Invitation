import React, { useEffect, useRef, useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import * as kakaoMap from "./styled/kakaoMap";

declare const kakao: any; // kakao 객체의 타입을 선언합니다.

export const KakaoMap = () => {
  const [location, setLoacation] = useState(null);
  const [level, setLevel] = useState(3);

  return (
    <kakaoMap.MapWrapper>
      <Map
        //지도에 보여줄 위치 지정 (위도,경도)
        center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        level={3}
        style={{ width: "800px", height: "600px" }}
      >
        {/* 핀 찍힐 위치 */}
        <MapMarker
          position={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker>
        </MapMarker>
        <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
          <div className="overlay">Here!</div>
        </CustomOverlayMap>
        <button onClick={() => setLevel(level + 1)}>-</button>
        <button onClick={() => setLevel(level - 1)}>+</button>
      </Map>
    </kakaoMap.MapWrapper>
  );
};
