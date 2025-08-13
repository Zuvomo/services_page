import React, { useState } from 'react';


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-header-1 shadow-[0px_2px_6px_#00000019] pt-[14px] pr-[14px] pb-[14px] pl-[14px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-row justify-between items-center w-[96%] mx-auto">
          {/* Logo */}
          <div className="self-end w-full sm:w-auto">
            <img 
              src="/images/img_zuvomo_logo.png" 
              className="w-[100px] h-[22px] sm:w-[132px] sm:h-[30px]" 
              alt="Zuvomo Logo" 
            />
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2 text-global-8" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-header-1 lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 p-4 lg:p-0">
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors mb-1 sm:mb-[4px]"
              >
                Explore
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors mb-1 sm:mb-[4px]"
              >
                Startups
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors"
              >
                For Investors
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors"
              >
                About Us
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 bg-header-2 rounded-[16px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] hover:bg-orange-600 transition-colors"
              >
                Our Services
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors mb-1 sm:mb-[4px]"
              >
                Blogs
              </button>
              <button 
                role="menuitem" 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-left text-global-8 hover:text-gray-200 transition-colors mb-1 sm:mb-[4px]"
              >
                Case Study
              </button>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto right-0 lg:right-auto w-full lg:w-auto bg-header-1 lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-[6px] p-4 lg:p-0">
              <button 
                className="text-[11px] sm:text-[13px] font-ubuntu font-medium leading-[13px] sm:leading-[15px] text-center text-button-1 bg-global-4 border-[1px] border-solid border-button-1 rounded-[20px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] hover:bg-gray-100 transition-colors w-full lg:w-auto"
              >
                Log In
              </button>
              <button 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-center text-global-8 bg-global-1 border-[1px] border-solid border-blue-500 rounded-[20px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] hover:bg-blue-700 transition-colors w-full lg:w-auto"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;