import React from 'react'
import profile from '../../public/profile.jpg'
import pic from "../../public/photo.avif";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { ReactTyped } from 'react-typed';
import newphoto from '../../public/newphoto.jpg'
export default function Home() {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row items-center space-x-5'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 mt-8'>
                <span className='text-xl'>Welcome In My Feed</span>
                <div className='flex space-x-2 font-bold text-2xl md:text-4xl'>
                    <h1>Hello, I'm a</h1>
                    {/* <span className='text-red-700 font-bold'>Developer</span> */}
                    <ReactTyped 
                        className='text-red-700 font-bold'
                        strings={["Developer","Coder","Programmer"]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop={true}
                    />
                </div>
                <br/> 
                <p className='text-sm md:text-md text-justify'>
                A dynamic Web Developer specializing in the MERN stack, equipped with a solid foundation in IT and a commitment to crafting impactful and visually stunning software solutions.</p>
            <br/>
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className='text-bold space-y-3'>
                    <h3>Available On:</h3>
                    <div className='flex space-x-4'>
                        <a href='https://leetcode.com/u/Ruturaj_720/' target='_blank'>
                            <SiLeetcode className='hover:hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        </a>
                        <a href='https://www.linkedin.com/in/ruturaj-patond-06b212251/' target='_blank'>
                            <FaLinkedin className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        </a>
                        <a href='https://github.com/RuturajPatond' target='_blank'>
                        <FaGithub className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        </a>
                        <a href='https://t.me/ruturaj_720' target='_blank'>
                        <FaTelegram className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        </a>
                    </div>
                </div>
                <div className='text-bold space-y-3'>
                    <h3>Currently Working On :</h3>
                    <div className='flex  md:ml-0 ml-6 space-x-4'>
                        <FaReact className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        <TbBrandJavascript className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        <RiTailwindCssFill className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                        <DiNodejs className='hover:scale-110 duration-300 text-xl md:text-3xl cursor-pointer'/>
                    </div>
                </div>
                </div>
            </div>
            <div className='md:w-1/2 md:ml-4 md:mt-20 order-1 mt-8'>
                <img className="rounded-full md:w-[450px] md:h-[450px]" src={newphoto} alt=''></img>
            </div>
        </div>
    </div>
    <hr/>
    </>
  )
}
