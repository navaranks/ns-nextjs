"use client";

import React from "react"
import Link from "next/link"
import { ChevronRight, FlaskRoundIcon, HomeIcon, MenuIcon, SatelliteIcon, UserIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export default function navbar ({ bgColor = "bg-white"}) {
    const menus = [
        {icon: <HomeIcon />, title:"Home", path: "/"},
        {icon: <FlaskRoundIcon />, title:"Chemistry", path: "/chemistry"},
        {icon: <SatelliteIcon />, title:"Physics", path: "/physics"},
        {icon: <UserIcon />, title:"About Me", path: "/about"}
    ];
    return (
        <nav className={`${bgColor} w-full border-b md:border-0`}>
            <div className="items-center max-w-screen-xl px-4 mx-auto md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-white cursor-pointer">Test</h1>
                    </Link>
                    <div className="items-center flex-1 md:flex md:justify-end">
                        <ul className="items-center hidden space-x-6 md:flex">
                            {menus.map((item, idx) => (
                                <li key={idx} className="text-white hover:text-indigo-500">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button className="outline-none focus:outline-none" variant={"ghost"}>
                                    <MenuIcon />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="rounded-xl" side={"right"}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Menu</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex-1 pb-3 mt-8 justify-self-center md:block md:pb-0 md:mt-0">
                                            <ul className="items-center justify-end space-y-8 md:flex md:space-x-6 md:space-y-0">
                                                {menus.map((item, idx) => (
                                                    <li key={idx} className="text-black hover:text-indigo-500">
                                                        <Link href={item.path}>{item.title}</Link>
                                                        <ChevronRight className="end-0" />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}