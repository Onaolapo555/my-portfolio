
import * as SI from 'react-icons/si';
import { useInView } from '../components/useInView'; 
import { useState } from 'react';
// import { Terminal } from 'lucide-react';
import { VscCode } from 'react-icons/vsc';


const skillData = [
  { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
  { name: 'Supabase', icon: SI.SiSupabase, color: '#3ECF8E' },
  { name: 'Typescript', icon: SI.SiTypescript, color: '#067cc8' },
  { name: 'Next.js', icon: SI.SiNextdotjs, color: '#FFFFFF' },
  { name: 'Python', icon: SI.SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SI.SiPostgresql, color: '#4169E1' },
  { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
  { name: 'HTML5', icon: SI.SiHtml5, color: '#ef662a' },
  { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
  { name: 'Shopify', icon: SI.SiShopify, color: '#3ECF8E' },
  { name: 'Shadcn/UI', icon: SI.SiShadcnui, color: '#FFFFFF' },
];

const toolData = [
  { name: 'Git', icon: SI.SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SI.SiGithub, color: '#FFFFFF' },
  { name: 'Linux', icon: SI.SiLinux, color: '#FCC624' }, 
  // { name: 'VS Code', icon: SI.SiVisualstudiocode, color: '#007ACC' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC' }
]


// bg-[#0B0E14]

function Skills() {

  const [showAll, setShowAll] = useState(false);

    const [ref, isInView] = useInView({ 
        threshold: 0.2,    
        triggerOnce: true 
      });

  return (
     <div 
      ref={ref} 
      className={`mt-10 w-[90%] m-auto mb-20 max-w-xl transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* <h1 className='header mb-5'>Skills</h1> */}

      {/* Skills */}
      <div>
        <h1 className='header-two mb-5'>Core Tech Stack</h1>
    <div className=" grid grid-cols-3 gap-5 mb-10 place-items-center ">
        {skillData
    .slice(0, showAll ? skillData.length : 6)   // ← This is the key line
    .map((skill) => {
        // This line prevents the "undefined" crash
        const IconComponent = skill.icon || SI.SiReact; 

        return (
          <div 
            key={skill.name}
            className=" w-24 h-24 md:w-30 md:h-30 rounded-md bg-gray-950 flex flex-col items-center justify-center sharp-border-card shadow-xl "
          >
            <div style={{ color: skill.color }} className="text-4xl">
              <IconComponent />
            </div>
            <span className="text-[10px] mt-1 font-bold" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
       <button 
      onClick={() => setShowAll(!showAll)}
      className="btn-show-more text-center m-auto flex items-center mb-8 border p-2 rounded-lg bg-black text-white cursor-pointer" >
       {showAll ? "Show Less ↑" : "Show More ↓"}
       </button>
      </div>

    {/* Tools */}
    <div className=''>
          <h1 className='header-two mb-5'>Development Tools</h1>
        <div className="grid grid-cols-4 gap-4 place-items-center">
      {toolData.map((skill) => {
        // This line prevents the "undefined" crash
        const IconComponent = skill.icon || SI.SiReact; 
        
        return (
          <div 
          key={skill.name}
          className="w-18 h-18 md:w-30 md:h-30 rounded-lg bg-gray-950 flex flex-col items-center justify-center border border-white/5 shadow-xl sharp-border-card "
          >
            <div style={{ color: skill.color }} className="text-4xl ">
              <IconComponent />
            </div>
            <span className="text-[10px] mt-1 font-bold" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
      </div>
          </div>
  );
}

export default Skills;
