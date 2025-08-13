import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  description: string;
  backgroundImage: string;
}

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      category: "Market Analysis",
      title: "RWA vs. DeFi vs. DePIN vs. AI: Who's Winning the 2025 VC Funding War?",
      description: "The first half of 2025 marked a pivotal period for crypto venture capital, demonstrating a discernible rebound in total funding that collectively surpassed the total funding figures for the entirety of 2024.",
      backgroundImage: "/images/img_0x0.png"
    },
    {
      id: 2,
      category: "Bitcoin Strategy",
      title: "Why 70% Public Companies, Michael Saylor's Strategy, and Holding $67 Billion of BTC",
      description: "An in-depth analysis of corporate Bitcoin adoption strategies and Michael Saylor's approach to holding $67 billion in BTC reserves.",
      backgroundImage: "/images/img_1.png"
    },
    {
      id: 3,
      category: "Crypto Trends",
      title: "How 4 Crypto Narratives Fueled a $13 Billion Dollar Fundraising Resurgence in 2024",
      description: "Exploring the four key crypto narratives that drove a massive $13 billion fundraising resurgence throughout 2024.",
      backgroundImage: "/images/img_2.png"
    }
  ];

  const serviceCards: ServiceCard[] = [
    {
      id: 1,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 2,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 3,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 4,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 5,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 6,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 7,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    },
    {
      id: 8,
      icon: "/images/img_margin.png",
      title: "Get your Startup Evaluated",
      description: "Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="flex flex-col justify-start items-center w-full bg-global-4 overflow-y-auto">
      {/* Notification Banner */}
      <div className="flex flex-row justify-center items-center w-full bg-global-3 pt-[6px] pr-[6px] pb-[6px] pl-[6px]">
        <p className="text-[10px] sm:text-[12px] font-ubuntu font-normal leading-[14px] sm:leading-[18px] text-center text-global-5">
          <span className="text-global-5">🔔 Monitor processor performance to mitigate the risk of financial loss. </span>
        </p>
        <div className="flex flex-row justify-center items-center w-auto ml-2 sm:ml-4">
          <p className="text-[10px] sm:text-[12px] font-ubuntu font-normal leading-[12px] sm:leading-[14px] text-center text-global-1">
            Find out more &gt;
          </p>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section 
        className="w-full bg-cover bg-center bg-no-repeat mt-[50px] sm:mt-[70px] md:mt-[94px] mb-[70px] sm:mb-[100px] md:mb-[140px]"
        style={{ backgroundImage: "url('/images/img_.png')" }}
      >
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center w-full">
            {/* Left Content */}
            <div className="flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px] justify-start items-start w-full lg:flex-1 px-[5px] sm:px-[10px]">
              <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[49px] font-ubuntu font-bold leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[63px] text-left w-auto">
                <span className="text-global-1">Supporting </span>
                <span className="text-[#007bff]">Startups</span>
                <br />
                <span className="text-global-1">with Tools for </span>
                <span className="text-[#f76730]">Growth</span>
                <br />
                <span className="text-global-1">& </span>
                <span className="text-[#f76730]">Sustainability</span>
              </h1>
              
              <div className="flex flex-row justify-start items-center w-full lg:flex-1">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-ubuntu font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-left text-global-7 w-full lg:w-[70%]">
                  Join Zuvomo, all-in-one platform and community (OS) for best-in-class
                  <br />
                  startup founders. Get funded by top investors, find customers, experts
                  <br />
                  and attract talents.
                </p>
              </div>
              
              <Button 
                className="text-[12px] sm:text-[14px] font-ubuntu font-normal leading-[15px] sm:leading-[17px] text-center text-global-8 bg-global-1 shadow-[0px_4px_10px_#00000019] rounded-[22px] pt-[12px] pr-[34px] pb-[12px] pl-[34px] hover:bg-blue-700 transition-colors w-auto"
              >
                Join Now
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex flex-row justify-center items-center w-full lg:w-auto px-[15px] sm:px-[30px] mt-8 lg:mt-0">
              <img 
                src="/images/img_handshake.png" 
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[520px] h-auto rounded-[14px]" 
                alt="Handshake" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full px-[5px] sm:px-[10px] mt-[10px] sm:mt-[15px] md:mt-[20px] mx-auto max-w-[1320px]">
        <div className="flex flex-col justify-start items-center w-full px-[5px] sm:px-[10px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-[10px] sm:mt-[15px] md:mt-[20px]">
            {serviceCards.map((card) => (
              <div key={card.id} className="flex flex-row justify-start items-center w-full">
                <div className="flex flex-col gap-[6px] sm:gap-[8px] justify-start items-start w-full bg-global-4 border-[1px] border-solid border-[#dddddd] rounded-[18px] pt-[14px] pr-[14px] pb-[14px] pl-[14px]">
                  <div className="flex flex-row justify-start items-center w-full">
                    <img 
                      src={card.icon} 
                      className="w-[50px] sm:w-[60px] md:w-[66px] h-[60px] sm:h-[70px] md:h-[80px]" 
                      alt="Service Icon" 
                    />
                    <div className="flex flex-row justify-start items-center flex-1 ml-2 sm:ml-4">
                      <h3 className="text-[14px] sm:text-[15px] md:text-[16px] font-ubuntu font-bold leading-[17px] sm:leading-[18px] md:leading-[19px] text-left text-global-1 w-full sm:w-[62%]">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[11px] sm:text-[12px] md:text-[13px] font-ubuntu font-normal leading-[16px] sm:leading-[17px] md:leading-[19px] text-left text-global-6 w-auto">
                    {card.description}
                  </p>
                  
                  <button className="w-[30px] sm:w-[34px] md:w-[36px] h-[30px] sm:h-[34px] md:h-[36px] border-[1px] border-solid border-global-1 rounded-[18px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] hover:bg-gray-50 transition-colors">
                    <img 
                      src="/images/img_border.svg" 
                      className="w-full h-full" 
                      alt="Arrow" 
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 mt-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-ubuntu font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We have helped 150+ startups secure over $700 Million in investments. Read these case studies to
              discover our growth and funding strategies.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div 
                  className={`relative bg-cover bg-center ${
                    index === 0 ? 'h-96 lg:h-full' : 'h-80'
                  }`}
                  style={{ backgroundImage: `url('${study.backgroundImage}')` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-xs font-semibold text-white uppercase tracking-wider bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-ubuntu font-bold text-white mb-3 leading-tight ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {study.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-gray-200 mb-4 leading-relaxed ${
                      index === 0 ? 'text-base' : 'text-sm'
                    }`}>
                      {study.description}
                    </p>
                    
                    {/* Read More Button */}
                    <button className="inline-flex items-center text-white font-medium text-sm hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300">
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <img 
                  src="/images/img_zuvomo_logo_40x176.png" 
                  className="h-10 w-auto mb-6" 
                  alt="Zuvomo Logo" 
                />
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Distinguished by a blend of diverse talents, our exceptional team thrives on unity, innovation, and shared values, forging a collective journey towards unparalleled success.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Follow us on:</h4>
                <div className="flex space-x-4">
                  {[
                    { src: "/images/img_linkedin.png", alt: "LinkedIn" },
                    { src: "/images/img_facebook.png", alt: "Facebook" },
                    { src: "/images/img_instagram.png", alt: "Instagram" },
                    { src: "/images/img_twitter.png", alt: "Twitter" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group"
                    >
                      <img 
                        src={social.src}
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                        alt={social.alt} 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg text-white">Navigation</h4>
              <nav className="space-y-3">
                {["Home", "About Us", "Security", "Blog", "Contact Us"].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="block text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal & Contact */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white">Legal</h4>
                <nav className="space-y-3">
                  {["Terms and Conditions", "Privacy Policy", "Support"].map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-white">Contact Info</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-white">Spacetime Center</p>
                      <p>E-25/A, 2nd Floor, Hauz Khas</p>
                      <p>Delhi, India 110016</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p>(406) 555-0120</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <p>hello@zuvomo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">
                © Zuvomo 2025. All rights reserved
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;