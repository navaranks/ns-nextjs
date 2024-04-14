import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import ScheduleTable from "./schedule-table";
import { ScheduleData } from "./schedule";

interface ScheduleAccordionProps {
  schedule: ScheduleData;
  isLast: boolean;
  
  
}

const ScheduleAccordion: React.FC<ScheduleAccordionProps> = ({ schedule, isLast }) => {
  
  return (
    <Accordion type="single" collapsible defaultValue={isLast ? `item-${schedule.tableid}` : undefined}  className="w-full space-y-2 bg-white">
      <AccordionItem className="rounded-lg border-chem bg-chem " value={`item-${schedule.tableid}`}>
        <AccordionTrigger className="bg-chem text-white rounded-lg  hover:bg-[#e16975] px-4">
          <span className="flex-1 font-bold text-center">Week {schedule.tableid}: {schedule.week}</span>
        </AccordionTrigger>
        <AccordionContent className="bg-[#f4f4f4] border pb-0 border-chem rounded-b-lg ">
          
            <ScheduleTable days={schedule.days} />
          
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ScheduleAccordion;
