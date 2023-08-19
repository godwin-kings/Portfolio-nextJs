import React from "react";
import Link from "next/link";
import Image from "next/image";
import contact from "../public/asset/images/contact.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-full dark:bg-gray-900 ">
      <div className=" max-w-[1240px] w-full h-full px-12 gap-8 py-16 mx-auto">
        <h2
          className="text-xl 
            tracking-widest uppercase text-[#5651e5]"
        >
          contact
        </h2>
        <h1 className="py-4 dark:text-[#ecf0f3]">Get in touch</h1>

        <div className="grid md:grid-cols-5 md:gap-8 ">
          {/* Left side */}

          <div className="  md:col-span-2 h-full  text-xl shadow-xl shadow-gray-400 w-full rounded-xl p-4  ">
            <div className="md:p-4 h-full flex flex-col justify-evenly">
              <div className="">
                <Image className="rounded-xl" src={contact} alt='' />
              </div>
              <div>
                <h2 className="py-3 dark:text-[#ecf0f3]">Bassey Godwin</h2>
                <p className=" capitalize py-2 dark:text-[#ecf0f3] ">Frontend web developer</p>
                <p className="py-4 dark:text-[#ecf0f3]"> I am available to freelance or fulltime positions. Contact me for discussion. </p>
              </div>

            {/* SOCIAL ICON */}

            <div  className=' flex justify-center items-center gap-16 p-4 dark:text-[#ecf0f3] '  ><FaLinkedin size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
                <FaGithub size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
                <HiOutlineMail size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
               <BsFillPersonLinesFill size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
        </div>
            </div>

          </div>
          {/* Right side */}

          <div className=" w-full col-span-2 md:col-span-3 h-auto shadow-gray-400 rounded-xl md:p-4 xs:max-md:w-full">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col ">
                    <label className="text-sm py-2 dark:text-[#ecf0f3] uppercase" htmlFor="input">
                      Name
                    </label>
                    <input
                      type="text"
                      className=" border-2 md:mr-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-sm py-2 dark:text-[#ecf0f3] uppercase" htmlFor="input">
                      phone number
                    </label>
                    <input
                      type="text"
                      className=" border-2 md:ml-2 rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2 ">
                  <label className="text-sm py-2 dark:text-[#ecf0f3] uppercase" htmlFor="input">
                    email
                  </label>
                  <input
                    type="text"
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="text-sm py-2 dark:text-[#ecf0f3] uppercase" htmlFor="input">
                    message
                  </label>
                  <textarea
                    type="text"
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    rows={10}
                  />
                </div>
                <button className="w-full text-gray-100 h-12 mt-4 ">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SOCIAL COMPONENT */}

        <div className="py-16">
          <Link href="/">
            <div className=" flex justify-center items-center gap-16 p-4  ">
              <HiOutlineChevronDoubleUp
                size={45}
                className="rounded-full shadow-lg shadow-gray-400 dark:text-[#ecf0f3] p-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
