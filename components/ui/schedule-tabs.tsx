"use client";
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import ScheduleAccordion from './schedule-accordion';
import { ScheduleData } from './schedule'; // Ensure the path is correct
import { ScheduleLoading } from '../chemistry/scheduleloading';

interface ScheduleTabsProps {
  scheduleData: ScheduleData[] | null;
  isLoading: boolean;
}

export default function ScheduleTabs({ isLoading, scheduleData }: ScheduleTabsProps) {
  const [selectedTab, setSelectedTab] = useState('fall');

  //Filter schedule data based on selected tab
  const springData = scheduleData?.filter(item => item.season === 'Spring') || [];
  const fallData = scheduleData?.filter(item => item.season === 'Fall') || [];

  //Determine if tab is disabled
  const isSpringDataAvailable = springData.length > 0;
  const isFallDataAvailable = fallData.length > 0;

  // Render loading state and allow user interaction with tabs
  if (isLoading) {
    return (
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full justify-between mx-auto h-auto">
          <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem' disabled={!isSpringDataAvailable}>Spring</TabsTrigger>
          <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem' disabled={!isFallDataAvailable}>Fall</TabsTrigger>
        </TabsList>
        <TabsContent value='spring'>
          <ScheduleLoading />
        </TabsContent>
        <TabsContent value="fall">
          <ScheduleLoading />
        </TabsContent>
      </Tabs>
    );
  }

  // Handle case where data is null or empty
  if (!scheduleData) {
    return (
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full justify-between mx-auto h-auto">
          <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem'>Spring</TabsTrigger>
          <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem'>Fall</TabsTrigger>
        </TabsList>
        <TabsContent value='spring'>
          <p>No Spring data available.</p>
        </TabsContent>
        <TabsContent value="fall">
          <p>No Fall data available.</p>
        </TabsContent>
      </Tabs>
    );
  }

  // Normal rendering when data is available
  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab}>
      <TabsList className="w-full justify-between mx-auto h-auto">
        <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem' disabled={!isSpringDataAvailable}>Spring</TabsTrigger>
        <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem' disabled={!isFallDataAvailable}>Fall</TabsTrigger>
      </TabsList>
      <TabsContent value='spring'>
        {selectedTab === 'spring' && springData.slice().reverse().map((schedule) => (
          <ScheduleAccordion key={schedule.tableid} schedule={schedule} isLast={schedule.tableid === springData[springData.length - 1].tableid} />
        ))}
      </TabsContent>
      <TabsContent value="fall">
        {selectedTab === 'fall' && fallData.slice().reverse().map((schedule) => (
          <ScheduleAccordion key={schedule.tableid} schedule={schedule} isLast={schedule.tableid === fallData[fallData.length - 1].tableid} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
