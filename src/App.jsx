import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import HeaderSkeleton from './components/HeaderSkeleton';

const GlassNavBar= lazy (() => import('./components/GlassNavBar.jsx'))
const Footer = lazy(() => import('./pages/Footer.jsx'));
const AllProjects = lazy(() => import('./pages/AllProjects.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Header = lazy(() => import('./pages/Header.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ContactForm = lazy(() => import('./pages/ContactForm.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));
const ScrollSmooth = lazy(() => import('./components/ScrollSmooth.jsx'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop.jsx'));
const ImageModal = lazy(() => import('./components/ImageModal.jsx'));




function App() {

  const [homeLoading, setHomeLoading] = useState(true);
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHomeLoading(false);

      setTimeout(() => setHomeVisible(true), 100);
    }, 1350); //

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen md:border-r md:border-l max-w-4xl md:border-[#232628] m-auto overflow-hidden">
        <ScrollSmooth>
          <Routes>
            {/* HOME PAGE with Loading + Fade-in */}
            <Route
              path="/"
              element={
                homeLoading ? (
                  <Loading />
                ) : (
                  <div
                    className={`max-w-4xl mt-20 m-auto overflow-hidden transition-all duration-1000 ease-out ${
                      homeVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-12'
                    }`}
                  >
                    <Suspense fallback={<HeaderSkeleton/>}>
                    <Header />
                    <Projects />
                    <Skills />
                    <About />
                    <ContactForm />
                    </Suspense>
                  </div>
                )
              }
            />

            {/* Other Pages (No loading) */}
            <Route path="/projects" element={
              <Suspense fallback={<Loading/>}>
                <AllProjects />
              </Suspense>
              } />
            <Route path="/projects/:slug" element={
              <Suspense fallback={<Loading/>}>
                <ProjectDetail />
              </Suspense>
              } />
          </Routes>

          <Suspense fallback={<Loading/>}>
          <Footer />
          <GlassNavBar/>

          {/* ←←← ADD IMAGE MODAL HERE ←←← */}
          <ImageModal />
          </Suspense>

        </ScrollSmooth>
      </div>
    </Router>
  );
}



export default App;




// Darkand Light mode toggle button 

// const [isDark, setIsDark] = useDarkMode();

    // <button 
    //   // 2. This is the "input" part. We use an arrow function to toggle the boolean.
    //   onClick={() => setIsDark(!isDark)}
      
    //   // 3. Styling: we use 'dark:' to tell Tailwind what to do when the dark class is active
    //   className="relative p-2 rounded-xl bg-gray-200 dark:bg-[#23272D] 
    //              hover:ring-2 hover:ring-yellow-400 transition-all duration-300 
    //              flex items-center justify-center group"
    //   aria-label="Toggle Theme"
    // >
    //   {/* 4. Conditional Rendering: Show Sun if dark, Moon if light */}
    //   {isDark ? (
    //     <HiSun className="text-xl text-yellow-400 transition-transform group-hover:rotate-45" />
    //   ) : (
    //     <HiMoon className="text-xl text-gray-700 transition-transform group-hover:-rotate-12" />
    //   )}
    // </button>