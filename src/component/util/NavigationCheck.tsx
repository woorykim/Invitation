import { isIOS, isAndroid, isBrowser, isTablet } from "react-device-detect";

/** * 앱이 설치되어 있는지 확인하는 함수 */
export const isAppInstalled = (scheme: string): boolean => {
  const userAgent = navigator.userAgent;
  if (userAgent.match(scheme)) {
    return true;
  } else {
    return false;
  }
};

/** * 앱이 설치되어 있지 않은 경우 */
export const showNavigationCheck = (
  iosLink: string,
  androidLink: string,
  browserLink: string
) => {
  if (isIOS || isAndroid) {
    // 모바일 플랫폼에서 앱이 설치되어 있지 않은 경우
    if (isIOS) {
      window.open(iosLink);
    }
    if (isAndroid) {
      window.open(androidLink);
    } else {
      alert("sorry 😭");
    }
  } else if (isBrowser) {
    // 브라우저 플랫폼인 경우 PC용 지도 페이지로 이동
    window.open(browserLink);
  } else {
    alert("sorry 😭");
  }
};
