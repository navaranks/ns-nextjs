"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  FlaskRoundIcon,
  HomeIcon,
  MenuIcon,
  SatelliteIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";

export default function MainNav({ bgColor = "bg-white" }) {
  const menus = [
    {
      icon: <HomeIcon />,
      title: "Home",
      path: "/",
      bgGradient: "from-[#656D78] to-[#434A54]",
    },
    {
      icon: <FlaskRoundIcon />,
      title: "Chemistry",
      path: "/chem-home",
      bgGradient: "from-[#ED5565] to-[#DA4453]",
    },
    {
      icon: <SatelliteIcon />,
      title: "Physics",
      path: "/physics-home",
      bgGradient: "from-[#5D9CEC] to-[#4A89DC]",
    },
    {
      icon: <UserIcon />,
      title: "About Me",
      path: "/about",
      bgGradient: "from-[#AC92EC] to-[#967ADC]",
    },
  ];

  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <nav className={`bg-gradient-to-b ${bgColor} w-full border-b md:border-0`}>
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 transform duration-500">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white cursor-pointer">
              Navarrete Science
            </h1>
          </Link>
          {isDesktop ? (
            <ul className="items-center hidden space-x-6 md:flex">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className="text-lg font-bold text-white hover:text-indigo-500 "
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button className="outline-none focus:outline-none">
                  <MenuIcon color="white" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="p-4 justify-between">
                <Card className="drop-shadow-lg border-none">
                  <CardHeader>
                    <CardTitle>Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {menus.map((item, idx) => (
                        <li key={idx} className="w-full">
                          <Link
                            href={item.path}
                            className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100 focus:bg-gray-200"
                          >
                            <div className="flex items-center">
                              <div
                                className={`h-8 w-8 bg-gradient-to-b ${item.bgGradient} rounded-sm mr-2 flex justify-center items-center`}
                              >
                                {React.cloneElement(item.icon, {
                                  color: "white",
                                })}
                              </div>
                              <span className="text-md">{item.title}</span>
                            </div>
                            <ChevronRight className="mr-2 h-5 w-5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center ">
                        <SunIcon color="yellow"  />
                        <span className="ml-2">Dark Mode</span>
                      </div>
                      <Switch />
                    </div>
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
