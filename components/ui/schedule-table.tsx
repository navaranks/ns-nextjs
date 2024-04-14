import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { ScheduleDay } from './schedule'; // Adjust the import path as needed

interface ScheduleTableProps {
  days: ScheduleDay[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ days }) => {
  if (!days || days.length === 0) {
    return <div>No schedule data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className='border-none md:border-b'>
          <TableHead className='hidden md:table-cell bg-gray-900 text-white text-center'>Weekday</TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-white text-center'>Date</TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-white text-center'>Class Topic</TableHead>
          <TableHead className='hidden md:table-cell bg-gray-900 text-white text-center'>Homework</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {days.map((day, index) => (
          <TableRow key={index}>
            <TableCell className='block md:table-cell text-center font-bold'>{day.Weekday}</TableCell>
            <TableCell className='block md:table-cell text-center font-bold'>{day.Date}</TableCell>
            <TableCell className='block md:table-cell text-center'>{day['Class Topic']}</TableCell>
            <TableCell className='block md:table-cell text-center'>{day.Homework}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScheduleTable;
