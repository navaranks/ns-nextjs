"use client";

import React from 'react';
import HandoutTabs from '@/components/chemistry/handout-tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const ChemHandouts = () => {
  const tabsData = [
    { id: 0, title: 'Unit 1', subtitle:'Metrics', content: 'Unit 1 content 2' },
    { id: 1, title: 'Unit 2', subtitle:'Matter and Nomenclature', content: 'Unit 2 content' },
    { id: 2, title: 'Unit 3', subtitle:'Chemical Reactions', content: 'Unit 3 content' },
    { id: 3, title: 'Unit 4', subtitle:'Stoichiometry and The Mole', content: 'Unit 4 content' },
    { id: 4, title: 'Unit 5', subtitle:'History of Atomic Structure', content: 'Unit 5 content' },
    { id: 5, title: 'Unit 6', subtitle:'The Periodic Table', content: 'Unit 6 content' },
    { id: 6, title: 'Unit 7', subtitle:'Bonding and Lewis Structures', content: 'Unit 7 content' },
    { id: 7, title: 'Unit 8', subtitle:'Gases', content: 'Unit 8 content' },
    { id: 8, title: 'Unit 9', subtitle:'Kinetics', content: 'Unit 9 content' },
    { id: 9, title: 'Unit 10', subtitle:'Equilibrium', content: 'Unit 10 content' },
    { id: 10, title: 'Unit 11', subtitle:'Acids and Bases', content: 'Unit 11 content' },
    { id: 11, title: 'Unit 12', subtitle:'Thermodynamics', content: 'Unit 12 content' },
    { id: 12, title: 'Unit 13', subtitle:'Electrochemistry', content: 'Unit 13 content' },
    { id: 13, title: 'Unit 14', subtitle:'Organic Chemistry', content: 'Unit 14 content' },
    { id: 14, title: 'Unit 15', subtitle:'Nuclear Chemistry', content: 'Unit 15 content' },
  ];

  const borderColor = 'border-chem';

  return (
    <main className="flex flex-col px-4 gap-y-4">
      <Card className="max-w-screen-xl w-full mx-auto">
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl font-extrabold'>These are the handouts we will be using throughout the course!</CardTitle>
          <CardDescription><strong>Note:</strong>{" "}Check this page before class and add the necessary materials to your Chemistry Binder.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="max-w-screen-xl w-full mx-auto">
        <CardContent className='p-4'>
          <HandoutTabs tabsData={tabsData} borderColor={borderColor} />
        </CardContent>
      </Card>
    </main>
  );
};

export default ChemHandouts;


