import headshot from '../assets/headshot.jpg';

// Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

import {
    Link,
  } from "react-router-dom";


export default function Home() {
    return (
        <>
        <div className="w-full p-4 gap-6 md:gap-8 flex flex-col md:flex-row justify-center items-center overflow-x-hidden">
            <div className="cursor-default p-2 z-10 flex flex-col items-center md:items-start text-nowrap text-2xl sm:text-3xl lg:text-4xl">
                <h3 className="text-slate-300 font-extralight ">
                    Hi there! My name is
                </h3>
                <h1 className="font-semibold lg:py-2 text-slate-200 transition-all duration-300 hover:text-transparent bg-clip-text bg-colorful-gradient text-4xl sm:text-5xl lg:text-6xl">
                    Michael Richardson
                </h1>
                <h3 className="text-slate-400 font-thin">
                    Software Engineer from NC
                </h3>
            </div>
            <Link to="about" className="self-center w-3/4 sm:w-1/2 max-w-[500px]">
                <img className="transition-all hover:ring-4 ring-slate-200 shadow-lg rounded-full aspect-square object-cover" src={headshot}/>
            </Link>
        </div>
        <div className="my-2 flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 p-4 text-slate-400 text-5xl sm:text-6xl">
            <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/michael-richardson-1aa3001a2/" className="hover:text-slate-100 transition-colors">
                <FaLinkedin />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://github.com/marichardson137" className="hover:text-slate-100 transition-colors">
                <FaGithubSquare />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://www.youtube.com/@gr4dience" className="hover:text-slate-100 transition-colors">
                <FaSquareYoutube />
            </Link>
            <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/michaelrichardsonnn/" className="hover:text-slate-100 transition-colors">
                <FaSquareInstagram />
            </Link>

        </div>
        </>
    )
}