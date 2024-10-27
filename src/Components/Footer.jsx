import React from 'react'
import {FaInstagram, FaLinkedinIn, FaTwitter, FaTelegram} from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer>
        <div>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex space-x-3'>
                    <a className='hover:scale-110 duration-200' href='https://www.instagram.com/ruturaj_720/' target='_blank'>
                        <FaInstagram size={20}/>
                    </a>
                    <a className='hover:scale-110 duration-200' href='https://www.linkedin.com/in/ruturaj-patond-06b212251/' target='_blank'>
                        <FaLinkedinIn size={20}/>
                    </a>
                    <a className='hover:scale-110 duration-200' href='' target='_blank'>
                        <FaTwitter size={20}/>
                    </a>
                    <a className='hover:scale-110 duration-200' href='https://t.me/ruturaj_720' target='_blank'>
                        <FaTelegram size={20}/>
                    </a>
                </div>
                <div>
                    <p className='text-sm mt-2'>+91 7498410212</p>
                </div>
                <div className='border-t border-black p-2'>
                    <p className='text-sm mt-2'>&copy; 2024 Your Company. All Rights reserved.</p>
                    <p className='text-sm ml-16'>Supportive Partner</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
