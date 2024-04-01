"use client";

import React from 'react';
import HandoutTabs from '@/components/chemistry/handout-tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import UnitTable from './(handouts)/UnitTable';
import unitsData from './(handouts)/ChemHandoutsList.json';

const ChemHandouts = () => {
  const tabsData = unitsData.map(unit => ({
    id: unit.id,
    title: unit.title,
    subtitle: unit.subtitle,
    content: <UnitTable key={unit.id} unitTitle={unit.title} unitSubtitle={unit.subtitle} handouts={unit.handouts} />
  }));

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


