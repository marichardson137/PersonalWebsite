import { ProjectCard } from "../components/Information"

export default function Projects() {
    const projects = [
        {
          title: 'Prism',
          description: 'A personal portfolio website to showcase my projects and skills.',
          technologies: ['C/C++', 'JavaScript', 'WASM', 'Raylib'],
          link: 'https://www.example.com',
          imageUrl: 'https://via.placeholder.com/400',
        },
        {
          title: 'Plant Tracker App',
          description: 'An app to track the growth and health of various plants.',
          technologies: ['React', 'Node.js', 'MongoDB'],
          link: 'https://www.example.com',
          imageUrl: 'https://via.placeholder.com/400',
        },
    ];

    return (
        <div className="w-full h-full m-auto p-4 max-w-[800px]">
            <div className="flex flex-col gap-4 justify-center items-center">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    imageUrl={project.imageUrl}
                    />
                ))}
            </div>        
        </div>
    )
}