import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="bg-[#f4f4f4] py-2 px-4 space-y-4">
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
            <Link href={"/about"} className="flex items-center  justify-between">
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                    <User className="h-5 w-5"  color="white"/>
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link href={"/about"} className="flex items-center  justify-between">
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                    <User className="h-5 w-5"  color="white"/>
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link href={"/about"} className="flex items-center  justify-between">
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                    <User className="h-5 w-5"  color="white"/>
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
          <div className="w-full hover:bg-gray-100 focus:bg-gray-200 p-2 rounded-md">
            <Link href={"/about"} className="flex items-center  justify-between">
              <div className="flex items-center">
                <div className="h-7 w-7 bg-chem rounded-sm  flex justify-center items-center">
                    <User className="h-5 w-5"  color="white"/>
                </div>
                <span className="text-xl ml-2">About Me</span>
              </div>
              <ChevronRight className="mr-2 h-5 w-5" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default about;
