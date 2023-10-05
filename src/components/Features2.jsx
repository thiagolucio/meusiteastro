import { motion } from "framer-motion";

import euWebDesigner from "../assets/images/webdesign.jpg";
import euFrontEnd from "../assets/images/escritorio.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={euWebDesigner.src}
                alt="Eu na empresa em Minas Gerais em 2013"
                className="rounded-xl"
                width="400px"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={euFrontEnd.src}
                alt="Eu em casa em 2023"
                className="rounded-xl"
                width="400px"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Resumo rápido
            </span>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              De Webdesigner para o<span className="text-customPrimary"> Front-end</span>
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
              Eu sou o antigo Webdesigner que em meados de 2016 começou a migrar naturalmente para o Front-end. Aos poucos estou evoluindo no Desenvolvimento de Sistemas web e mobile.
              <br />
             Staks principais:
            </p>           
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>HTML</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>CSS/ SCSS</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>JavaScript & TypeScript</span>
              </li>           
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Design de Interação (UX e UI)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
