import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table'

function ScheduleTable() {
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
        <TableRow>
          <TableCell>Monday</TableCell>
          <TableCell>1/8</TableCell>
          <TableCell>Nothing</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Tuesday</TableCell>
          <TableCell>1/9</TableCell>
          <TableCell>Nothing</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Wednesday</TableCell>
          <TableCell>1/10</TableCell>
          <TableCell>Nothing</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thursday</TableCell>
          <TableCell>1/11</TableCell>
          <TableCell>Nothing</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Friday</TableCell>
          <TableCell>1/12</TableCell>
          <TableCell>Nothing</TableCell>
          <TableCell>Test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default ScheduleTable