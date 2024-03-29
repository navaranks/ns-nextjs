import React, { useEffect, useState, useRef } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "../ui/select";


interface TabData {
    id: number;
    title: string;
    subtitle: string;
    content: string;
}

interface HandoutTabsProps {
    tabsData: TabData[];
    borderColor: string;
}
const HandoutTabs: React.FC<HandoutTabsProps> = ({ tabsData, borderColor }) => {
   
    const [value, setValue] = useState<number>(0);
    const tabsRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tabsRef.current && indicatorRef.current) {
            const tabs= tabsRef.current.children;
            const activeTab = tabs[value + 1] as HTMLElement;
            indicatorRef.current.style.top= `${activeTab.offsetTop }px`;
            indicatorRef.current.style.height= `${activeTab.clientHeight}px`;
    }

    }, [value]);

    const handleChange = (index: number) => {
        setValue(index);
        
    };

    return (
        <div className=" flex flex-col md:flex-row">
            {/* Desktop Tabs */}
            <div ref={tabsRef} className="relative hidden md:flex flex-col border-r border-gray-200 ">
                <div ref={indicatorRef} className={`absolute right-0 border-r-4 ${borderColor} transition-all duration-300`}></div>
                {tabsData.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-5 hover:bg-chem/20 hover:animate-pulse hover:rounded-lg  ${value === tab.id ? 'font-extrabold ' : ''}`}
                        onClick={() => handleChange(tab.id)}
                    >
                        {tab.title}
                    </button>
                    
                ))}
            </div>

            {/* Mobile Selector */}
            <Select value={tabsData[value].id.toString()} onValueChange={(val: string) => handleChange(parseInt(val))}>
                <SelectTrigger className="md:hidden">
                    <SelectValue>{tabsData[value].title + ' - ' + tabsData[value].subtitle}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Handouts for</SelectLabel>
                    {tabsData.map((tab) => (
                        <SelectItem key={tab.id} value={tab.id.toString()}>
                            {tab.title + ' - ' + tab.subtitle} 
                        </SelectItem>
                    ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* Content */}
            <div className="flex-grow py-4 md:p-4">
                {tabsData[value].content}
            </div>
        </div>
    );
};

export default HandoutTabs;
