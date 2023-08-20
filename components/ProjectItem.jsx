import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ content, contentUrl, title }) => {
  return (
    <div>
      <div className=" relative flex items-center justify-center h-auto  text-xl shadow-xl shadow-gray-400 w-full rounded-xl p-4  px-auto group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] z-0 ">
        <Image
          className=" rounded-lg group-hover:opacity-10"
          src={content}
          alt=""
        />
        <div className=" hidden group-hover:block absolute top-[50%] left-[20%] translate-x-[-20% translate-y-[-50%]">
          <h3
            className=" text-white text-center mb-3
                    tracking-widest"
          >
            {title}
          </h3>

          <Link href={contentUrl}>
            <p className="text-center  rounded-lg mx-2  bg-white font-bold cursor-pointer text-lg text-gray-800">
              more info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
