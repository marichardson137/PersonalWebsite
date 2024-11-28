import {
    Outlet,
    Link,
    NavLink
  } from "react-router-dom";

import { HeaderLink } from "./components/Interactive";

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
    return (
        <div className="mb-2 flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 pt-5 p-2 justify-center items-center">
            <HeaderLink text="Home" path=""  />
            <HeaderLink text="About" path="about" />
            <HeaderLink text="Projects" path="projects" />
        </div>
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
