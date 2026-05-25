import { FaWhatsapp } from 'react-icons/fa6'; 
import { useInView } from '../components/useInView'; 
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import greenPulse from '../assets/animation/Green-Pulse-Dot.json';
import myImg3 from '../assets/images/file_00000000819071fda6c74087fdb4b7bc.png'
// import myImg4 from '../assets/images/IMG-20250309-WA0000.jpg'
// import myImg5 from '../assets/images/IMG-20250310-WA0000.jpg'

 function Header() {

  const phoneNumber = "2349137884852"; 
  const message = "Hi";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [ref, isInView] = useInView({ 
    threshold: 0.2,    
    triggerOnce: true 
  });

  const animationRef = useRef(null);
  const lottieInstance = useRef(null);

  useEffect(() => {
    if (animationRef.current && greenPulse) {
      lottieInstance.current = lottie.loadAnimation({
        container: animationRef.current,
        animationData: greenPulse,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
    }

    // Cleanup
    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`mt-20 w-[90%] m-auto mb-20 max-w-xl transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className='w-34 h-34 rounded-full mb-5'>
        <img 
          className='w-full h-full rounded-full object-cover'   
          src={myImg3} 
          alt="profile-pic" 
        />
      </div>

      <h1 className=' mb-4'>
        <p className='header-two mb-1'>Hey, I'm Onaolapo Ayomide.</p>
        <p className='text-white text-xl font-bold'> 
          Frontend Software Engineer
          </p>
      </h1>

      <p className="small-text mb-5 max-w-lg">
       I build clean, intuitive, and high-performance web applications that solve real-world problems. 
        Combining strong design sense with reliable code, I create digital experiences that are both beautiful and functional.
</p>

      <div className='flex flex-row gap-6 text-xs md:text-lg font-bold'>
        <button className='btn-glow text-white  rounded-xl transition-all duration-400 lg:hover:px-5 hover:cursor-pointer'>
          <a 
          href={whatsappUrl}
           target="_blank"    
            rel="noopener noreferrer"
          className="whatsapp-button  flex gap-2 px-3 py-2 items-center">
            Let's Talk
          <FaWhatsapp className="w-4 h-4 text-green-600  rounded-full " />
          </a>
        </button>

        <div className='btn-glow-hire text-green-700 px-3 py-2 rounded-2xl flex items-center gap-2'>
          <div 
            ref={animationRef} 
            style={{ width: 32, height: 32 }}
            />
            Open To Work
        </div>
      </div>
    </div>
  )
}

export default Header;