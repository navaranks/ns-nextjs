import StickyBottom from "@/components/StickyBottom"
import MainNav from "@/components/mainnav";
import { Home, Search, Bell, Mail } from 'lucide-react';


export default function Layout({ children }: { children: React.ReactNode }) {
  const heroImage = '/images/cbanner.png';

  const activeColor = '#4A89DC';

  const navLinks = [
    { href: '/phys-home', label: 'Home', icon: <Home />, isActive: true },
    { href: '/phys-schedule', label: 'Schedule', icon: <Search />, isActive: false },
    { href: '/phys-info', label: 'Info', icon: <Bell />, isActive: false },
    { href: '/phys-handouts', label: 'Handouts', icon: <Mail />, isActive: false },
  ];
  return (
    <div className='flex flex-col h-full'>
        <MainNav bgColor='from-[#5D9CEC] to-[#4A89DC]'/>
        <section className='bg-[#F0F0F3] min-h-fit h-full'>
          <div className=" bg-[#F0F0F3] last:pb-24 md:last:pb-28">{children}</div>
          
        </section>
        <StickyBottom links={navLinks} activeColor={activeColor}/>
    </div>
    
    
  )
}
