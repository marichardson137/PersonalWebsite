import {
    Link,
  } from "react-router-dom";

import { ProjectCard } from "../components/Information"

// Project Images

export default function Projects() {
    const projects = [
        {
            title: 'GalantJS',
            description: 'This was the Senior Design project I worked on at NC State under Dr. Matthias Stallmann. Specifically, our team did a complete re-write of the state management and rendering systems that power GalantJS. These changes improved the readability, robustness, and efficiency of the codebase. Additionally, we added support for layered graphs and their related algorithms.',
            technologies: ['JavaScript', 'React.js', 'Cytoscape', 'Data Structures', 'Algorithms'],
            link: 'https://galant.csc.ncsu.edu',
            images: ['./projects/Galant1.png', './projects/Galant2.png', './projects/Galant3.png', './projects/Galant4.png', './projects/Galant5.png' ],
        },
        {
            title: 'Prism',
            description: 'A cross-platform 3D modeling app for Windows, MacOS, Linux, and Web. Supports custom algorithms for mesh manipulation, triangulation, and rendering. Includes many basic operations- transform, rotate, scale, extrude, add, delete, undo/redo ... on faces, vertices, edges, and models. Users can import/export their work as an STL file.',
            technologies: ['C/C++', 'Raylib', 'WASM', 'JavaScript', 'CMake', 'OpenGL'],
            link: 'https://github.com/marichardson137/Prism',
            images: ['./projects/Prism1.png', './projects/Prism1.gif', './projects/Prism2.png', './projects/Prism3.png', './projects/Prism4.png'],
        },
        {
          title: 'PlantPal',
          description: 'A progressive web app (PWA) for home gardeners to track the growth of their plants and receive care recommendations. Features authentication with JWTs, resource/response caching, offline functionality, and push notifications. Four-container deployment with a reverse proxy, RESTful API, frontend, and MySQL database.',
          technologies: ['React', 'ExpressJS', 'MariaDB', 'Nginx', 'Docker', 'VMs'],
          link: 'https://github.com/marichardson137',
          images: ['./projects/PlantPal1.png', './projects/PlantPal2.png', './projects/PlantPal3.png', './projects/PlantPal4.png', './projects/PlantPal5.png', './projects/PlantPal6.png', './projects/PlantPal7.png', './projects/PlantPal8.png', './projects/PlantPal9.jpg'],
        },
        {
            title: 'Particle Simulation',
            description: 'An implementation of Verlet Integration for the purposes of simulating basic physics. Optimized to support tens of thousands of particles concurrently with instance rendering, multithreading, and KD-Tree spatial partitioning. Also includes custom camera modes, an OBJ file parser, and mouse picking to interact with the scene.',
            technologies: ['C/C++', 'OpenGL', 'GLSL', 'Multithreading', 'Optimization'],
            link: 'https://github.com/marichardson137/VerletIntegration',
            images: ['./projects/Verlet1.gif', './projects/Verlet2.gif', './projects/Verlet3.gif', './projects/Verlet4.gif'],
        },
    ];

    return (
        <div className="w-full h-full m-auto md:p-4 max-w-[1000px]">
            <div className="flex flex-col gap-5 justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    images={project.images}
                    index={index}
                    />
                ))}
                <div className="text-slate-400 text-lg p-10 text-center">
                    Check out my <Link to="https://github.com/marichardson137" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-200">GitHub</Link> for my most recent work.
                </div>
            </div>        
        </div>
    )
}