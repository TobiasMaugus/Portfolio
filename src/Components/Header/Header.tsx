import {colors} from '../../colors/colors.ts';
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header
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
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
      }}
    >
        <nav className=" flex-1 flex items-center">
          <div className="px-12 py-2 border-r border-custom font-light">tobias-maugus</div>
            <ul className="hidden md:flex flex-grow">
              <li className="border-r border-custom equal-width">
                <NavLink to="/" className={({ isActive }) =>
                  `text-wrapper px-5 py-2 ${isActive ? 'active-link' : ''}`
                }>_hello</NavLink>
              </li>
              <li className="border-r border-custom equal-width">
                <NavLink to="/about-me" className={({ isActive }) =>
                  `text-wrapper px-5 py-2 ${isActive ? 'active-link' : ''}`
                }>_about-me</NavLink>
              </li>
              <li className="border-r border-custom equal-width">
                <NavLink to="/projects" className={({ isActive }) =>
                  `text-wrapper px-5 py-2 ${isActive ? 'active-link' : ''}`
                }>_projects</NavLink>
              </li>
            </ul>
            <ul className="hidden md:flex">
              <li className="border-l border-custom equal-width-contact">
                <a href="#" className="text-wrapper px-5 py-2">_contact-me</a>
              </li>
            </ul>
        </nav>
    </header>
  );
}
