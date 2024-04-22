import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import MySkiles_1 from "@/components/sections/MySkiles_1";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Header from "@/components/Header"
import CountingSection from "@/components/sections/CountingSection";

export default function Home() {
  return (
    <>
      <main>
        <Header/>
        <HeroSection />
        <ExperienceSection />
        <MySkiles_1 />
        <ProjectsSection isReflect={false} />
        <ProjectsSection isReflect={true} />
        <CountingSection/>
      </main>
    </>
  );
}
