import React, { useEffect } from "react";
import { isIOS, isAndroid, isBrowser, isTablet } from "react-device-detect";
import * as navigation from "./styled/navigation";
import { isAppInstalled, showNavigationCheck } from "./util/NavigationCheck";

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
    if (isIOS || isAndroid) {
      window.open(`https://map.kakao.com/link/search/아만티호텔`);
    } else if (isBrowser || isTablet) {
      alert("카카오맵으로 이동합니다");
      window.open(`https://map.kakao.com/link/search/아만티호텔`);
    }
  };

  /** * 티맵 호출 */
  const openTmapNavi = async () => {
    if (isIOS) {
      // 기기가 ios 인 경우
      if (isAppInstalled("tmap://")) {
        window.open(
          `tmap://route?rGoName=아만티호텔서울&rGoX=${position.lng}&rGoY=${position.lat}`
        );
      } else {
        window.open(`https://apps.apple.com/app/id431589174`);
      }
    } else if (isAndroid) {
      // Android 플랫폼인 경우
      if (isAppInstalled("com.skt.Tmap")) {
        window.open(
          `tmap://route?referrer=com.skt.Tmap&goalx=${position.lng}&goaly=${position.lat}&goalname=아만티호텔서울`
        );
      } else {
        window.open(
          `https://play.google.com/store/apps/details?id=com.skt.tmap.ku&hl=ko-KR`
        );
      }
    } else if (isBrowser || isTablet) {
      // 브라우저나 태블릿 플랫폼인 경우
      alert("티맵으로 이동합니다");
      window.open(`https://www.tmap.co.kr/my_tmap/my_map_tip/map_tip.do#`);
    }
  };

  /** * 네이버 호출 */
  const opeNaverNavi = async () => {
    if (isIOS) {
      if (isAppInstalled("nmap://")) {
        window.open(
          `nmap://navigation?dlat=$${position.lat}&dlng=${position.lng}&dname=아만티호텔`
        );
      } else {
        window.open(
          `https://apps.apple.com/kr/app/naver-map-navigation/id311867728`
        );
      }
    } else if (isAndroid) {
      if (isAppInstalled("nmap://")) {
        window.open(
          `nmap://navigation?dlat=$${position.lat}&dlng=${position.lng}&dname=아만티호텔`
        );
      } else {
        window.open(
          `https://play.google.com/store/apps/details?id=com.nhn.android.nmap&hl=ko-KR`
        );
      }
    } else if (isBrowser || isTablet) {
      // 브라우저나 태블릿 플랫폼인 경우
      alert("네이버지도로 이동합니다");
      window.open(`https://map.naver.com/p/search/아만티호텔`);
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
        <img src={imagePath + "icon_navi_kakao.png"} alt="Kakao_Navigation" />
        <p>카카오맵</p>
      </navigation.navigationButton>

      <navigation.navigationButton
        onClick={openTmapNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <img src={imagePath + "icon_navi_tmap.png"} alt="Tmap_Navigation" />
        <p>티맵</p>
      </navigation.navigationButton>

      <navigation.navigationButton
        onClick={opeNaverNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        <img src={imagePath + "icon_navi_naver.png"} alt="naver_Navigation" />
        <p>네이버지도</p>
      </navigation.navigationButton>
    </navigation.navigationArea>
  );
};
