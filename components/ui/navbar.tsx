"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  FlaskRoundIcon,
  HomeIcon,
  MenuIcon,
  SatelliteIcon,
  UserIcon,
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function Navbar({ bgColor = "bg-white" }) {
  const menus = [
    { icon: <HomeIcon />, title: "Home", path: "/" },
    { icon: <FlaskRoundIcon />, title: "Chemistry", path: "/chemistry" },
    { icon: <SatelliteIcon />, title: "Physics", path: "/physics" },
    { icon: <UserIcon />, title: "About Me", path: "/about" },
  ];

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`${bgColor} w-full border-b md:border-0`}>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">
              Test
            </h1>
          </Link>
          {isDesktop ? (
            <ul className="items-center hidden space-x-6 md:flex">
              {menus.map((item, idx) => (
                <li key={idx} className="text-lg font-bold text-white hover:text-indigo-500">
                  <Link href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button className="outline-none focus:outline-none">
                  <MenuIcon />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <Card>
                  <CardHeader>
                    <CardTitle>Menu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-8">
                      {menus.map((item, idx) => (
                        <li key={idx} className="text-black hover:text-indigo-500">
                          {item.icon}
                          <Link href={item.path}>
                            
                              {item.title}
                              <ChevronRight className="ml-2" />
                            
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </nav>
  );
}
