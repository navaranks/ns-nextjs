import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Physics Home',
}
const tabsHeadList = [
  { id: 'tab1', value: 'first', label: 'First Tab' },
  { id: 'tab2', value: 'second', label: 'Second Tab' },
  { id: 'tab3', value: 'third', label: 'Third Tab' },
  { id: 'tab4', value: 'fourth', label: 'Fourth Tab' },
  { id: 'tab5', value: 'fifth', label: 'Fifth Tab' },
  { id: 'tab6', value: 'sixth', label: 'Sixth Tab' },
  { id: 'tab7', value: 'seventh', label: 'Seventh Tab' },
  { id: 'tab8', value: 'eighth', label: 'Eighth Tab' },
  { id: 'tab9', value: 'ninth', label: 'Ninth Tab' },
  { id: 'tab10', value: 'tenth', label: 'Tenth Tab' },
  { id: 'tab11', value: 'eleventh', label: 'Eleventh Tab' },
  { id: 'tab12', value: 'twelfth', label: 'Twelfth Tab' },
  { id: 'tab13', value: 'thirteenth', label: 'Thirteenth Tab' },
  { id: 'tab14', value: 'fourteenth', label: 'Fourteenth Tab' },
  { id: 'tab15', value: 'fifteenth', label: 'Fifteenth Tab' },

];

export default function page() {
  return (
    <Tabs>
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
  )
}
