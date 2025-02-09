import { useState, useEffect } from "react";

export function useDelayedVisibility(index) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 0.075);

    return () => clearTimeout(timer);
  }, [index]);

  return isVisible;
}
