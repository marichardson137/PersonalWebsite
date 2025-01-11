import headshot from '../assets/mountain.png';

import { motion } from 'framer-motion';

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiRemixRunFill } from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

import { SiSocketdotio } from "react-icons/si";
import { SiRaylib } from "react-icons/si";
import { SiMariadb } from "react-icons/si";


import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";



import {
    Link,
  } from "react-router-dom";


export default function Home() {
    return (
        <div className="h-full p-4">
           <div className="mx-auto text-slate-100 text-xl flex flex-col gap-4 md:min-h-[500px] md:max-h-[90vh] md:max-w-[750px] md:grid md:grid-cols-12 md:grid-rows-12 ">
                <motion.div 
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="bg-primary-base p-6 rounded-xl col-span-8 row-span-3">
                    <h2 className="text-2xl font-semibold">Welcome,</h2>
                    <p className="mt-1 ml-1 font-extralight">My name is <span className="font-medium">Michael Richardson</span> and I'm a full-stack developer and student from North Carolina.</p>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.10 }}
                className="bg-primary-base p-6 rounded-xl col-span-4 row-span-6 flex flex-col">
                    <h2 className="text-2xl font-medium">Other Links</h2>
                    <div className="flex-grow p-6 grid grid-rows-1 grid-cols-4 md:grid-rows-2 md:grid-cols-2 text-slate-400 gap-y-4 gap-x-8 text-6xl place-items-center">
                    <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/michael-richardson-1aa3001a2/" className="no-hover:scale-100 hover:scale-[110%] active:scale-100 duration-400 hover:text-slate-100 transition-all">
                            <FaLinkedin />
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/marichardson137" className="no-hover:scale-100 hover:scale-[110%] active:scale-100 duration-400 hover:text-slate-100 transition-all">
                            <FaGithubSquare />
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/@gr4dience" className="no-hover:scale-100 hover:scale-[110%] active:scale-100 duration-400 hover:text-slate-100 transition-all">
                            <FaSquareYoutube />
                        </Link>
                        <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/michaelrichardsonnn/" className="no-hover:scale-100 hover:scale-[110%] active:scale-100 duration-400 hover:text-slate-100 transition-all">
                            <FaSquareInstagram />
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="border-2 border-primary-light p-4 rounded-xl col-span-4 row-span-2 flex items-center justify-center">
                    <h2 className="cursor-default font-medium text-2xl text-center text-nowrap">Chapel Hill, NC</h2>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}      
                transition={{ delay: 0.14 }}                
                className="bg-primary-base rounded-xl overflow-hidden col-span-4 row-span-5">
                    <Link to="about" className="col-span-4 row-span-6">
                        <img className="rounded-xl object-cover scale-125 w-full h-full" src={headshot}/>
                    </Link>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}      
                transition={{ delay: 0.16 }}                
                className="bg-primary-base p-6 rounded-xl col-span-4 row-span-7">
                    <h2 className="text-2xl font-medium">My Favorites</h2> {/* <FaHeart className="mr-1 mb-1 leading-4 inline-block"/>  */}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 sm:p-2 text-[2.5rem] text-slate-400">
                        <FaReact className="hover:text-slate-100"/>
                        <RiRemixRunFill className="hover:text-slate-100"/>
                        <RiTailwindCssFill className="hover:text-slate-100"/>
                        <SiTypescript className="hover:text-slate-100"/>
                        <FaPython className="hover:text-slate-100"/>
                        <SiCplusplus className="hover:text-slate-100"/>
                        <SiSocketdotio className="hover:text-slate-100"/>
                        <SiRaylib className="hover:text-slate-100"/>
                        <SiMariadb className="hover:text-slate-100"/>
                        <FaGithub className="hover:text-slate-100"/>
                        <FaDocker className="hover:text-slate-100"/>
                        <FaAws className="hover:text-slate-100"/>
                    </div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}      
                transition={{ delay: 0.18 }}                
                className="border-2 border-primary-light p-4 rounded-xl col-span-4 row-span-2 flex items-center justify-center">
                    <h2 className="cursor-default font-medium text-2xl text-center text-nowrap">Software Engineer</h2>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.20 }}
                className="bg-primary-base p-4 rounded-xl col-span-8 row-span-4 flex flex-col gap-2 justify-center items-center">
                    <p className="text-2xl font-light text-center">"In theory, there is no difference between theory and practice. In practice, there is."</p>
                    <p className="text-center font-extralight">- Jan L. A. van de Snepscheut</p>
                </motion.div>
           </div>
        </div>
    )
}