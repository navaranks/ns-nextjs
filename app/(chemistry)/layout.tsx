import BottomNav from '@/components/chemistry/bottomnav'
import ChemHero from '@/components/chemistry/chemhero'
import Navbar from '@/components/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col '>
        <Navbar bgColor='bg-[#DA4453]'/>
        <ChemHero />
        <section className='bg-[#F0F0F3]'>
          <div className=" bg-[#F0F0F3] ">{children}</div>
          <div className=" bg-[#F0F0F3] "></div>
        </section>
        <BottomNav />
    </div>
    
    
  )
}
