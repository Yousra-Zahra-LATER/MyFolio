import React from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';

const SmoothScrollExample = () => {
  return (
    <div>
      {/* Menu de navigation */}
      <nav className="bg-gray-800 p-4 fixed w-full top-0">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link
              to="section1"
              smooth={true}
              duration={400}
              className="text-white cursor-pointer hover:text-yellow-500"
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              to="section2"
              smooth={true}
              duration={400}
              className="text-white cursor-pointer hover:text-yellow-500"
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              to="section3"
              smooth={true}
              duration={400}
              className="text-white cursor-pointer hover:text-yellow-500"
            >
              Section 3
            </Link>
          </li>
          <li>
            <button
              onClick={() => scroll.scrollToTop()}
              className="text-white cursor-pointer hover:text-yellow-500"
            >
              Haut de page
            </button>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <Element name="section1" className="min-h-screen p-16 bg-gray-100">
          <h2 className="text-2xl font-bold">Section 1</h2>
          <p>Contenu de la section 1</p>
        </Element>
        <Element name="section2" className="min-h-screen p-8 bg-gray-200">
          <h2 className="text-2xl font-bold">Section 2</h2>
          <p>Contenu de la section 2</p>
        </Element>
        <Element name="section3" className="min-h-screen p-8 bg-gray-300">
          <h2 className="text-2xl font-bold">Section 3</h2>
          <p>Contenu de la section 3</p>
        </Element>
      </div>
    </div>
  );
};

export default SmoothScrollExample;
