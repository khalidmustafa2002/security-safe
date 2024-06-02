import ChooseUs from "@/components/ChooseUs";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestomonialCards from "@/components/TestomonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1>Chai aur code</h1> */}
        <HeroSection/>
        <UpcomingWebinar/>
        <ChooseUs/>
        <TestomonialCards/>
        <Featured/>
        <Instructors/>
      </main>
    </>
  );
}
