import React from 'react'
import { Card, CardContent, CardHeader } from './card'
import ScheduleTabs from './schedule-tabs'

function Schedule() {
  return (
    <Card className="max-w-screen-xl w-full mx-auto">
        <CardContent className='p-4'>
            <ScheduleTabs />
        </CardContent>
    </Card>
  )
}

export default Schedule