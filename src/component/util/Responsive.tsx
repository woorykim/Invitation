import { useMediaQuery } from "react-responsive";

interface DesktopProps {
  children: React.ReactNode | null;
}

export const Desktop: React.FC<DesktopProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? <>{children}</> : null;
};

export const Tablet: React.FC<DesktopProps> = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  return isTablet ? <>{children}</> : null;
};

export const Mobile: React.FC<DesktopProps> = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 767 });
  return isMobile ? <>{children}</> : null;
};

export const Default: React.FC<DesktopProps> = ({ children }) => {
  const isNoMobile = useMediaQuery({ minWidth: 768 });
  return isNoMobile ? <>{children}</> : null;
};
