import ProjectCard from './ProjectCard';
// import { projectsData } from '../data/projectsData'; 
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { useInView } from '@/components/useInView';
import { useEffect, useState } from 'react';


const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);


  useEffect(() => {
    // This dynamically fetches the JSON block chunk only when the component renders
    import('../data/projectsData').then((module) => {
      setProjectsData(module.projectsData);
    });
  }, []);

      const [ref, isInView] = useInView({ 
        threshold: 0.1,    
        triggerOnce: true 
      });

  // const featuredProjects = projectsData.slice(0, 4);  
  const featuredProjects = projectsData?.slice(0, 4) || [];


  return (
    <section ref={ref}
     className={`w-[90%] m-auto mb-25 transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <h2 className="header text-3xl md:text-center font-bold mb-8">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show All Button */}
      <button className="m-auto  mt-10 flex items-center hover:text-white transition-all duration-500">
        <Link 
          to="/projects"
          className='btn-view-all flex items-center p-3 rounded-xl gap-2 hover:gap-4 text-white transition-all duration-300'
        >
          View All
          <FaChevronRight />
        </Link>
      </button>
    </section>
  );
};

export default Projects;
