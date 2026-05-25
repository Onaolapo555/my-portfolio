import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';
import { useEffect } from 'react';
// import { useInView } from '@/components/useInView';
// import { Link } from 'react-router-dom';






 function AllProject() {

  // ScrollToTop
  useEffect(() => {
  const timer = setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, 100); 

  return () => clearTimeout(timer);
}, []);




  return (
    <div 
    className={`min-h-screen w-[90%] max-w-4xl m-auto mb-32 pt-35  opacity-0 translate-y-8 
             animate-fadeIn`}>
      <h1 className='header mb-15 text-center'>All Featured Projects</h1>
      <main className="max-w-4xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProject;