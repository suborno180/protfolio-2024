import PageTitle from "@/components/PageTitle";
import ProjectsSection from "@/components/sections/ProjectsSection";
import React from "react";

const Protfolio = () => {
  return (
    <div className="pt-20">
      <PageTitle title="Protfolio" />
      <main>
        <ProjectsSection isReflect={false} />
        <ProjectsSection isReflect={true} />
      </main>
    </div>
  );
};

export default Protfolio;
