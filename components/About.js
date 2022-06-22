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
            I am an Irish 🇮🇪, Toronto 🇨🇦 based Web Developer who worked in
            Retail Management for 8 years. I have dabbled with programming
            languages and computers in general from a very young age. The
            pandemic made me put my head down and work toward what I&apos;m
            passionate about. I hope to continue learning and achieve my dream
            of switching careers. I actively use Udemy, TeamTreeHouse,
            FreeCodeCamp and more, to bring my skills to a new level as I look
            for a full-time role. I look forward to hearing from you.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects!
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
