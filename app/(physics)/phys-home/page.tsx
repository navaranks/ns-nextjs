import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Physics Home",
};
const tabsHeadList = [
  { id: "tab1", value: "first", label: "First Tab" },
  { id: "tab2", value: "second", label: "Second Tab" },
  { id: "tab3", value: "third", label: "Third Tab" },
  { id: "tab4", value: "fourth", label: "Fourth Tab" },
  { id: "tab5", value: "fifth", label: "Fifth Tab" },
  { id: "tab6", value: "sixth", label: "Sixth Tab" },
  { id: "tab7", value: "seventh", label: "Seventh Tab" },
  { id: "tab8", value: "eighth", label: "Eighth Tab" },
  { id: "tab9", value: "ninth", label: "Ninth Tab" },
  { id: "tab10", value: "tenth", label: "Tenth Tab" },
  { id: "tab11", value: "eleventh", label: "Eleventh Tab" },
  { id: "tab12", value: "twelfth", label: "Twelfth Tab" },
  { id: "tab13", value: "thirteenth", label: "Thirteenth Tab" },
  { id: "tab14", value: "fourteenth", label: "Fourteenth Tab" },
  { id: "tab15", value: "fifteenth", label: "Fifteenth Tab" },
];

export default function page() {
  return (
    <div className="flex flex-col h-full px-4 py-2">
      {/* <Tabs>
      <div className='px-auto'>
      <ScrollArea>
        <div className="w-full relative h-10">
          <TabsList className="flex absolute h-10">
            {tabsHeadList.map(({ id, value, label }) => (
              <TabsTrigger key={id} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
    </Tabs>
    <Card>
      <CardContent className='h-[600px]'>
      <Carousel
      opts={{
        align: "center",
      }}
      orientation='vertical'
      className="w-full max-w-sm py-auto"
    >
      <CarouselContent className=' h-96'>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/5">
            <div className="p-1">
              <Button variant="outline" className="w-full h-20">
                  <span className="text-3xl font-semibold">{index + 1}</span>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </CardContent>
    </Card> */}
      <Card className="px-2 w-full mx-auto max-w-screen-xl">
        <CardContent className="">
          <section className="flex flex-col md:flex-row gap-y-4 ">
            <div className="bg-white rounded-lg shadow-xl border-4 border-white  overflow-hidden w-[300px] h-[350px] mx-auto">
              <div className=" p-4">
                <img
                  alt="Polaroid Photo"
                  className="rounded-lg aspect-square object-cover mx-auto"
                  height="240"
                  src="https://placehold.co/500x500/967ADC/white"
                  width="240"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>

            <img
              src="https://placehold.co/500x500/167ADC/red"
              className="w-64 mx-auto "
            />
          </section>
          <section className="flex flex-col md:flex-row-reverse gap-y-4">
            <div className="bg-white rounded-lg shadow-xl border-4 border-white mx-auto overflow-hidden w-[300px] h-[350px]">
              <div className=" p-4">
                <img
                  alt="Polaroid Photo"
                  className="rounded-lg aspect-square object-cover mx-auto"
                  height="240"
                  src="https://placehold.co/500x500/967ADC/white"
                  width="240"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>
            <img
              src="https://placehold.co/500x500/267ADC/black"
              className="w-64 mx-auto "
            />
          </section>
          <section className="flex flex-col md:flex-row gap-y-4">
            <div className="bg-white rounded-lg shadow-xl border-4 border-white mx-auto overflow-hidden w-[300px] h-[350px]">
              <div className=" p-4">
                <img
                  alt="Polaroid Photo"
                  className="rounded-lg aspect-square object-cover mx-auto"
                  height="240"
                  src="https://placehold.co/500x500/967ADC/white"
                  width="240"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>
            <img
              src="https://placehold.co/500x500/367ADC/white"
              className="w-64 mx-auto "
            />
          </section>
        </CardContent>
      </Card>
      <Card className="px-2 w-full mx-auto max-w-screen-xl">
        <CardTitle className="text-xl font-extrabold text-center text-[#967ADC] p-4 text-balance">
          Education is my main goal, and I want to be able to connect the
          material we are learning in the classroom to various experiences and
          interests in each student's lives. If you want to know more about me,
          or how your student is doing, do not hesitate to reach out to me
          either in person or using the links below
        </CardTitle>
      </Card>
    </div>
  );
}
