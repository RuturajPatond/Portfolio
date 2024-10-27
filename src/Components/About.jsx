import React from 'react'

export default function About() {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='text-justify'>
        <h1 className='font-semibold text-3xl'>About :)</h1>
        <p className='font-bold mt-4 text-lg'>I'm Ruturaj Patond,</p> 
        <p className='mt-2'>Armed with a background in Information Technology, 
            I am devoted to turning innovative concepts into reality through exceptional 
            web applications. My objective is to deliver unparalleled user experiences 
            while continuously refining my skills with cutting-edge technologies.
        </p>
        <br />
        <h3 className='text-xl text-green-600 font-semibold'>Education & Training</h3>
        <span>
         • [B.E], [MMCOE,Pune], [2026]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
         Skills & Expertise
        </h1>
        <span>
          <p>• Robust proficiency in programming languages such as Java, python and javascript</p>
          <p>• Hands-on experience with modern frameworks and technologies.</p>
          <p>• Strong foundation in Data Structures and Algorithms (DSA) enables me to develop efficient solutions.</p>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
        <p>• President of the IT Tech Club at Marathwada Mitra Mandal College of Engineering</p>
        <p>• Throughout my career, I have successfully contributed to various projects that highlight my expertise in web development.</p>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <p>• In Top 15 Teams from 1500+ participants in CodeLite Hackathon</p>
          <p>• JavaMania i.e College Event runner-up</p>
          <p>• LeetCode: 450+</p>
        </span>
        
        </div>
    </div>
  )
}
