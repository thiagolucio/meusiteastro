import { motion, AnimatePresence } from "framer-motion";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import Logo from "../assets/logos/logo.png";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img src={Logo.src} width="30" height="30" alt="Logo" />
                </div>
                <div className="mt-3 ml-1">
                  <span className="title text-white text-4xl">
                    Thiago Lúcio
                  </span>
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Conheça as minhas redes profissionais para analisar melhor meu
                perfil e conhecimento.
              </p>
              <div className="w-36 mx-auto lg:mx-0 flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825/"
                    target="_blank"
                    className="w-10 h-10 rounded-full font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
                  >
                    <i className="fa-brands fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825/"
                    target="_blank"
                    className="w-10 h-10 rounded-full font-bold text-white border border-solid flex justify-center items-center cursor-pointer  bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
                  >
                    <i className="fa-brands fa-github fa-lg"></i>
                  </a>
              </div>
            </div>
            {/* <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Texto
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  <i class="fa-brands fa-linkedin"></i>
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Texto
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="text-gray-400 hover:text-gray-300"
                      href="#"
                      aria-label=""
                    >
                      Texto
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2023. Esse Site é meu mesmo e eu mesmo que fiz ele usando
            AstroJS, TailwindCSS, Framer Motion e Font Source.
          </p>
        </div>
      </div>
    </footer>
  );
};
