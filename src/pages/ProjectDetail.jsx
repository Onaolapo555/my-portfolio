
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink } from 'lucide-react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";



const ProjectDetail = () => {

  const { slug } = useParams();
  const [project, setProject] = useState(null);
   const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);


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



   useEffect(() => {
    const currentIndex = projectsData.findIndex(p => p.slug === slug);
    const foundProject = projectsData[currentIndex];

    setProject(foundProject);

    // Get Previous Project
    if (currentIndex > 0) {
      setPrevProject(projectsData[currentIndex - 1]);
    } else {
      setPrevProject(null);
    }

    // Get Next Project
    if (currentIndex < projectsData.length - 1) {
      setNextProject(projectsData[currentIndex + 1]);
    } else {
      setNextProject(null);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
          {/* <Link to="/" className="text-blue-600 border-amber-600  text-xl hover:underline border-8">
            ← Back to Home
          </Link> */}
        </div>
      </div>
    );
  }

 


  return (

    // <div className={` min-h-screen max-w-4xl m-auto w-[90%] `}>
      <div 
       key={slug} 
      className="min-h-screen max-w-4xl m-auto w-[90%] 
             opacity-0 translate-y-8 
             animate-fadeIn">

      <main className="max-w-4xl  mx-auto mt-30 mb-20 ">

        <h1 className="header font-bold mb-3">{project.title}</h1>
        <p className='small-text mb-7'>{project.shortDesc}</p>

        <div className='border shadow-lg border-[#232628] rounded-xl  p-7'>
          <h1 className='header-three mb-2'>Description</h1>
        <div className="small-text max-w-none  leading-relaxed border-[#232628] border-b">
          <p className='mb-6'>{project.longDesc}</p>
        </div>

        {/* Technologies */}
        <div className="mt-5 mb-10 border-b border-[#232628]">
  <h3 className="header-three font-semibold mb-3">Built With</h3>
  
  <div className="flex flex-wrap gap-6 mb-7">
    {project.technologies?.map((tech, index) => {
      const IconComponent = tech.icon;
      
      return (
        <div 
          key={index}
          className="flex flex-col items-center gap-3 "
        >
          <div className="w-10 h-10 flex flex-nowrap items-center justify-center rounded-xl text-white transition-colors border border-gray-800">
            {IconComponent && (
              <IconComponent 
                className="text-xl" 
                style={{ color: tech.color || '#000' }} 
              />
            )}
          </div>
          <span className="text-xs font-medium text-gray-300">{tech.name}</span>
        </div>
      );
    })}
       </div>
        </div>
         <div className=''>
          <p className='header-three mb-1'>Type</p>
          <p className=" small-text mb-10">{project.type}</p>
        </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-5 mt-10  ">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-live-demo m-auto px-3 py-2 text-white rounded-lg text-md flex gap-4 items-center font-medium transition-all duration-300 "
            >
              Live Demo <ExternalLink className='w-5 h-5'/>
            </a>
          )}
          
          {/* {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 p-2 rounded-xl text-md flex items-center font-medium hover:bg-gray-100 transition"
            >
              View Source Code
            </a>
          )} */}
        </div>
        
        {/* PREV / NEXT BUTTONS */}
        <div className={`flex m-auto max-w-48 gap-5  ${project.slug == 0 ? 'justify-between' : 'justify-center'} items-center mt-12`}>
          
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-3 group"
            >
              <div className='button-text btn-glow bg-black border transition-all duration-300 px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:gap-2 hover:transition-all hover:duration-300 '>
                 <FaChevronLeft/> Previous
              </div>
            </Link>
          ) : (
            <div className=' hidden'></div>  
          )
          }

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-3 group text-right"
            >
              <div className='button-text btn-glow border border-gray-600 hover:bg-gray-950 hover:bg- transition-all duration-300 px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:gap-2  hover:transition-all hover:duration-300 '>
                Next <FaChevronRight/>
              </div>
            </Link>
          ) : (
            <div className='hidden'></div>
          )}
        </div>
      </main>

      {/* Image section  */}
        {/* <div className=' border  m-auto '>
      <div className='p-6 border border-[#232628] rounded-3xl mb-6'>
      <img 
          src={project.image1} 
          alt={project.title} 
          className="w-full rounded-3xl m-auto hover:cursor-pointer" 
          onClick={() => window.openImageModal(`${project.image1}`)}
          />
          </div>

          <div className='flex flex-col md:flex-row gap-6 mb-15'>
          <div className='p-6  border border-[#232628] rounded-3xl'>
             <img 
          src={project.image2} 
          alt={project.title} 
          className="w-full rounded-3xl m-auto hover:cursor-pointer" 
          onClick={() => window.openImageModal(`${project.image2}`)}
          />
          </div>
           <div className='p-6 border border-[#232628] rounded-3xl'>
             <img 
          src={project.image3} 
          alt={project.title} 
          className="w-full rounded-3xl m-auto hover:cursor-pointer" 
          onClick={() => window.openImageModal(`${project.image3}`)}
          />
          </div>
          </div>
          </div> */}

    </div>
  );
};

export default ProjectDetail;