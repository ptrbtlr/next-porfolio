import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoProject from "../public/assets/projects/crypto-project.png";
import vpnProject from "../public/assets/projects/vpn-project.png";
import netflixProject from "../public/assets/projects/netflix-project.png";
import recipeProject from "../public/assets/projects/recipe-project.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto Tracker"
            backgroundImg={cryptoProject}
            projectTech="React JS | Tailwind | Firebase"
            projectUrl="/crypto"
          />
          <ProjectItem
            title="VPN Website"
            backgroundImg={vpnProject}
            projectTech="React JS | Tailwind"
            projectUrl="/vpn"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixProject}
            projectTech="React JS | Tailwind | Firebase"
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Recipe Project"
            backgroundImg={recipeProject}
            projectTech="Next JS | Styled Components | Framer Motion"
            projectUrl="/recipe"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
