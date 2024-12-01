import { NavLink, useLocation } from "react-router-dom/dist/index.js";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion} from "framer-motion"

export function HeaderLink({ text, path, setPosition }) {
    const ref = useRef(null);
    const location = useLocation();

    const updatePosition = () => {
        if (ref.current && location.pathname === `${import.meta.env.BASE_URL}${path}`) {
            const { width } = ref.current.getBoundingClientRect();
            setPosition({
                left: ref.current.offsetLeft,
                width,
                opacity: 1,
            });
        }
    };

    useEffect(() => {
        // Update position when location or path changes
        updatePosition();

        // Add resize event listener
        window.addEventListener("resize", updatePosition);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("resize", updatePosition);
        };
    }, [location.pathname, path, setPosition]);

    return (
        <NavLink
            to={`${import.meta.env.BASE_URL}${path}`}
            end={path === ""}
            className="z-10 font-semibold text-lg py-2 px-2 text-slate-200 mix-blend-difference"
            ref={ref}
        >
            {text}
        </NavLink>
    );
}