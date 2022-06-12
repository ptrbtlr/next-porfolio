import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoProject from "../public/assets/projects/crypto-project.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto Tracker"
            backgroundImg={cryptoProject}
            projectTech="React JS | Tailwind"
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Crypto Tracker"
            backgroundImg={cryptoProject}
            projectTech="React JS | Tailwind"
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Crypto Tracker"
            backgroundImg={cryptoProject}
            projectTech="React JS | Tailwind"
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Crypto Tracker"
            backgroundImg={cryptoProject}
            projectTech="React JS | Tailwind"
            projectUrl="/crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
