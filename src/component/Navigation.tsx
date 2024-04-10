import React from "react";
import { motion } from "framer-motion";

/**
 *  Navigation Component Type
 */
interface NavigationProps {
  title: string;
  scheme: string;
}

/**
  @title Navigation Components
*/
export const Navigation: React.FC<NavigationProps> = ({ title, scheme }) => {
  // 네비게이션 맵 이동

  return (
    <motion.a
      href={scheme}
      whileTap={{ scale: 0.9 }}
      style={{ textDecoration: "none" }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: "pointer" }}
      >
        {title}
      </motion.button>
    </motion.a>
  );
};
