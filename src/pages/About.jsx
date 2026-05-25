
import { useInView } from '../components/useInView';
import myImg1 from '../assets/images/1771745096789_q2fxdm_2_0.jpg'



 function About() {

     const [ref, isInView] = useInView({ 
        threshold: 0.2,    
        triggerOnce: true 
      });


  return(
    <div
    id='about'
    ref={ref}
     className={`w-[90%] m-auto mb-15 mt-15 max-w-xl transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

     <div className=' m-auto mb-7 h-50'>
    <img 
    className=' rounded-2xl w-full h-full object-cover'
    src={myImg1} alt="" />
   </div>

   <div className='mb-25'>
      <h1 className='header mb-2'>About Me</h1>
     <p className="small-text mb-4">
         I am a Computer Science student and a dedicated Frontend Developer with over three years of experience building modern and intuitive web applications. 
         My passion lies in designing clean systems, creating elegant user interfaces, and writing efficient, maintainable code that delivers exceptional user experiences.
      </p>

      <p className="small-text">
       I thrive at the intersection of design and development — turning ideas into polished, high-performance products. 
        Detail-oriented and solution-driven, I continuously improve by shipping real 
        projects,  embracing feedback, and staying current with modern technologies.
</p>
   </div>
    </div>
  )
}

export default About;
