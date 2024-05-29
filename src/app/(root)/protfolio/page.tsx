import PageTitle from "@/components/PageTitle";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { All_Projects } from "@/utils/jsons/allprojectApiData";
import React from "react";

const Protfolio = () => {
  return (
    <div className="pt-20">
      <PageTitle title="Protfolio" />
      <main>
        {All_Projects.map((item, index) => (
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
      </main>
    </div>
  );
};

export default Protfolio;
