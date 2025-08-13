import { useState } from "react";
import { colors, light_colors } from "../../colors/colors.ts";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext.tsx";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { theme } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { path: "/", label: "_hello" },
    { path: "/about-me", label: "_about-me" },
    { path: "/projects", label: "_projects" },
  ];

  return (
    <header
      className="flex items-center justify-between border-b font-sans font-normal"
      style={{
        width: "95%",
        height: "7.5%",
        backgroundColor: themeColors.primary,
        borderColor: themeColors.second,
        borderWidth: "1px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 200,
        fontStyle: "thin",
        color: themeColors.second,
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      }}
    >
      <nav className="flex-1 flex items-center relative">
        {/* Logo desktop */}
        <div className="px-12 py-2 border-r border-custom font-light">
          tobias-maugus
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-grow">
          <li className="border-r border-custom equal-width">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-wrapper px-5 py-2 ${isActive ? "active-link" : ""}`
              }
            >
              _hello
            </NavLink>
          </li>
          <li className="border-r border-custom equal-width">
            <NavLink
              to="/about-me"
              className={({ isActive }) =>
                `text-wrapper px-5 py-2 ${isActive ? "active-link" : ""}`
              }
            >
              _about-me
            </NavLink>
          </li>
          <li className="border-r border-custom equal-width">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-wrapper px-5 py-2 ${isActive ? "active-link" : ""}`
              }
            >
              _projects
            </NavLink>
          </li>
        </ul>

        <ul className="hidden md:flex">
          <li className="border-l border-custom equal-width-contact">
            <Link to="contact-me" className="text-wrapper px-5 py-2">
              _contact-me
            </Link>
          </li>
        </ul>

        {/* Hamburger mobile no canto direito */}
        <div
          className="md:hidden px-4 cursor-pointer ml-auto"
          onClick={toggleDrawer}
        >
          {drawerOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Drawer mobile no canto direito */}
        {drawerOpen && (
          <div
            className="md:hidden absolute top-full right-0 bg-white dark:bg-gray-900 shadow-lg flex flex-col z-50"
            style={{
              borderColor: themeColors.second,
              borderWidth: "1px",
              minWidth: "150px",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-wrapper px-5 py-3 border-b border-custom"
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="contact-me"
              className="text-wrapper px-5 py-3"
              onClick={() => setDrawerOpen(false)}
            >
              _contact-me
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
