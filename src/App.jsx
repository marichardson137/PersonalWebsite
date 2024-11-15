import {
    Outlet,
    Link,
    NavLink
  } from "react-router-dom";

import { HeaderLink } from "./components/Interactive";

function App() {
  return (
    <div className="w-full h-full overscroll-none">
        <Header/>
        <Outlet/>
    </div>
  )
}

function Header() {
    return (
        <div className="mb-2 flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 pt-5 p-2 justify-center items-center">
            <HeaderLink text="Home" path=""  />
            <HeaderLink text="About" path="about" />
            <HeaderLink text="Projects" path="projects" />
            <HeaderLink text="Connect" path="connect" />
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <p>Michael Richardson</p>
        </footer>
    )
}

export default App
