import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-[#FFFBFD] flex flex-col h-36 justify-center items-center text-black gap-2'>
      <div className='flex gap-4'>
        <a href="https://github.com/Yousra-Zahra-LATER" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-800">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-800">
          <FaLinkedin />
        </a>
        <a href="mailto:yousra.later@univ-constantine2.dz" className="text-2xl hover:text-pink-800">
          <FaEnvelope />
        </a>
      </div>
      <div className='text-center text-sm font-semibold'>
        © 2024 Yousra Zahra LATER - All rights reserved
      </div>
      <div className='text-center font-bold'>
        Made with &lt;3
      </div>
    </footer>
  );
}
