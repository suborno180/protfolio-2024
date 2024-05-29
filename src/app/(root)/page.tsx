import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import MySkiles_1 from "@/components/sections/MySkiles_1";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Header from "@/components/Header";
import CountingSection from "@/components/sections/CountingSection";
import Link from "next/link";
import { All_Projects } from "@/utils/jsons/allprojectApiData";

export default function Home() {
  const allExperiences = [
    {
      src: "/experiences/html5-logo.png",
      alt: "HTML5"
    },
    {
      src: "/experiences/css-logo.png",
      alt: "CSS3",
    },
    {
      src: "/experiences/sass-1-logo.png",
      alt: "CSS3",
    },
    {
      src: "/experiences/javascript-logo.png",
      alt: "JavaScript",
    },
    {
      src: "/experiences/Node.js_logo.png",
      alt: "Node.js",
    },
    {
      src: "/experiences/React.webp",
      alt: "React",
    },
    {
      src: "/experiences/ExpressJS-logo.png",
      alt: "ExpressJS",
    },
    {
      src: "/experiences/nextjs-icon.png",
      alt: "nextjs",
    },
    {
      src: "/experiences/puppeteer-icon.png",
      alt: "Puppeteer",
    },
    {
      src: "/experiences/redux-logo.png",
      alt: "Redux",
    },
    {
      src: "/experiences/1024px-Socket-io.svg.png",
      alt: "Socket.io",
    },
    {
      src: "/experiences/framer-motion-logo.png",
      alt: "framer-motion",
    },
    {
      src: "/experiences/Figma-Logo.png",
      alt: "Figma",
    },
    {
      src: "/experiences/Tailwind_CSS_logo.svg.png",
      alt: "Tailwind_CSS",
    },
    {
      src: "/experiences/bootstrap-logo.png",
      alt: "Bootstrap",
    },
    {
      src: "/experiences/Mongo_DB.png",
      alt: "Mongo_DB",
    },
    {
      src: "/experiences/prisma-2.svg",
      alt: "Prisma ORM",
    },
    {
      src: "/experiences/adobe-photoshop-logo.png",
      alt: "Adobe-Photoshop",
    },
    {
      src: "/experiences/adobe-illustrator-logo.png",
      alt: "Adobe-Illustrator",
    },
    {
      src: "/experiences/Wordpress_Blue_logo.png",
      alt: "Wordpress",
    },
  ]
  return (
    <>
      <main>
       
        <HeroSection />
        <ExperienceSection
          title="My Experiences"
          logos={allExperiences}
        />
        <MySkiles_1 />
        {All_Projects.splice(0,5).map((item, index) => (
          <>
            <div key={index}>
              <ProjectsSection 
              image={item.image}
              url={item.url}
              title={item.title}
              description={item.description}
              isReflect={index % 2 ==  0 ? true : false} 
              />
            </div>
          </>
        ))}
        <div className="w-full grid place-content-center -mt-10">
          <Link href="/protfolio" className="btn btn-warning">See More</Link>
        </div>
        <CountingSection />
      </main>
    </>
  );
}
