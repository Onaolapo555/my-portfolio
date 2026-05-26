
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // Extra safety
  if (!project || !project.slug) {
    console.error("ProjectCard received invalid project:", project);
    return <div className="p-4 border rounded-2xl">Project data missing</div>;
  }

  return (
    <Link to={`/projects/${project.slug}`} className="block group ">
      <main className="p-5 border border-[#232628] rounded-2xl transition-all duration-300 mb-2">
        
        <div className="rounded-lg overflow-hidden mb-5">
          <img 
            className="w-full aspect-video object-cover group-hover:scale-110 transition-all duration-800" 
            src={project.image} 
            alt={project.title} 
          />
        </div>
        
        <h2 className="header-two mb-2">{project.title}</h2>
        <p className="small-text line line-clamp-2 text-[#787878] mb-5">
          {project.shortDesc || project.description}
        </p>
        
        <div 
          className="btn-view-project inline-flex w-fit border-[#232628] font-semibold p-2.5 rounded-xl items-center gap-2 hover:gap-4 transition-all duration-300 hover:cursor-pointer slide-bg  hover:transition-all hover:duration-300"
        >
          View Project<FaChevronRight/>
        </div>
      </main>
    </Link>
  );
};

export default ProjectCard;
