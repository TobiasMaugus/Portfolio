import { useState } from "react";
import { colors, light_colors } from "../../colors/colors.ts";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext.tsx";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { languages } from "../../languages/languages";

export default function Header() {
  const { theme, language } = useAppContext();
  const themeColors = theme === "dark" ? colors : light_colors;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const l = languages[language];

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const navItems = [
    { path: "/", label: l.hello },
    { path: "/about-me", label: l.about },
    { path: "/projects", label: l.projects },
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
          {navItems.map((item) => (
            <li key={item.path} className="border-r border-custom equal-width">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-wrapper px-5 py-2 ${isActive ? "active-link" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex">
          <li className="border-l border-custom equal-width-contact">
            <Link to="contact-me" className="text-wrapper px-5 py-2">
              {l.contact}
            </Link>
          </li>
        </ul>

        {/* Botão do drawer no mobile */}
        <div
          className="md:hidden px-4 cursor-pointer ml-auto flex items-center"
          onClick={toggleDrawer}
        >
          <AnimatePresence mode="wait" initial={false}>
            {drawerOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Drawer mobile */}
        {drawerOpen && (
          <div
            className="md:hidden absolute top-full right-0 shadow-lg flex flex-col z-50"
            style={{
              borderColor: themeColors.second,
              borderWidth: "1px",
              minWidth: "150px",
              backgroundColor: themeColors.primary,
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="drawer px-5 py-4 border-b border-custom"
                onClick={() => setDrawerOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="contact-me"
              className="drawer px-5 py-4"
              onClick={() => setDrawerOpen(false)}
            >
              {l.contact}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
