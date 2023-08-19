import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Stationary from '../public/asset/images/stationary-2.png'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen px-10 flex text-center items-center py-16 dark:bg-gray-900 ">
      <div className="max-w-[1240px] h-full px-4 mx-auto grid md:grid-cols-3 py-16 ">
        <div className="md:col-span-2 md:text-left p-4 justify-center items-center">
            <h2 className='uppercase text-2xl text-md tracking-widest text-[#5651e5]'>
            About
          </h2>
          <h1 className='py-4 dark:text-[#ecf0f3] '>Who I Am</h1>
          <p className='py-2 dark:text-[#ecf0f3] text-gray-600 tracking-widest '>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
         
          <Link href='/'>
            <p className='py-2 text-gray-600 underline cursor-pointer dark:text-[#ecf0f3]'>
              Check out some of my latest projects.
            </p>
          </Link>
            
            </div>
            <div className=' w-full h-auto mx-auto flex flex-col justify-center items-center shadow-xl shadow-gray-400 rounded-xl p-4 hover:scale-105 duration-300'>
            <Image src={Stationary} className='  ' />
            </div>
          
          </div>
          </div>
          
  )
}

export default About