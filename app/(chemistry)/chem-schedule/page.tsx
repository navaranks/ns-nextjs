import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Schedule from '@/components/ui/schedule'
import ScheduleCard from '@/components/ui/schedule-card'
import React from 'react'

export default function chemschedule() {
  return (
    <main className='flex flex-col px-4 gap-y-4'>
      <ScheduleCard />
      <Schedule />
    </main>
  )
}
