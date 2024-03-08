import BottomNav from '@/components/chemistry/bottomnav'
import Navbar from '@/components/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
        <Navbar bgColor='bg-[#DA4453]'/>
        <div className="flex-grow p-6 md:p-12">{children}</div>
        <BottomNav />
    </div>
    
  )
}
