import React from 'react'; // Importation de la bibliothèque React pour créer des composants
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importation des icônes depuis react-icons/fa

// Déclaration et exportation par défaut du composant fonction Footer
export default function Footer() {
  return (
    // Élément footer avec des classes Tailwind CSS pour le style
    <footer className='bg-custom-pink flex flex-col h-36 justify-center items-center text-black gap-2'>
      {/* Conteneur pour les icônes avec un espacement entre elles */}
      <div className='flex gap-4'>
        {/* Lien vers le profil GitHub */}
        <a href="https://github.com/Yousra-Zahra-LATER" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-800">
          <FaGithub /> {/* Icône GitHub */}
        </a>
        {/* Lien vers le profil LinkedIn */}
        <a href="https://www.linkedin.com/in/yousra-zahra-later-956443260/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-800">
          <FaLinkedin /> {/* Icône LinkedIn */}
        </a>
        {/* Lien pour envoyer un email */}
        <a href="mailto:yousra.later@univ-constantine2.dz" className="text-2xl hover:text-pink-800">
          <FaEnvelope /> {/* Icône de courrier électronique */}
        </a>
      </div>
      {/* Texte de copyright centré et stylisé */}
      <div className='text-center text-sm font-semibold'>
        © 2024 Yousra Zahra LATER - All rights reserved
      </div>
      {/* Message personnel centré et stylisé */}
      <div className='text-center font-bold'>
        Made with &lt;3
      </div>
    </footer>
  );
}
