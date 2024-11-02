import React from 'react'
import java from '../../public/java.png'
import css from '../../public/css.jpg'
import html from '../../public/html.png'
import reactjs from '../../public/reactjs.png'
import tailwind from '../../public/tailwind.png'
import javascript from '../../public/javascript.png'
import python from '../../public/python.webp'
import mongodb from '../../public/mongodb.jpg'

export default function Portfolio() {
    const icons = [
        {
            id: 1,
            logo: java,
            name: "java",
            desc: "Currently learning Java with a focus on Data Structures and Algorithms (DSA)"
        },
        {
            id: 2,
            logo: css,
            name: "css",
            desc: "Skilled in creating responsive and visually appealing designs."
        },
        {
            id: 3,
            logo: html,
            name: "html",
            desc: "Strong understanding of semantic markup and accessibility."
        },
        {
            id: 4,
            logo: reactjs,
            name:   "react",
            desc: "Experienced in building dynamic single-page applications."
        },
        {
            id: 5,
            logo: javascript,
            name: "javascript",
            desc: "Solid foundation in both frontend and backend programming."
        },
        {
            id: 6,
            logo: tailwind,
            name: "tailwind",
            desc: "Proficient in designing user interfaces efficiently."
        },
        {
            id: 7,
            logo: python,
            name: "python",
            desc: "Proficient in Python with a strong foundation in data analysis, machine learning."
        }, 
        {
            id: 8,
            logo: mongodb,
            name: "mongodb",
            desc: "Expertise in NoSQL database management and data modeling."
        }
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div>
            <h1 className='font-semibold text-3xl mb-5'>Skills </h1>
            <div className='grid grid-rows-1 md:grid-cols-4 gap-8'>
                {icons.map(({logo, name, id, desc}) => (
                    <div key={id} className='md:w-[250px] md:h-[250px] md:ml-0 ml-4 mr-4 space-x-2 shadow-lg p-1 border-[4px] border-gray-300 rounded-lg cursor-pointer hover:scale-110 duration-300'>
                        <img src={logo} className='w-[120px] h-[120px] mt-1 ml-1 rounded-full border-4' alt=''></img>
                        <div>
                            <h2 className='px-2 font-semibold text-xl'>{name}</h2>
                            <p className='ml-2 text-sm text-gray-500'>{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
