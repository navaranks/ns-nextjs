"use client";
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import ScheduleAccordion from './schedule-accordion';
import { ScheduleData } from './schedule'; // Adjust this import path to where your types are defined

interface ScheduleTabsProps {
  scheduleData: ScheduleData[];
}

export default function ScheduleTabs({ scheduleData }: ScheduleTabsProps) {
    console.log(scheduleData);
  const [selectedTab, setSelectedTab] = useState('spring');

  if (!scheduleData){
    return <p>Loading...</p>;}

  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab}>
      <TabsList className="w-full justify-between mx-auto h-auto">
        <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem'>Spring</TabsTrigger>
        <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem'>Fall</TabsTrigger>
      </TabsList>
      <TabsContent value='spring'>
        {selectedTab === 'spring' && scheduleData.map((schedule, index) => (
          <ScheduleAccordion key={index} schedule={schedule} />
        ))}
      </TabsContent>
      <TabsContent value="fall">
        {/* Render something related to "Fall" or iterate similarly if it's based on dynamic data */}
        <p>Fall content goes here...</p>
      </TabsContent>
    </Tabs>
  );
}
