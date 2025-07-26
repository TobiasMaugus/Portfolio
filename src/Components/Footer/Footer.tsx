import {colors} from '../../colors/colors.ts';
import { useState } from 'react';
import './Footer.css'
import { LuSettings } from 'react-icons/lu';
import SettingsModal from '../Pages/Settings/Modal.tsx';
import {
  SiLinkedin,
  SiGithub,
  SiGmail
} from 'react-icons/si';

export default function Footer() {
   const [showModal, setShowModal] = useState(false);
  return (
    <footer
      className="flex items-center justify-between border-b font-sans font-normal"
      style={{  
        width: '95%',
        height: '7.5%',
        backgroundColor: colors.primary,
        borderColor: colors.second,
        borderWidth: '1px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 200,
        fontStyle: 'thin',
        color: colors.second,
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
      }}
    >
      {showModal && <SettingsModal onClose={() => setShowModal(false)} />}
        <nav className=" flex-1 flex items-center">
          <div className="px-5 py-2 border-r border-custom">find me in: </div>
          <ul className="hidden md:flex flex-grow">
              <a href="https://mail.google.com/mail/?view=cm&to=tobiasmaugus705@gmail.com"
                target="_blank"
                rel="noopener noreferrer"   
                className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h">
                <SiGmail size={20} className="icon transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/tobias-maugus"
                target="_blank"
                rel="noopener noreferrer"    
                className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h">
                <SiLinkedin  size={20} className="icon transition-all duration-300" />
              </a>
              <a href="https://github.com/TobiasMaugus"
                target="_blank"
                rel="noopener noreferrer"  
                className="icon-wrapper px-3 py-2.5 border-r border-custom-h equal-width-h">
                <SiGithub size={20} className="icon transition-all duration-300" />
              </a>
          </ul>

          <button
            onClick={() => setShowModal(true)}
            className="icon-wrapper ml-auto px-3 py-2.5 border-l border-custom-h equal-width-h cursor-pointer"
            >
            <LuSettings size={20} className="icon transition-all duration-300" />
          </button>
        </nav>
    </footer>
  );
}
