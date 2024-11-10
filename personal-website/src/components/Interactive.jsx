import {
    Link,
    NavLink
  } from "react-router-dom";


export function HeaderLink({ text, path }) {
    return (
        <NavLink 
            to={path}   
            className={({ isActive }) =>
                isActive ? "border-b-4 border-rose-500 text-white text-lg py-2 px-2 transition-all font-semibold" : "font-semibold border-b-4 border-transparent text-slate-300 hover:text-slate-100 hover:border-b-rose-500/20 text-lg py-2 px-2"
            }
        >
            {text}
        </NavLink>
    )
}