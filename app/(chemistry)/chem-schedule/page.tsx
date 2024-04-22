"use client";

import React, { useState, useEffect } from 'react';
import Schedule, { ScheduleData } from '@/components/ui/schedule'; // Import Schedule and ScheduleData
import ScheduleCard from '@/components/ui/schedule-card';

export default function ChemSchedule() {
    const [scheduleData, setScheduleData] = useState<ScheduleData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://script.google.com/macros/s/AKfycbxb0Kd3Lv15BBKb33s7YUSEyBkGTcB-sl11MuE0xGz_xBn8J7mMvPlKXrCKzW9yXdKEkQ/exec')
            .then(response => response.json())
            .then(data => {
                setScheduleData(data); // Ensure the API returns data in the expected format
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching schedule:', error);
                setIsLoading(false); // Ensure loading state is updated even on error
            });
    }, []);

    return (
        <main className='flex flex-col px-4 gap-y-4'>
            <ScheduleCard />
            <Schedule isLoading={isLoading} scheduleData={scheduleData}/>
        </main>
    );
}
