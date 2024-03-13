import { Accordion, AccordionContent, AccordionTrigger,AccordionItem } from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

export default function cheminfo() {
  return (
    <main className="flex flex-col px-4 gap-y-4">
      <Card className="max-w-screen-xl mx-auto">
        <CardHeader>
          <p>
            The purpose of this class is not only to learn about chemistry, but
            to explore and be able explain the various of ideas that make up
            chemistry. We will accomplish this task by using the same
            mathematical techniques and technology used in the industry,
            developing skills necessary for successful data acquisition in a
            laboratory. of this class is to explain and explore the various
            ideas that make up chemistry. Just like in normal lab, there will be
            a lot of work done collaboratively. Working together is highly
            encouraged, however, cheating/plagiarism will not be tolerated. If
            you received help, give them credit. However, if you are suspected
            or found to be cheating, the cheating policy by the Dean of Students
            will be enforced.
          </p>
        </CardHeader>
      </Card>
      <Card className="max-w-screen-xl mx-auto">
        <CardHeader>
          <p>
            In order to ensure no class time is wasted, make sure to come
            prepared to class every day with all your required materials and
            completed homework ready to turn in. If your homework is not
            finished, is not stapled, and/or does not have your name, it is
            incomplete. Our time together will be used to learn, not looking for
            homework. Below is a list of the required materials needed and
            expectations for this class...
          </p>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row">
          <div className="w-full pb-4 text-center md:pb-0">
            <h1 className="text-2xl font-bold ">
              <mark className="bg-[#da4453] text-white px-2">Materials</mark>
            </h1>
            <ul className="inline-block text-left list-disc">
              <li>3-Ring Binder</li>
              <li>Pencils/Pens</li>
              <li>Colored Pencils</li>
              <li>Ruler</li>
              <li>Highlighters</li>
              <li>Scientific Calculator</li>
            </ul>
          </div>
          <div className="w-full pt-4 text-center md:pt-0">
            <h1 className="text-2xl font-bold ">
              <mark className="bg-[#da4453] text-white px-2">Materials</mark>
            </h1>
            <ul className="inline-block text-left list-disc">
              <li>3-Ring Binder</li>
              <li>Pencils/Pens</li>
              <li>Colored Pencils</li>
              <li>Ruler</li>
              <li>Highlighters</li>
              <li>Scientific Calculator</li>
            </ul>
          </div>
        </CardContent>
        <CardHeader className="py-4">
        <p>
          The schedule is updated every week through the website. There you will find the topics as well as the homework we will be completing throughout the week and their due dates. Copy them to your planner. The excuse of not knowing an assignment was due will not be accepted.
        </p>
        </CardHeader>
      </Card>
      <Card className="max-w-screen-xl mx-auto">
        <CardHeader className="py-4">
          <p>
          As mentioned above, you will need a separate binder <strong>ONLY</strong> for this class. You should have dividers with the following headings:
          </p>
        </CardHeader>
        <CardContent>
          <ul className="px-4 list-decimal">
            <li>Lecture Outlines</li>
            <li>Handouts</li>
            <li>Homework</li>
            <li>Labs</li>
            <li>Tests</li>
          </ul>
        </CardContent>
        <CardHeader className="py-2">
          <p>
          You should have a separate <mark className="bg-[#da4453] text-white px-2">"Completed Homework Folder"</mark> where you place your assignments ready to be turned in. You may use the front pocket of your binder for this, just make sure to label the pocket properly.
          </p>
        </CardHeader>
        <CardHeader className="py-2">
          <p>
          The lecture notes for this class are made and distributed by the instructor. During class, your task will be to follow along and fill out the outline. This way, all your notes are in one place and if you’re absent, you know what notes to get. <strong>Guard these with your life.</strong>
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Message for Parents/Guardians</AccordionTrigger>
              <AccordionContent>
                <p>School today is very different from how it was in the past, allowing for easier communication between teachers, parents and students. Ensuring the success of students is an equal team effort. Therefore it is important that you also keep track of what your child is doing in class to help keep them focused. Some recommendations are:</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Message for Parents/Guardians</AccordionTrigger>
              <AccordionContent>
                <p>School today is very different from how it was in the past, allowing for easier communication between teachers, parents and students. Ensuring the success of students is an equal team effort. Therefore it is important that you also keep track of what your child is doing in class to help keep them focused. Some recommendations are:</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
