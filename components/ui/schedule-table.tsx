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
      <TableHeader className='hidden md:display'>
        <TableRow>
          <TableHead>Weekday</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Class Topic</TableHead>
          <TableHead>Homework</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {days.map((day, index) => (
          <TableRow key={index}>
            <TableCell>{day.Weekday}</TableCell>
            <TableCell>{day.Date}</TableCell>
            <TableCell>{day['Class Topic']}</TableCell>
            <TableCell>{day.Homework}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScheduleTable;
