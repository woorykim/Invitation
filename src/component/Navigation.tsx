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
    lng: 126.9186859271572,
    lat: 37.55715071108653,
  };

  /** * 카카오맵 호출 */
  const openKakaoNavi = async () => {
    if (window.Kakao) {
      if (isIOS || isAndroid || isTablet) {
        // SDK 초기화
        window.Kakao.init("%REACT_APP_KAKAO_JAVASCRIPT_KEY_WEB%");

        // SDK를 통한 호출
        await window.Kakao.Navi.start({
          name: "아만티호텔서울", //상호명
          x: position.lng, // 경도
          y: position.lat, // 위도
          coordType: "wgs84",
        });
      } else if (isBrowser) {
        console.error("Kakao SDK is not loaded.");
        return false;
      }
    }
  };

  /** * 티맵 호출 */
  const openTmapNavi = async () => {
    if (isIOS) {
      // 기기가 ios 인 경우
      window.location.replace(
        `tmap://route?rGoName="아만티호텔서울"&rGoX=${position.lng}&rGoY=${position.lat}`
      );
    } else if (isAndroid) {
      // 기기가 android 인 경우
      window.location.replace(
        `tmap://route?referrer=com.skt.Tmap&goalx=${position.lng}&goaly=${position.lat}&goalname="아만티호텔서울"`
      );
    } else if (isTablet || isBrowser) {
      console.error("Tmap SDK is not loaded.");
      return false;
    }
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
    </div>
  );
};
