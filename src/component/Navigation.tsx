import React, { useEffect } from "react";
import { isIOS, isAndroid, isBrowser, isTablet } from "react-device-detect";
import * as navigation from "./styled/navigation";

// 절대경로 설정
const imagePath = process.env.PUBLIC_URL + "/common/images/";

/**
 *  Navigation Component Type
 */
declare global {
  interface Window {
    Kakao: any;
    Tmapv2: any;
  }
}

/**
  @title Navigation Components
*/
export const Navigation = () => {
  const position = {
    /**  경도 */
    lng: 126.9186859271572,
    /**  위도 */
    lat: 37.55715071108653,
  };

  /** * 카카오맵 호출 */
  const openKakaoNavi = async () => {
    if (window.Kakao) {
      window.location.replace(
        `https://map.kakao.com/link/map/아만티호텔서울,${position.lat},${position.lng}`
      );
    }
  };

  /** * 티맵 호출 */
  const openTmapNavi = async () => {
    if (isIOS || isTablet) {
      // 기기가 ios 인 경우
      //tmap://?rGoName=위치이름&rGoY=위도&rGoX=경도
      window.location.replace(
        `tmap://route?rGoName="아만티호텔서울"&rGoX=${position.lng}&rGoY=${position.lat}`
      );
    } else if (isAndroid || isTablet) {
      // 기기가 android 인 경우
      window.location.replace(
        `tmap://route?referrer=com.skt.Tmap&goalx=${position.lat}&goaly=${position.lng}&goalname=%REACT_APP_NAVER_JAVASCRIPT_KEY_WEB%`
      );
    } else if (isBrowser || isTablet) {
      window.location.replace(
        `https://www.tmap.co.kr/my_tmap/my_map_tip/map_tip.do#`
      );
    }
  };

  /** * 네이버 호출 */
  const opeNaverNavi = async () => {
    const url = `kakaomap://route?sp=${position.lat},${position.lng}&ep=${position.lat},${position.lng}&by=CAR`;

    const androidStoreURL = `intent://place?lat=${position.lat}&lng=${position.lng}&name="아만티호텔"#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;

    if (isIOS || isTablet) {
      window.location.replace(url);
    } else if (isAndroid) {
      window.location.replace(androidStoreURL);
    } else if (isBrowser) {
      window.location.replace(`https://naver.me/58H36b85`);
    }
  };

  return (
    <navigation.navigationArea>
      <navigation.navigationButton
        onClick={openKakaoNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <img src={imagePath + "icon_navi_kakao.svg"} alt="Kakao_Navigation" />
        <p>카카오맵</p>
      </navigation.navigationButton>

      <navigation.navigationButton
        onClick={openTmapNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <img src={imagePath + "icon_navi_tmap.svg"} alt="Tmap_Navigation" />
        <p>티맵</p>
      </navigation.navigationButton>

      <navigation.navigationButton
        onClick={opeNaverNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <img src={imagePath + "icon_navi_naver.svg"} alt="naver_Navigation" />
        <p>네이버지도</p>
      </navigation.navigationButton>
    </navigation.navigationArea>
  );
};
