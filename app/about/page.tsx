"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/newtabs";
import {
  ChevronRight,
  FlaskRound,
  Home,
  Mail,
  Phone,
  Satellite,
  School,
  User,
  UserSquare,
  Users,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function about() {
  return (
    <div className="bg-[#f4f4f4] py-2 px-4 space-y-4 max-w-screen-2xl">
      <Card className="w-full mx-auto">
        <CardTitle className="text-2xl font-extrabold text-center text-chem pb-1">
          Menu
        </CardTitle>

        <CardContent>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-none"
            >
              <Link
                href={"mailto:c.navarrete@lausd.net"}
                className="mr-2 bg-[#3b5998] hover:bg-[#3b5998]/80"
              >
                <Mail className="w-5 h-5" color="#3b5998" fill="white" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-none"
            >
              <Link
                href={"google.com"}
                className="mr-2 bg-chem hover:bg-[#DA4453]/80"
              >
                <Youtube className="w-5 h-5" color="white" fill="#DA4453" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-none"
            >
              <Link
                href={"google.com"}
                className="mr-2 bg-[#27ae60] hover:bg-[#27ae60]/80"
              >
                <Phone className="w-5 h-5" color="#27ae60" fill="white" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-none"
            >
              <Link
                href={"google.com"}
                className="mr-2 bg-[#656D78] hover:bg-[#656D78]/80"
              >
                <School className="w-5 h-5" fill="#656D78" color="white" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full mx-auto">
        <CardTitle className="text-2xl font-extrabold text-center text-chem pb-1">
          Menu
        </CardTitle>

        <CardContent>
          <div className="">
            <ul>
              <li>
                <Button
                  asChild
                  variant={"ghost"}
                  className="w-full h-10 px-4 py-2 text-xl "
                >
                  <div className="flex justify-between  w-full ">
                    <Link href={"/"} className="flex items-center">
                      <Home
                        className="mr-2 h-7 w-7 bg-[#656D78] hover:bg-[#656D78]/80"
                        fill="#656D78"
                        color="white"
                      />
                      <span>Home</span>
                    </Link>
                    <ChevronRight className="mr-2 h-6 w-6" />
                  </div>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"ghost"}
                  className="w-full h-10 px-4 py-2 text-xl "
                >
                  <div className="flex justify-between  w-full ">
                    <Link href={"/chem-home"} className="flex items-center">
                      <FlaskRound className="mr-2 h-7 w-7 " />
                      <span>Chemistry</span>
                    </Link>
                    <ChevronRight className="mr-2 h-6 w-6" />
                  </div>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"ghost"}
                  className="w-full h-10 px-4 py-2 text-xl "
                >
                  <div className="flex justify-between  w-full ">
                    <Link href={"/phys-home"} className="flex items-center">
                      <Satellite className="mr-2 h-7 w-7 " />
                      <span>Physics</span>
                    </Link>
                    <ChevronRight className="mr-2 h-6 w-6" />
                  </div>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant={"ghost"}
                  className="w-full h-10 px-4 py-2 text-xl "
                >
                  <div className="flex justify-between  w-full ">
                    <Link href={"/about"} className="flex items-center">
                      <UserSquare className="mr-2 h-7 w-7 " />
                      <span>About Me</span>
                    </Link>
                    <ChevronRight className="mr-2 h-6 w-6" />
                  </div>
                </Button>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full mx-auto flex flex-col">
        <CardTitle className="text-2xl font-extrabold text-center text-chem pt-2 mb-0">
          Menu
        </CardTitle>
        <CardContent>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link
              href={"/about"}
              className="flex items-center  justify-between"
            >
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                  <User className="h-5 w-5" color="white" />
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link
              href={"/about"}
              className="flex items-center  justify-between"
            >
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                  <User className="h-5 w-5" color="white" />
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link
              href={"/about"}
              className="flex items-center  justify-between"
            >
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                  <User className="h-5 w-5" color="white" />
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link
              href={"/about"}
              className="flex items-center  justify-between"
            >
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                  <User className="h-5 w-5" color="white" />
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full mx-auto">
        <CardContent className="p-4">
          <Tabs defaultValue="Unit 1" className="w-full">
            <ScrollArea>
              <div className="w-full relative h-10">
            <TabsList className=" bg-white flex absolute h-10">
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 1">Unit 1</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 2">Unit 2</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 3">Unit 3</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 4">Unit 4</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 5">Unit 5</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 6">Unit 6</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 7">Unit 7</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 8">Unit 8</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 9">Unit 9</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 10">Unit 10</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 11">Unit 11</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 12">Unit 12</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 13">Unit 13</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 14">Unit 14</TabsTrigger>
              <TabsTrigger className=" flex-grow justify-center  data-[state=active]:text-black  data-[state=active]:text-extrabold " value="Unit 15">Unit 15</TabsTrigger>
            </TabsList>
            </div>
            <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <TabsContent value="Unit 1">
             Unit 1 Content
            </TabsContent>
            <TabsContent value="Unit 2">
              Unit 2 Content
            </TabsContent>
            <TabsContent value="Unit 3">
              Unit 3 Content
            </TabsContent>
            <TabsContent value="Unit 4">
              Unit 4 Content
            </TabsContent>
            <TabsContent value="Unit 5">
              Unit 5 Content
            </TabsContent>
            <TabsContent value="Unit 6">
              Unit 6 Content
            </TabsContent>
            <TabsContent value="Unit 7">
              Unit 7 Content
            </TabsContent>
            <TabsContent value="Unit 8">
              Unit 8 Content
            </TabsContent>
            <TabsContent value="Unit 9">
              Unit 9 Content
            </TabsContent>
            <TabsContent value="Unit 10">
              Unit 10 Content
            </TabsContent>
            <TabsContent value="Unit 11">
              Unit 11 Content
            </TabsContent>
            <TabsContent value="Unit 12">
              Unit 12 Content
            </TabsContent>
            <TabsContent value="Unit 13">
              Unit 13 Content
            </TabsContent>
            <TabsContent value="Unit 14">
              Unit 14 Content
            </TabsContent>
            <TabsContent value="Unit 15">
              Unit 15 Content
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default about;
