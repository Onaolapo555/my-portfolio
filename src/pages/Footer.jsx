
import { 
  FaXTwitter,     
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa6'; 
import { LuFileText } from 'react-icons/lu';
// import { useInView } from '@/components/useInView';

function Footer() {

 const myEmail = "onaolapoisaiahayomide@gmail.com";    
const myName = "Onaolapo Ayomide"; 

 const mailtoLink = `mailto:${myEmail}?subject=Inquiry from your website&body=Hi ${myName},%0D%0A%0D%0AI visited your website and would like to get in touch.%0D%0A%0D%0ABest regards,%0D%0A`;



    return(
        <div>
             <div className='border m-auto border-b-[#232628] mt-20 md:mt-30 max-w-2xl'></div>
        <div className='footer text-[#ffffff] text-center m-auto w-[90%] mb-20 max-w-lg mt-15'>

            <p>© 11100110 WAGMI • Onaolapo Ayomide</p>
            <p>All rights reserved</p>
            <div className='flex  items-center justify-center gap-5 mt-5'>

         <a href="https://x.com/IzzysPEpRena" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-6 h-6 hover:scale-120 transition-all duration-300">
          <FaXTwitter className="w-full h-full object-cover " />
        </a>

         <a href="https://github.com/Onaolapo555/Onaolapo555" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-6 h-6 hover:scale-120 transition-all duration-300">
          <FaGithub className="w-full h-full object-cover " />
        </a>

          <a 
        href={mailtoLink}  
        target="_blank" 
        rel="noopener noreferrer"
        title={`Send email to ${myName}`}
        className=" w-6 h-6 hover:scale-120 transition-all duration-300">
          <FaEnvelope className="w-full h-full object-cover " />
        </a>

         <a href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-6 h-6  hover:scale-120 transition-all duration-300">
          <LuFileText className="w-full h-full object-cover " />
        </a>
        
            </div>
        </div>
        </div>
    )
}


export default Footer;
