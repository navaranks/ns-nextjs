import React from 'react'
import { Card, CardContent, CardHeader } from './card'
import ScheduleTabs from './schedule-tabs'

export interface ScheduleDay {
  Weekday: string;
  Date: string;
  'Class Topic': string;
  Homework: string;
}

interface ScheduleProps {
  scheduleData: ScheduleData[];
}
export interface ScheduleData {
  tableid: number;
  week: string;
  days: ScheduleDay[];
}

function Schedule({ scheduleData }: ScheduleProps) {
  return (
    <Card className="max-w-screen-xl w-full mx-auto">
        <CardContent className='p-4'>
            <ScheduleTabs scheduleData={scheduleData} />
        </CardContent>
    </Card>
  )
}

export default Schedule
