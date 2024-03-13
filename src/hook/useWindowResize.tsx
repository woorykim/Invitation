import { useEffect } from "react";

/**
 * @title Custom window Resize hook
 */
export const useWindowResize = () => {
  const onResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
};
