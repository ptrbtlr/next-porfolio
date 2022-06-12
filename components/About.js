import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            rem asperiores ullam facere placeat, mollitia, dolorum veniam
            architecto exercitationem natus voluptatum eveniet ducimus
            doloremque magni quam. Blanditiis sint adipisci eos nam modi
            accusamus facere quam architecto exercitationem praesentium debitis
            eveniet officiis, laboriosam ipsum tenetur libero quibusdam sit unde
            quod! Odit porro iure aut quas illo?
          </p>
          <p className="py-2 text-gray-600">
            I am Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            rem asperiores ullam facere placeat, mollitia, dolorum veniam
            architecto exercitationem natus voluptatum eveniet ducimus
            doloremque magni quam. Blanditiis sint adipisci eos nam modi
            accusamus facere quam architecto exercitationem praesentium debitis
            eveniet officiis, laboriosam ipsum tenetur libero quibusdam sit unde
            quod! Odit porro iure aut quas illo?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of latest projects!
          </p>
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
