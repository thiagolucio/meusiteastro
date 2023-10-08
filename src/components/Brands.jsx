import { motion } from "framer-motion";

import Nexxera from "../assets/logos/nexxera.jpg";
import Pauta from "../assets/logos/pauta.png";
import Compaq from "../assets/logos/compaq.svg";
import Primesys from "../assets/logos/primesys.svg";

export const Brands = () => (
  <section className="w-screen flex justify-center bg-customDarkBg1 p-16 mx-auto lg:flex-row flex-col lg:pt-24 pb-8 lg:pb-20">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="w-full px-4 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Empresas
              </h2>
              <h2 className="text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                por onde passei
              </h2>
            </div>
          </div>
          <div className="w-3/3 sm:w-[620px] lg:w-3/3 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4 gap-16">
              {/* <div className="w-1/3 sm:w-1/3 py-6 text-center">
                <div className=badge-base LI-profile-badge shadow-xlg shadow-customDarkBg1" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="thiago-lucio-bittencourt-b0452825" data-version="v1"><a className=badge-base__link LI-simple-link" href="https://br.linkedin.com/in/thiago-lucio-bittencourt-b0452825?trk=profile-badge"></a></div>
              </div> */}
              <div className="w-1/3 sm:w-1/3 py-4 text-center bg-white rounded-xl flex justify-center items-center">
                <img src={Nexxera.src} alt="Nexxera Logo" className="w-[130px] h-[35px]"/>
              </div>
              <div className="w-1/3 sm:w-1/3 py-4 text-center bg-white rounded-xl flex justify-center items-center">
                <img src={Pauta.src} alt="Pauta Logo" className="w-[130px] h-[45px]"/>
              </div>
              <div className="w-1/3 sm:w-1/3 py-4 text-center bg-white rounded-xl flex justify-center items-center">
                <img src={Compaq.src} alt="Compaq Logo" className="w-[130px] h-[45px]"/>
              </div>
              <div className="w-1/3 sm:w-1/3 py-4 text-center bg-white rounded-xl flex justify-center items-center">
                <img src={Primesys.src} alt="Primesys Logo" className="w-[130px] h-[45px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);