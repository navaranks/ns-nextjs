import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'
import ScheduleTable from './schedule-table'

function ScheduleAccordion() {
  return (
    <Accordion
            type="single"
            collapsible
            className="w-full space-y-2 bg-white"
          >
            <AccordionItem
              className="rounded-lg border-chem bg-chem "
              value="item-1"
            >
              <AccordionTrigger className="bg-chem text-white rounded-lg  hover:bg-[#e16975]">
                <span className="flex-1 font-bold text-center">
                  Week 1:
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-[#f4f4f4] border border-chem rounded-b-lg p-4">
                <ScheduleTable/>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
  )
}

export default ScheduleAccordion