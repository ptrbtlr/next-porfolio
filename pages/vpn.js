import Image from "next/image";
import React from "react";
import vpnProject from "../public/assets/projects/vpn-project.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const vpn = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={vpnProject}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">VPN Business Project</h2>
          <h3>React JS | Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project is created with Create React App. This is mainly a
            design-focused project with the intention to mock a real business
            website. I used a package called React-Typed to create a typewriter
            effect in the site's hero section. Tailwind and React Icons are used
            to style the site also.
          </p>

          <a href="https://vpn-project-umber.vercel.app/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Live Version</button>
          </a>

          <a href="https://github.com/ciandevelops/vpn-project" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Icons
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-Typed (NPM)
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default vpn;
