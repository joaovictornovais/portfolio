import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gray-100">
        <div className="h-full pt-[72px] grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            <img className="hidden md:inline mx-auto shadow-md h-[450px] w-[450px] object-contain shadow-purple-900"
                src="https://github.com/joaovictornovais.png" alt="João Victor" />
            <div className="text-center md:text-start md:flex flex-col justify-between">
                <div className='flex flex-col gap-2'>
                    <h2 className="text-4xl font-semibold text-[#240046]">About me</h2>
                    <p className="text-xl text-zinc-800">I'm a FullStack Developer with a passion for solving people's real-life problems with code.</p>
                </div>
                <div>
                    <ul className="list-disc ml-8 text-xl text-zinc-800 mt-8">
                        <li>Graduating in Software Engineering</li>
                        <li>1 year experience</li>
                        <li>B2 Upper Intermediate English Level</li>
                        <li>Studying Cloud Solutions in AWS and Docker</li>
                    </ul>
                </div>
                <div className="flex gap-4 text-[#E0AAFF] mt-8">
                    <a href="https://linkedin.com/in/joaovictornovais" target="_blank">
                        <div className="group h-14 w-14 flex items-center justify-center rounded-full bg-[#3C096C] cursor-pointer hover:scale-115">
                            <FaLinkedinIn size={48} className="p-2 group-hover:p-3 transition-all duration-200"/>
                        </div>
                    </a>
                    <a href="https://github.com/joaovictornovais" target="_blank">
                        <div className="group h-14 w-14 flex items-center justify-center rounded-full bg-[#3C096C] cursor-pointer hover:scale-115">
                            <FaGithub size={48} className="p-2 group-hover:p-3 transition-all duration-200"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About