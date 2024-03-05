
import HeroCard from "@/components/home-page/hero-card";
import HomeCards from "@/components/home-page/home-cards";
import IconDivider from "@/components/home-page/icon-divider";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-6">
      <HeroCard />
      <h1 className='mt-4 text-3xl text-center text-white text-balance'>Hello Hello Hello HelloHello Hello Hello</h1>
      <IconDivider />
      <h3 className='mb-2 text-xl text-center text-white text-balance'>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</h3>
      <HomeCards />
    </div>
  );
}
