"use client";
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import ScheduleAccordion from './schedule-accordion'


export default function ScheduleTabs() {
    const [tabs, setTab] = useState("spring");
    const onTabChange = (value: string) => setTab(value);

  return (
    <Tabs value={tabs} onValueChange={onTabChange}>
        <TabsList className="w-full justify-between mx-auto h-auto">
            <TabsTrigger value='spring' className='w-full text-xl data-[state=active]:bg-chem'>Spring</TabsTrigger>
            <TabsTrigger value='fall' className='w-full text-xl data-[state=active]:bg-chem'>Fall</TabsTrigger>
        </TabsList>
        <TabsContent value='spring'>
            <ScheduleAccordion />
        </TabsContent>
        <TabsContent value="fall">
            <p>Fall</p>
        </TabsContent>
    </Tabs>
  )
}
