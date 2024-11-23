import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '@/icons/Logo';
import { Separator } from './ui/separator';

const Footer = () => {
  /* const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show footer when scrolling up or at the top/bottom of the page
      if (currentScrollY < lastScrollY || 
          currentScrollY < 10 || 
          window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); */

  return (
    <div className=''>
        <footer 
      className={` py-12 bg-[#003A39] text-white p-4 transition-transform duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Left section */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold">Patient.ng</span>
          </div>

          {/* Middle section */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#00DC8A] transition-colors">Advocacy</a>
            <a href="#" className="hover:text-[#00DC8A] transition-colors">Crowdfunding</a>
            <a href="#" className="hover:text-[#00DC8A] transition-colors">Resources</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#00DC8A] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#00DC8A] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#00DC8A] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <Separator  />

        {/* Bottom section */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div>© 2024 Patient.ng. All rights reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#00DC8A] transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-[#00DC8A] transition-colors">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;