import React, { useEffect } from "react";
import { isIOS, isAndroid, isBrowser, isTablet } from "react-device-detect";

import { motion } from "framer-motion";

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

      // // SDK 초기화
      // window.Kakao.init("%REACT_APP_KAKAO_JAVASCRIPT_KEY_WEB%");

      // // SDK를 통한 호출
      // await window.Kakao.Navi.start({
      //   name: "아만티호텔서울", //상호명
      //   x: position.lng,
      //   y: position.lat,
      //   coordType: "wgs84",
      // });
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
    // 인코딩
    const incoding = encodeURIComponent(
      `nmap://route/public?dlat=${position.lat}&dlng=${position.lng}&dname="아만티호텔서울"`
    );

    window.location.replace(incoding);
  };

  return (
    <div>
      <motion.button
        onClick={openKakaoNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        카카오맵
      </motion.button>

      <motion.button
        onClick={openTmapNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        티맵
      </motion.button>
      <motion.button
        onClick={opeNaverNavi}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        네이버
      </motion.button>
    </div>
  );
};
