import { useState, useEffect } from "react";

const useDevices = () => {
  const smallMobileBreakpoint = 375;
  const mobileBreakpoint = 768;
  const tabletBreakpoint = 1024;

  const [isSmallMobile, setIsSmallMobile] = useState<boolean>(
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${smallMobileBreakpoint}px)`).matches
      : false
  );

  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined"
      ? window.matchMedia(
          `(min-width: ${
            smallMobileBreakpoint + 1
          }px) and (max-width: ${mobileBreakpoint}px)`
        ).matches
      : false
  );

  const [isTablet, setIsTablet] = useState<boolean>(
    typeof window !== "undefined"
      ? window.matchMedia(
          `(min-width: ${
            mobileBreakpoint + 1
          }px) and (max-width: ${tabletBreakpoint}px)`
        ).matches
      : false
  );

  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined"
      ? window.matchMedia(`(min-width: ${tabletBreakpoint + 1}px)`).matches
      : false
  );

  useEffect(() => {
    const smallMobileMediaQuery = window.matchMedia(
      `(max-width: ${smallMobileBreakpoint}px)`
    );
    const mobileMediaQuery = window.matchMedia(
      `(min-width: ${
        smallMobileBreakpoint + 1
      }px) and (max-width: ${mobileBreakpoint}px)`
    );
    const tabletMediaQuery = window.matchMedia(
      `(min-width: ${
        mobileBreakpoint + 1
      }px) and (max-width: ${tabletBreakpoint}px)`
    );
    const desktopMediaQuery = window.matchMedia(
      `(min-width: ${tabletBreakpoint + 1}px)`
    );

    const handleSmallMobileChange = () =>
      setIsSmallMobile(smallMobileMediaQuery.matches);
    const handleMobileChange = () =>
      setIsMobile(mobileMediaQuery.matches && !smallMobileMediaQuery.matches);
    const handleTabletChange = () => setIsTablet(tabletMediaQuery.matches);
    const handleDesktopChange = () => setIsDesktop(desktopMediaQuery.matches);

    smallMobileMediaQuery.addEventListener("change", handleSmallMobileChange);
    mobileMediaQuery.addEventListener("change", handleMobileChange);
    tabletMediaQuery.addEventListener("change", handleTabletChange);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    handleSmallMobileChange();
    handleMobileChange();
    handleTabletChange();
    handleDesktopChange();

    return () => {
      smallMobileMediaQuery.removeEventListener(
        "change",
        handleSmallMobileChange
      );
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
      tabletMediaQuery.removeEventListener("change", handleTabletChange);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return { isSmallMobile, isMobile, isTablet, isDesktop };
};

export default useDevices;
