// import fitthreadImg from '../assets/imgi_42_2f0af4cd-b747-40de-82b9-ce031c6fd098.jpg';
import * as SI from 'react-icons/si'; 
import fithreadImg1 from '../assets/images/Screenshot (125).png'
import fithreadImg2 from '../assets/images/Screenshot (126).png'
import fithreadImg3 from '../assets/images/Screenshot (161).png'
import wildoasisImg1 from '../assets/images/Screenshot (139).png'
import wildoasisImg2 from '../assets/images/Screenshot (140).png'
import wildoasisImg3 from '../assets/images/Screenshot (141).png'
import aidashboardImg1 from '../assets/images/Screenshot (116).png'
import aidashboardImg2 from '../assets/images/Screenshot (117).png'
import aidashboardImg3 from '../assets/images/Screenshot (118).png'
import weatherImg1 from '../assets/images/Screenshot (121).png'
import weatherImg2 from '../assets/images/Screenshot (103).png'
import weatherImg3 from '../assets/images/Screenshot (159).png'
import desertImg1 from '../assets/images/Screenshot (130).png'
import desertImg2 from '../assets/images/Screenshot (133).png'
import desertImg3 from '../assets/images/Screenshot (160).png'
import digiBankImg1 from '../assets/images/Screenshot (142).png'
import digiBankImg2 from '../assets/images/Screenshot (145).png'
import digiBankImg3 from '../assets/images/Screenshot (143).png'
import multiFormImg1 from '../assets/images/Screenshot (146).png'
import multiFormImg2 from '../assets/images/Screenshot (147).png'
import multiFormImg3 from '../assets/images/Screenshot (148).png'
import spaceImg1 from '../assets/images/Screenshot (153).png'
import spaceImg2 from '../assets/images/Screenshot (152).png'
import spaceImg3 from '../assets/images/Screenshot (151).png'
import rockpaperImg1 from '../assets/images/Screenshot (154).png'
import rockpaperImg2 from '../assets/images/Screenshot (157).png'
import rockpaperImg3 from '../assets/images/Screenshot (155).png'
import rockpaperImg4 from '../assets/images/Screenshot (156).png'




 export const projectsData = [

  {
    id: 1,
    slug: "fitthread",
    title: "FitThread E-Commerce",
    type: "E-Commerce Web Application",
    image1: fithreadImg1,
    image2: fithreadImg2,
    image3: fithreadImg3,
    shortDesc: "A modern, full-stack apparel storefront designed for seamless shopping.\nFeatures fluid navigation, secure checkout, and intuitive product filtering.",
    longDesc: "FitThread is a high-performance e-commerce platform dedicated to footwear and contemporary streetwear. Built to deliver a frictionless retail experience, it features dynamic inventory rendering, a robust shopping cart system, and an optimized user flow from product discovery to final payment. The application prioritizes speed, secure transaction management, and a highly responsive design that looks stunning on everything from mobile devices to large desktop monitors.",
      technologies: [
        { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
        { name: 'Supabase', icon: SI.SiSupabase, color: '#3ECF8E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
       { name: 'Shadcn/UI', icon: SI.SiShadcnui, color: '#FFFFFF' },
    ],
    liveUrl: "https://fitthread.vercel.app",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

      {
    id: 2,
    slug: "the-wild-oasis",
    title: "The Wild Oasis",
    type: "Internal Management System",
    image1: wildoasisImg1,
    image2: wildoasisImg2,
    image3: wildoasisImg3,
    shortDesc: "A comprehensive cabin rental dashboard managing bookings, cabins, and guests.\nFeatures complex data tables, interactive analytical charts, and secure authentication.",
    longDesc: "The Wild Oasis is a full-featured internal management application designed for luxury cabin resorts to handle day-to-day operations. It provides resort staff with a powerful back-office interface to check guests in and out, track booking statistics over time, manage cabin inventories, and update global application settings. Built using deep state management, a secure database architecture, and professional data visualization libraries, it represents a complete real-world business solution.",
     technologies: [
       { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
       { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
        { name: 'Supabase', icon: SI.SiSupabase, color: '#3ECF8E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
       { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
       { name: 'Shadcn/UI', icon: SI.SiShadcnui, color: '#FFFFFF' },
    ],
    liveUrl: "https://the-wild-oasis.vercel.app/dashboard",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },


  {
    id: 3,
    slug: "ai-content-dashboard",
    title: "AI Content Dashboard",
    type: "SaaS Productivity Tool",
    image1: aidashboardImg1,
    image2: aidashboardImg2,
    image3: aidashboardImg3,
    shortDesc: "An intelligent dashboard that automates digital content creation at scale.\nGenerates platform-optimized text for blogs, social media, and video scripts.",
    longDesc: "This application serves as a centralized hub for digital creators looking to streamline their creative production workflow. By leveraging advanced language models, the dashboard generates tailored blog posts, engaging social media captions, and optimized YouTube scripts based on minimal user prompts. It includes an intuitive analytics interface, content categorization tools, and a polished user interface built to minimize friction and boost creative output.",
     technologies: [
       { name: 'Typescript', icon: SI.SiTypescript, color: '#067cc8' },
        { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
        { name: 'Supabase', icon: SI.SiSupabase, color: '#3ECF8E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
       { name: 'Shadcn/UI', icon: SI.SiShadcnui, color: '#FFFFFF' },
    ],
    liveUrl: "https://ai-content-dashboard-orpin.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },
  {
    id: 4,
    slug: "skyline-weather",
    title: "Skyline Weather App",
    type: "Weather & Analytics App",
    image1: weatherImg1,
    image2: weatherImg2,
    image3: weatherImg3,
    shortDesc: "A sleek, real-time weather application with beautiful data visualizations.\nProvides instant forecasts, localized atmospheric metrics, and dynamic UI updates.",
    longDesc: "Designed with a heavy emphasis on clean UI/UX design patterns, this application fetches live global weather data to provide accurate, up-to-the-minute forecasts. Users can search for any city worldwide to instantly view temperature trends, humidity levels, and wind speeds presented through polished, interactive components. The interface dynamically adapts its visual theme based on current local weather conditions, proving that complex data can be both beautiful and highly readable.",
     technologies: [
       { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
        { name: 'Rest API', icon: SI.SiSwagger, color: '#3ECF8E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
       { name: 'Shadcn/UI', icon: SI.SiShadcnui, color: '#FFFFFF' },
    ],
    liveUrl: "https://weather-app-ten-azure-49.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

  {
    id: 5,
    slug: "desert-delights",
    title: "Desert Order Platform",
    type: "Food & Retail Web App",
    image1: desertImg1,
    image2: desertImg2,
    image3: desertImg3,
    shortDesc: "A highly interactive cart and ordering interface built for culinary retail.\nFeatures instant state management, item tracking, and a gorgeous layout.",
    longDesc: "This project focuses on perfecting complex user interactions within a localized food ordering system. It features a fully reactive cart module where users can add, remove, and adjust quantities of items with real-time price calculations and order summaries. Special attention was paid to state synchronization and accessibilty standards, ensuring a seamless and reliable checkout experience that mimics modern top-tier food delivery applications.",
     technologies: [
       { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
       { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
        { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
    ],
    liveUrl: "https://desserts-order.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

  {
    id: 6,
    slug: "digital-banking",
    title: "Digital Banking Platform",
    type: "Fintech Landing Page",
    image1: digiBankImg1,
    image2: digiBankImg2,
    image3: digiBankImg3,
    shortDesc: "A premium, conversion-focused landing page for a modern fintech institution.\nCombines advanced structural layout with high-impact visual design elements.",
    longDesc: "This project is a masterclass in modern corporate web presentation, specifically tailored for the highly competitive digital banking sector. The page utilizes intricate CSS layouts, grid systems, and subtle scroll animations to guide potential users through product features, security guarantees, and tier pricing. It serves as an excellent demonstration of translating complex financial value propositions into a crisp, clean, and highly professional user interface.",
     technologies: [
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
        { name: 'Supabase', icon: SI.SiSupabase, color: '#3ECF8E' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
        { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
    ],
    liveUrl: "https://digital-bank-landing-page-tau.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

    {
    id: 7,
    slug: "multi-step-onboarding",
    title: "Multi-Step Onboarding Form",
    type: "Interactive Form Architecture",
    image1: multiFormImg1,
    image2: multiFormImg2,
    image3: multiFormImg3,
    shortDesc: "A highly functional multi-stage form interface handling complex user data.\nIncludes conditional plan pricing, add-on selections, and strict state validation.",
    longDesc: "This application solves one of the trickiest challenges in frontend development: managing multi-step user state without losing data between views. The interface seamlessly walks users through selecting subscription tiers, toggling monthly or yearly billing intervals, and picking add-on features before providing a final editable summary. It incorporates comprehensive input validation, error handling, and fluid state persistence to guarantee a highly polished user onboarding funnel.",
     technologies: [
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
          { name: 'HTML5', icon: SI.SiHtml5, color: '#ef662a' },
        { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
    ],
    liveUrl: "https://multi-step-form-main-beta.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

  {
    id: 8,
    slug: "space-tourism",
    title: "Space Tourism Hub",
    type: "Immersive Multi-Page Concept",
    image1: spaceImg1,
    image2: spaceImg2,
    image3: spaceImg3,
    shortDesc: "An atmospheric, multi-page exploratory website celebrating commercial space flight.\nFeatures design-heavy structural layouts and fluid tabbed content navigation.",
    longDesc: "Built to test the limits of cinematic web design, this multi-page concept takes users on a visual journey through commercial space exploration. The application leverages strict design systems, complex asset handling, and advanced responsive layouts to ensure that large-scale planetary graphics and typography scale perfectly across diverse viewports. It features interactive crew profiles, destination breakdowns, and technology overviews that prioritize user immersion.",
     technologies: [
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SI.SiReact, color: '#5cbfd9' },
       { name: 'TailwindCSS', icon: SI.SiTailwindcss, color: '#20b8b3' },
    ],
    liveUrl: "https://multi-step-form-main-beta.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  },

  {
    id: 9,
    slug: "rock-paper-scissors",
    title: "Rock Paper Scissors Epic",
    type: "Interactive Web Game",
    image1: rockpaperImg1,
    image2: rockpaperImg2,
    image3: rockpaperImg3,
    image4: rockpaperImg4,
    shortDesc: "An engaging, fully automated web game featuring stateful score tracking.\nImplements precise game logic rules alongside animated UI transition states.",
    longDesc: "A modern, feature-enhanced web implementation of the classic hand game, expanding into advanced variations to test strict conditional game logic. The application handles immediate computer move generation, dynamic win/loss evaluations, and preserves the user's score across consecutive play sessions. Built with a heavy focus on interactive state, clean physics animations, and a distinct minimalist design, it showcases the power of pure JavaScript state management.",
     technologies: [
        { name: 'JavaScript', icon: SI.SiJavascript, color: '#F7DF1E' },
         { name: 'HTML5', icon: SI.SiHtml5, color: '#ef662a' },
        { name: 'CSS3', icon: SI.SiCss, color: '#264de4' },
    ],
    liveUrl: "https://rock-paper-scissors-game-flax-phi.vercel.app/",
    // githubUrl: "https://github.com/yourusername/fitthread",
  }
]