'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);
  const [isHandoutsActive, setIsHandoutsActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsScheduleActive(false);
    setIsInfoActive(false);
    setIsHandoutsActive(false);

    switch (pathname) {
      case '/chem-home':
        setIsHomeActive(true);
        break;
      case '/chem-schedule':
        setIsScheduleActive(true);
        break;
      case '/chem-info':
        setIsInfoActive(true);
        break;
      case '/chem-handouts':
        setIsHandoutsActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isScheduleActive,
    isInfoActive,
    isHandoutsActive,
  };
};

export default useNavigation;