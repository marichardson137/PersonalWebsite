
export const ProjectCard = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <div className="w-[90%] bg-slate-700 flex flex-col p-4 rounded-xl border border-white/20 text-white">
        <div className="w-full flex text-2xl">
            {title}
        </div>
    </div>
  );
};