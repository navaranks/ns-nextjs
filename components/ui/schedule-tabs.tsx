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
  const [selectedTab, setSelectedTab] = useState('spring');

  // Render loading state and allow user interaction with tabs
  if (isLoading) {
    return (
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="w-full justify-between mx-auto h-auto">
          <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem'>Spring</TabsTrigger>
          <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem'>Fall</TabsTrigger>
        </TabsList>
        <TabsContent value='spring'>
          <ScheduleLoading />
        </TabsContent>
        <TabsContent value="fall">
          <p>Loading Fall data...</p>
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
        <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem'>Spring</TabsTrigger>
        <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem'>Fall</TabsTrigger>
      </TabsList>
      <TabsContent value='spring'>
        {selectedTab === 'spring' && scheduleData.slice().reverse().map((schedule) => (
          <ScheduleAccordion key={schedule.tableid} schedule={schedule} isLast={schedule.tableid === scheduleData[scheduleData.length - 1].tableid} />
        ))}
      </TabsContent>
      <TabsContent value="fall">
        {/* Render Fall specific content or iterate similarly if it's based on dynamic data */}
        <ScheduleLoading />
      </TabsContent>
    </Tabs>
  );
}
