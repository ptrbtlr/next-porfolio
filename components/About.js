import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi, I&apos;m Peter, an Austin based experienced DevOps Engineer with a strong background in front-end development, specializing in leveraging DevOps methodologies to streamline software development processes. Skilled in automating deployment pipelines, optimizing scalability, and improving infrastructure efficiency. Dedicated to facilitating seamless collaboration between development and operations teams to accelerate time to market and enhance product quality. Adept at implementing CI/CD pipelines, configuring infrastructure as code, and managing containerization technologies. Proven ability to drive continuous improvement initiatives and foster a culture of innovation.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects down below!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            alt="macbook"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
