import React from 'react';
import Link from 'next/link';


interface NavItem {
  href: string;
  label: string;
  icon: React.ReactElement; // Or more specific icon type if available
  isActive: boolean;
}

interface BottomNavProps {
  links: NavItem[];
  activeColor: string;
}


const BottomNav: React.FC<BottomNavProps> = ({ links, activeColor }) => {
  return (
    <div className="fixed bottom-0 w-full py-3 md:py-5 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg">
      <div className="flex flex-row items-center justify-around max-w-screen-xl px-4 mx-auto bg-transparent md:px-8">
        {links.map(({ href, label, icon, isActive }) => (
          <Link href={href} className="relative flex flex-col items-center justify-center">
            {React.cloneElement(icon, { color: isActive ? activeColor : undefined, strokeWidth: isActive ? 3 : 2, size: 32 })}
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
