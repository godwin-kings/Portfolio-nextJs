import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdOutlineRestaurantMenu,MdOutlineMenu, MdDarkMode} from 'react-icons/md';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';




const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const[nav, setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
  }

  useEffect (() => {
    const handleShadow = () => {
      if ( window.scrollY >= 90)
      {setShadow(true)}
      else  {setShadow(false);
      }
  }

    window.addEventListener( 'scroll' , handleShadow)}, []
  );

    const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ""}>
    <div className={shadow ? ' fixed w-full h-[80px] bg-[#ecf0f3] flex justify-between z-10 items-center mx-auto px-4 top-0 darkMode: border-gray-900,  dark:bg-gray-900' : ' fixed w-full h-[80px] bg-[#ecf0f3] flex justify-between top-0 items-center mx-auto px-4 shadow-lg dark:bg-gray-900 z-10' }>
      
        <h3 className='text-black dark:text-[#ecf0f3]'>MY PORTFOLIO</h3>

        <div>
        <ul className='flex 2xs:max-md:hidden '>
          <Link href='/'><li className='p-4 dark:text-[#ecf0f3]'>Home</li></Link>
          <Link href='/#about'><li className='p-4 dark:text-[#ecf0f3]'>About</li></Link>
          <Link href='/#skills'><li className='p-4 dark:text-[#ecf0f3]'>Skills</li></Link>
          <Link href='/#project'><li className='p-4 dark:text-[#ecf0f3]'>Project</li></Link>
          <Link href='/#contact'><li className='p-4 dark:text-[#ecf0f3]'>Contact</li></Link>
            <li className='p-4 '>
              <form className='flex bg-white border-gray-500 border rounded-[15px] ' action="">
                <input className=' ml-4 w-full' type="text"  placeholder='search' />
                <AiOutlineSearch size={25}  className='dark:text-[#ecf0f3] justify-center  mr-2'/>
              </form>
            </li>
            <li className='p-4'>< BsFillMoonStarsFill className=' items-center dark:text-[#ecf0f3] ' onClick={() => setDarkMode(!darkMode)} /></li>
        </ul>
        </div>

        <div onClick={handleNav} className=' ml-0 md:hidden'>
          <MdOutlineMenu size={35} className='dark:text-[#ecf0f3]' />
        </div>
      

            {/*     MOBILE MENU */}

          
            <div className={!nav ? 'absolute left-[-100%] top-0 z-100' : ' fixed top-0 z-100 left-0 w-full h-screen bg-black/70 '}>
              <div className='Fixed left-0 top-0   pt-8 w-[60%] bg-white h-full px-4 border border-r-gray-200 z-10 ease-in-out duration-300 dark:bg-gray-900'>
            <div className='flex justify-between'>
            <h3 className='text-black dark:text-[#ecf0f3] '>MY PORTFOLIO</h3>
           <div onClick={handleNav} className='z-10 rounded-full shadow-lg shadow-gray-400 p-2'>
              <MdOutlineRestaurantMenu size={15} className='dark:text-[#ecf0f3]' />
            </div>

            </div>
            <ul>
            <li className='my-5 '>< BsFillMoonStarsFill className=' ml-3 dark:text-[#ecf0f3]' size={25} onClick={() => setDarkMode(!darkMode)}/></li>
              <form className='flex border-gray-500 border rounded-[15px] my-6 dark:bg-white' action="">
                <input className=' ml-4 w-full py-2 ' type="text"  placeholder='search' />
                <AiOutlineSearch size={35}  className=' items-end my-auto pr-2 cursor-pointer'/>
              </form > 
            <Link href='/'><li className='p-4 '>Home</li></Link>
          <Link href='/#about'><li className='p-4 dark:text-[#ecf0f3]'>About</li></Link>
          <Link href='/#skill'><li className='p-4 dark:text-[#ecf0f3]'>Skills</li></Link>
          <Link href='/#project'><li className='p-4 dark:text-[#ecf0f3]'>Project</li></Link>
          <Link href='/#contact'><li className='p-4 dark:text-[#ecf0f3]'>Contact</li></Link>
            
            </ul>
        </div>
          </div>
        
    </div>
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
  )
}

export default Navbar