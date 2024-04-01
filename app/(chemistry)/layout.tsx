import BottomNav from '@/components/chemistry/bottomnav'
import ChemHero from '@/components/chemistry/chemhero'
import Navbar from '@/components/ui/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-full'>
        <Navbar bgColor='bg-[#DA4453]'/>
        <ChemHero />
        <section className='bg-[#F0F0F3] min-h-fit h-full'>
          <div className=" bg-[#F0F0F3] last:pb-24 md:last:pb-28">{children}</div>
          
        </section>
        <BottomNav />
    </div>
    
    
  )
}
