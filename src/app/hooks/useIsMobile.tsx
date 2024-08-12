import { useState, useEffect } from "react";

const useIsMobile = () => {
  const mobileBreakpoint = 768;

  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined"
      ? window.matchMedia(`(max-width: ${mobileBreakpoint}px)`).matches
      : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    const handleChange = () => setIsMobile(mediaQuery.matches);

    // Listener para cambios en el tamaño de la pantalla
    mediaQuery.addEventListener("change", handleChange);

    // Ejecutamos la función inmediatamente para ajustar el estado al cargar
    handleChange();

    // Limpiamos el event listener cuando el componente se desmonta
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
