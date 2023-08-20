import React from "react";
import Image from "next/image";
import html from "../public/asset/skills/html.png";
import firebase from "../public/asset/skills/firebase.png";
import css from "../public/asset/skills/css.png";
import Javascript from "../public/asset/skills/javascript.png";
import node from "../public/asset/skills/node.png";
import react from "../public/asset/skills/react.png";
import tailwind from "../public/asset/skills/tailwind.png";
import github from "../public/asset/skills/github.png";
import bootstrap from "../public/asset/skills/bootstrap.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full dark:bg-gray-900 lg:h-screen px-16 ">
      <div className="max-w-[1240px] h-full mx-auto flex flex-col justify-center  p-4 ">
        <h2 className=" text-2xl px-4 tracking-widest uppercase text-[#0a129f]">
          {" "}
          skills
        </h2>
        <h1 className=" p-4 pb-16 capitalize dark:text-[#ecf0f3]">
          what i can use
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 dark:text-[#ecf0f3]">
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={html} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">html</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={css} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">css</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={Javascript} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">javascript</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center  mx-auto">
                <Image
                  src={github}
                  width={64}
                  height={64}
                  alt="/"
                  className=" bg-gray-400"
                />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">github</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={firebase} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">firebase</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={react} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">react</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={tailwind} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">tailwind</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={node} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">node</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={html} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">html</h3>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-xl shadow-xl dark:shadow-gray-400 hover:scale-105 ease-in duration-300">
            <div className=" grid grid-cols-2 gap-4 justify-center items-center">
              <div className=" flex flex-col justify-center items-center mx-auto">
                <Image src={bootstrap} width={64} height={64} alt="/" />
              </div>
              <div className=" flex flex-col justify-center items-center">
                <h3 className=" uppercase">boostrap</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
