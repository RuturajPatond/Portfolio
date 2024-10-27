import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import pic from "../../public/photo.avif";
import { ImCross } from "react-icons/im";
import profile from '../../public/profile.jpg'
import {Link} from 'react-scroll'

export default function Navbar() {
    const[menu, setMenu] = useState(false);
    const nav = [
        {
            id: 1,
            text: "Home",
        },{
            id: 2,
            text: "About",
        },{
            id: 3, 
            text: "Portfolio",
        },{
            id: 5,
            text: "Contacts",
        },
    ]
  return (
    <>
    <div className="max-w-screen-2xl pt-3 shadow-md h-16  backdrop-blur-lg max-w-screen container mx-auto px-4 md:px-20 fixed top-0 left-0 right-0">
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
                <img className="h-12 w-12 rounded-full" src={profile} alt="NoImage"></img>
                <h1 className='text-xl cursor-pointer font-semibold'>Rutu
                    <span className='text-green-600 '>raj
                    </span>
                    <p className='text-sm'>Web Developer</p>
                </h1>
            </div>
            {/* desktop */}
            <div>
                <ul className='hidden md:flex space-x-16 text-lg'>
                    {nav.map(({id, text}) => (
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>
                            {text}
                        </Link>
                        </li>
                         
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className='md:hidden items-center'>{menu?<ImCross size={26}/>:<FiMenu size={18}/>}</div>
            </div>
        </div>
            {/* mobile */}
            {menu && 
            <div className='bg-white'>
                <ul className='md:hidden text-2xl flex flex-col items-center h-screen justify-center space-y-4'>
                    {nav.map(({id, text}) => (
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}><Link onClick={() => setMenu(!menu)}to={text} smooth={true} duration={500} offset={-70} activeClass='active'>
                            {text}
                        </Link></li>
                    ))}
                </ul>
            </div>
            }
    </div>
    </>
  )
}
