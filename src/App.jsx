import {
    Outlet,
    Link,
    NavLink
  } from "react-router-dom";

  
  
import { HeaderLink } from "./components/Interactive";
import { motion } from "framer-motion";

import { FaHeart } from "react-icons/fa";

import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="relative w-full overscroll-none">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  ) 
}

function Header() {

    const [position, setPosition] = useState({
        left: 6,
        width: 65,
        opacity: 0
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }} 
            className="z-[100] relative mb-2 flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 pt-5 p-2 justify-center items-center mx-auto w-fit"
        >
            <HeaderLink setPosition={setPosition} text="Home" path=""  />
            <HeaderLink setPosition={setPosition} text="About" path="about" />
            <HeaderLink setPosition={setPosition} text="Projects" path="projects" />
            <Cursor  position={position} />
        </motion.div>
    )
}

function Cursor({ position }) {
    return (
        <motion.div 
            className="absolute z-0 bg-slate-200 rounded-xl h-10"
            animate={position}
        ></motion.div>
    )
}

function Footer() {
    return (
        <footer className="mt-20 mb-10">
            <p className="font-thin text-slate-400 text-center text-lg">© 2024 Michael Richardson</p>
        </footer>
    )
}

export default App
