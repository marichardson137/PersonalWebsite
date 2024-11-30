import {
    Link,
    NavLink
  } from "react-router-dom/dist/index.js";

import { useRef } from 'react';

export function HeaderLink({ text, path, setPosition }) {

    const ref = useRef(null);

    return (
        <NavLink 
            ref={ref}
            onClick={ () => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1
                })
            }}
            to={`${import.meta.env.BASE_URL}${path}`}
            end={path === ""}   
            className="z-10 font-semibold text-lg py-2 px-2 text-white mix-blend-difference"
        >
            {text}
        </NavLink>
    )
}