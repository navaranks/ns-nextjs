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
          <section className="flex flex-col md:flex-row gap-y-4 border">
            <div className="bg-white rounded-lg shadow-xl border-4 border-white  overflow-hidden w-[500px] h-fit mx-auto">
              <div className=" p-4">
                <img
                  alt="Polaroid Photo"
                  className="rounded-lg aspect-auto mx-auto object-cover "
                  height="240"
                  src="/images/aboutme1.jpg"
                  width="240"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
            <p className=" text-base text-balance">
								Hello! My name is Christopher Navarrete <span className="text-[#967ADC]">(Nah-bah-rreh-teh)</span> and I am the Honors Chemistry and Honors Physics teacher at Francisco Bravo Medical Magnet High School. I am a 1st generation Mexican-American teacher who grew up in Bell,CA. I graduated from Bell High School and obtained my Bachelors of Science in Chemistry/Biochemistry from the University of California, San Diego as I was interested in learning how medicine affects the body. However, during my time at UCSD, I saw how my lack of science experiences meant I had to spend more time "relearning" than working in a lab. From there, I decided to not work in a lab and instead purse a Masters of Education in Curriculum and Instruction from California State University, Dominguez Hills. At the same time, I was also part of a research team responsible for the DNA extraction, genetic sequencing, and mapping the population of the pale evening primrose, Oenothera pallida. I am excited to be a part of the Bravo Science team and equally as excited to show students about the world of science.
							</p>
            </div>
          </section>
          <section className="flex flex-col md:flex-row-reverse gap-y-4">
            <div className="bg-white rounded-lg shadow-xl border-4 border-white mx-auto overflow-hidden w-[300px] h-[350px]">
              <div className=" p-4">
                <img
                  alt="Polaroid Photo"
                  className="rounded-lg aspect-auto object-cover mx-auto"
                  height="600"
                  src="/images/aboutme2.jpg"
                  width="600"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>
            <div className=" space-y-5 w-full md:w-1/2 text-balance">
							<p className="">
								Before coming to Bravo, I was fortunate enough to be part of the science program at University Pathways Public Service Academy, or "The U", in Watts, CA. There I led both the Chemistry and Honors Chemistry classes, as well as helped out in other programs. My goal was to connect Chemistry to their community and ultimately show my students that Chemistry does not only happen in a lab, but happens around them. By connecting the science to their community, students were able to develop the critical thinking and problem solving skills needed to be successful not only in my classroom, but also once they were out in the real world.
								</p>
                <p>
								Before "The U", I was a part of the science team at Stephen White Middle School. There, the big focus was connecting the science to other courses, such as Math and English, to show students how the skills they develop in each class work together to help students develop academically
							</p>
						</div>
          </section>
          <section className="flex flex-col md:flex-row gap-y-4">
            <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 mx-auto overflow-hidden w-[300px] h-fit">
              <div className=" p-4">
                <video
                  autoPlay muted loop
                  className="rounded-lg aspect-3/2 object-cover mx-auto"
                  height="240"
                  src="/images/pc.webm"
                  width="240"
                />
                <div className="mt-4 text-center">
                  <p className="text-gray-700 font-medium">Polaroid Caption</p>
                </div>
              </div>
            </div>
            <div className="pl-4 w-1/2">
							
							<ul className="list-disk list-outside">
								<li>
									Love to skate. I have two main decks, a retro "Powell Peralta" and an "Alien Workshop". While tricks are not my thing, each board was built to go down hills as smooth and fast as possible
								</li>
								<li>
									Tinker with technology a lot. I like learning how things work and being able to fix things on my own. I recently built my own PC, modified my old iPod and fixed my own switch.
								</li>
								<li className="">
									Am a cuber. I started with a 3x3, but slowly added a 2x2, 4x4, and 5x5. While they are all fun to solve, my favorite is the 5x5.
								</li>
								<li className="">
									Play a lot of video games. Most of the time, I am either playing Melee or Smash Ultimate with my friends.
								</li>
								<li className="">
									Do a lot of graphic and video design. The programs I tend to use the most are Photoshop, After Effects and Blender. I just enjoy being able to imagine something in my head and then be able to visually see it on my computer screen.
								</li>
								<li className="">
									Love music, and everything attached to it. I love learning about the history of how specific genres came into existence as well as trying to produce music. While I am not a professional in music production, I know how to get around Ableton. While I listen to a lot of different genres, Disco, House and Hip-Hop is what I listen to the most.
								</li>
								<li className="">
									While I don't watch a lot of Netflix, I spend a lot of time on YouTube, Twitch and TikTok.
								</li>
								<li className="list-disk">
									There is a lot more, but that will be saved for school year...
								</li>
                <li>
                  test
                </li>
							</ul>
						</div>
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
