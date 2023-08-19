import React from "react";
import {FaLinkedin,FaGithub,
} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import about from "../public/asset/images/about.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero" className="w-full md:h-screen p-2 grid text-center items-center mt-16 dark:bg-gray-900">
      <div className="max-w-[1240px] px-4 mx-auto grid md:grid-cols-2  ">
        <div className="col-span-1 flex md:text-left p-4">
          <div className="w-full h-auto mx-auto flex flex-col justify-center items-center ">
            <Image
              src={about}
              style={{ width: "180px", borderRadius: "50%" }}
              className=" "
              alt=""
            />
          </div>
      </div>
          <div className=" flex flex-col justify-center items-center md:max-2xl:text-left p-8  dark:text-[#ecf0f3]">
            <h4 className=" text-pink-600 text-2xl py-2 tracking-widest md:text-left ">Hi! my name is</h4>
            <h1 className=" py-4 ">Bassey Godwin </h1>
            <h3 className=" text-2xl py-4">I am a full-stack Developer</h3>
            <h3 className=" ">I'm a full-stack developer specialize in building web application with exceptional design and digital experience. 
            Currently, i'm focused on building responsive full-stack web applications.
            </h3>
          </div>
        </div>
        {/*     SOCIAL */}
        <div  className=' flex justify-center items-center dark:text-[#ecf0f3] gap-16 p-2  '  ><FaLinkedin size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
                <FaGithub size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
                <HiOutlineMail size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
               <BsFillPersonLinesFill size={45} className="rounded-full shadow-lg shadow-gray-400 p-2"/>
        </div>
    </div>
  );
};

export default Hero;
