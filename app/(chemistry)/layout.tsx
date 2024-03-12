import BottomNav from '@/components/chemistry/bottomnav'
import ChemHero from '@/components/chemistry/chemhero'
import Navbar from '@/components/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen md:overflow-hidden'>
        <Navbar bgColor='bg-[#DA4453]'/>
        <ChemHero />
        <div className="flex-grow w-screen bg-[#F0F0F3] pb-24">{children}</div>
        <BottomNav />
    </div>
    
  )
}
