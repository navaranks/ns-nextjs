import BottomNav from '@/components/chemistry/bottomnav'
import ChemHero from '@/components/chemistry/chemhero'
import Navbar from '@/components/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen md:overflow-hidden'>
        <Navbar bgColor='bg-[#DA4453]'/>
        <ChemHero />
        <div className="flex-grow p-6 md:p-12 bg-[#F0F0F3]">{children}</div>
        <BottomNav />
    </div>
    
  )
}
