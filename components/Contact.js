import Link from "next/link";
import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v9kjupr", //your service id
        "template_vrch645", //your template id
        form.current,
        "yhlNADGvBYw_dcwoq" //your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div>
        <Toaster />
      </div>
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch!</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-4">Peter Butler</h2>
                <p>Devops | Front-End Developer</p>
                <p className="py-4">
                  Contact me!
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase text-[#5651E5]">
                  Connect With Me!
                </p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/cpeter-butler/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ptrbtlr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <Link href="/#contact">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <a download href="">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#5651e5] ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm uppercase py-2">
                      Phone Number{" "}
                      <span className="text-red-400 text-xs">
                        (*not required)
                      </span>
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="user_phone"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-sm uppercase py-2">Email</label>
                    <input
                      type="email"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="text-sm uppercase py-2">Subject</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="user_subject"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm uppercase py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="message"
                    required
                  ></textarea>
                </div>
                <br />
                <div className="flex flex-col py-2">
                  <input
                    className="w-full p-4 bg-[#5651e5] text-gray-100 mt-4 cursor-pointer"
                    type="submit"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
