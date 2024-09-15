import React, { useState } from 'react';
import logo from './logo.png';

const Navbar = ({ setCategory }) => {
  // State to manage the visibility of the navbar on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' '>
      {/* header */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap p-5 z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-3xl w-full bg-white rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto">
          <div className="px-4 md:px-0 flex justify-between items-center">
            {/* Logo */}
            <div>
              <a onClick={() => setCategory('general')} className="flex rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Preline">
                <img className='h-16 w-16' src={logo} alt="Aconews" />
                <p className='my-1 md:py-3 px-4 md:px-1 mt-4 lg:mt-2 font-medium text-gray-800'>AcoNews</p>
              </a>
            </div>
            {/* End Logo */}

            <div className="md:hidden">
              {/* Toggle Button */}
              <button 
                type="button" 
                onClick={toggleMenu} 
                className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-black rounded-full hover:scale-105 focus:outline-none focus:bg-[#90c4cc] focus:text-white" 
                aria-expanded={isOpen} 
                aria-controls="hs-navbar-header-floating"
                aria-label="Toggle navigation"
              >
                <svg className={`${isOpen ? 'hidden' : 'block'} shrink-0 size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6"/>
                  <line x1="3" x2="21" y1="12" y2="12"/>
                  <line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              {/* End Toggle Button */}
            </div>
          </div>

          <div id="hs-navbar-header-floating" className={`overflow-hidden transition-all duration-300 basis-full grow md:block ${isOpen ? 'block' : 'hidden'}`} aria-labelledby="hs-navbar-header-floating-collapse">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a onClick={() => setCategory('world')} className="py-0.5 md:py-3 hover:scale-110 hover:text-[#90c4cc] px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 focus:outline-none" href="#">World</a>
              <a onClick={() => setCategory('nation')} className="py-0.5 hover:scale-110 hover:text-[#90c4cc] md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 focus:outline-none" href="#">Nation</a>
              <a onClick={() => setCategory('business')} className="py-0.5 md:py-3 px-4 hover:scale-110 hover:text-[#90c4cc] md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 focus:outline-none" href="#">Business</a>
              <a onClick={() => setCategory('technology')} className="py-0.5 md:py-3 hover:scale-110 hover:text-[#90c4cc] px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 focus:outline-none" href="#">Technology</a>
              <a onClick={() => setCategory('sports')} className="py-0.5 md:py-3 px-4 hover:scale-110 hover:text-[#90c4cc] md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 focus:outline-none" href="#">Sports</a>
              <a onClick={() => setCategory('science')} className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 hover:scale-110 hover:text-[#90c4cc] focus:outline-none" href="#">Science</a>
              <a onClick={() => setCategory('health')} className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-800 hover:text-gray-800 hover:scale-110 hover:text-[#90c4cc] focus:outline-none" href="#">Health</a>
          </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </div>
  );
};

export default Navbar;