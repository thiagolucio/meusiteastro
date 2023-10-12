import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../assets/logos/logo.png";
// import { Language } from "./Language";

const navbarLinks = [
  { label: "Start", href: "#home", ariaLabel: "Start" },
  { label: "ProFit", href: "#features", ariaLabel: "ProFit" },
  { label: "XP & Education", href: "#experience", ariaLabel: "XP & Education" },
  { label: "Projects", href: "#feedback", ariaLabel: "Projects" },
  // { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              {/* <div className="mr-2">
                <img src={Logo.src} width='30' height="30" alt="Logo" />
              </div> */}
              <div className="title text-white text-4xl mt-2">
                Thiago Lúcio
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex gap-2">
            <a
              href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825/"
              target="_blank"
              className="w-10 h-10 rounded-full font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
              >
                <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a
              href="https://github.com/thiagolucio/"
              target="_blank"
              className="w-10 h-10 rounded-full font-bold text-white border border-solid flex justify-center items-center cursor-pointer  bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a
              href="https://www.behance.net/thiagolucio/"
              target="_blank"
              className="w-10 h-10 rounded-full font-bold text-white border border-solid flex justify-center items-center cursor-pointer  bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
              title="Behance - Trabalhos antigos"
            >
              <i className="fa-brands fa-square-behance fa-lg"></i>
            </a>
              {/* <Language/> */}
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-white custom-border-gray rounded-xl
                bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin my-auto mr-2 fa-xl"></i>
                Linkedin
              </a>
              <a
                className="text-white custom-border-gray rounded-xl
                bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
                <i className="fa-brands fa-github my-auto mr-2 fa-xl"></i>
                Github
              </a>
              <a
                className="text-white custom-border-gray rounded-xl
                bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
              >
            <i className="fa-brands fa-behance my-auto mr-2 fa-xl"></i>
                Behance
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
