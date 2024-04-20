'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from '../navigation';

import Logo from '../../../public/imagens/logo-header.png';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex'>
      <div className="relative left-8 top-8">
        <Image className="max-[400px]:w-full" priority={true} src={Logo} alt="Up Talent"/>
      </div>
      <div className='flex fixed w-full'>
        <div className='flex w-full relative ml-auto px-8 pt-5 flex-row'>
          <div className='justify-center flex w-16 h-16 bg-[#61c3ac] border-[0.5px] border-black ml-auto my-auto rounded-full' onClick={toggleMenu}>  
            <button aria-label="Home" className="flex z-50 flex-col relative text-3xl my-auto cursor-pointer">
              <div className={`w-9 h-1 bg-[#291234] my-1 rounded-lg transition-transform duration-300 transform origin-center ${ isOpen ? 'transform rotate-45 translate-y-2 bg-[#e6ca29]' : ''}`}></div>
              <div className={`w-9 h-1 bg-[#291234] my-1 rounded-lg transition-opacity duration-300 ${ isOpen ? 'opacity-0 bg-[#291234]' : ''}`}></div>
              <div className={`w-9 h-1 bg-[#291234] my-1 rounded-lg transition-transform duration-300 transform origin-center ${ isOpen ? 'transform -rotate-45 -translate-y-4 translate-x-0 bg-[#e6ca29]' : ''}`}></div>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div initial={{ opacity: 0, x: 100, }} animate={{ opacity: 1, x: 25, }} exit={{ opacity: 0, x: 100,}} transition={{ duration: 0.5 }} style={{ zIndex: 0 }} className="absolute z-50 flex justify-center top-[-2rem] right-0 w-11/12 max-w-[500px] h-screen bg-[#2a1233] max-sm:right-0">
                <div className='w-9/12 py-4 bottom-[-6rem] relative h-4/5'>
                  <Navigation 
                    Exit={toggleMenu}
                    UlStyles='flex flex-col' 
                    Texto="text-[#ffffff] text-right my-auto pt-5 leading-light text-2xl text-nowrap font-['Fira Sans'] hover:font-bold hover:text-[#61c3ac] max-sm:text-lg" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Mobile;




