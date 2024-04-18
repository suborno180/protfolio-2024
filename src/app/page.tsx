import MySkiles_1 from "@/components/sections/MySkiles_1";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <main>
       <MySkiles_1/>
       <ProjectsSection isReflect={false}/>
       <ProjectsSection isReflect={true}/>
      </main>
    </>
  );
}