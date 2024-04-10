import React, { useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { motion } from "framer-motion";

/**
 *  Navigation Component Type
 */
declare global {
  interface Window {
    Kakao: any;
  }
}

/**
  @title Navigation Components
*/
export const Navigation = () => {
  const openNavigation = () => {
    if (window.Kakao) {
      window.Kakao.Navi.start({
        name: "아만티호텔서울", //상호명
        x: 126.9186859271572, // 경도
        y: 37.55715071108653, // 위도
        coordType: "wgs84",
      });
    } else {
      console.error("Kakao SDK is not loaded.");
    }
  };

  return (
    <motion.button
      onClick={openNavigation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      style={{ cursor: "pointer", textDecoration: "none" }}
    >
      카카오맵
    </motion.button>
  );
};
