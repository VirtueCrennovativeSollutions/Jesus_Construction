import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Project Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="w-full py-4 px-4 md:px-6 fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md shadow-lg"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-10 md:w-14 md:h-12 object-contain rounded"
          />
          <h1 className="text-xl md:text-2xl font-bold text-[#960000]">
            Jesus Construction
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex items-center gap-8 text-white font-medium"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group relative inline-block transition-all duration-300 ${
                    isActive ? "text-[#960000]" : "text-white"
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#960000] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/80 backdrop-blur-xl mt-4 rounded-lg p-5 shadow-lg"
        >
          <ul className="flex flex-col gap-6 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg tracking-wide py-2 px-2 rounded transition-all ${
                      isActive
                        ? "text-[#960000] bg-white/10"
                        : "text-white hover:text-[#960000]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;