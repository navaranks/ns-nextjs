"use client";

import React from 'react';
import Link from 'next/link';
import useNavigation from '@/hooks/use-navigation';
import useScrollingEffect from '@/hooks/use-scroll';

// Import the required icons from Lucide
import { Home, Search, Bell, Mail } from 'lucide-react';

const BottomNav = () => {
  const scrollDirection = useScrollingEffect();
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  } = useNavigation();

  return (
    <div
      className={`fixed bottom-0 w-full py-4 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg md:hidden ${navClass}`}
    >
      <div className="flex flex-row items-center justify-around w-full bg-transparent">
        <Link href="/chem-home" className="relative flex flex-col items-center justify-center">
          {isHomeActive ? (
            <Home strokeWidth={3} size={32} />
          ) : (
            <Home strokeWidth={1} size={32} />
          )}
          <span>Home</span>
        </Link>
        <Link href="/chem-info" className="flex items-center">
          {isExploreActive ? (
            <Search strokeWidth={3} size={32} />
          ) : (
            <Search size={32} />
          )}
        </Link>
        <Link href="/chem-schedule" className="flex items-center">
          {isNotificationsActive ? (
            <Bell strokeWidth={3} size={32} />
          ) : (
            <Bell size={32} />
          )}
        </Link>
        <Link href="/chem-handouts" className="flex items-center">
          {isMessagesActive ? (
            <Mail strokeWidth={3} size={32} />
          ) : (
            <Mail size={32} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
