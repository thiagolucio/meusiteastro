import { motion } from "framer-motion";

import feature1 from "../assets/images/profit01.jpg";
import feature2 from "../assets/images/feature2.jpg";
import feature3 from "../assets/images/feature3.jpg";
import feature4 from "../assets/images/feature4.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">Professional Fit</span>
              <h2 className="mt-6 mb-8 text-2xl custom-block-big-title">
                Todo ciclo <span className="text-customPrimary">Front-end</span>
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                Trabalhando por toda a esteira do ciclo de Front-end. Trabalhando desde a análise do processo de interação com o usuário, criando protótipos, codificando e implementando projetos web ou mobile.
                {/* Working across the entire Frontend cycle mat from UX/UI analysis and interaction creation, prototyping, coding and implementation of web or mobile projects. */}
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Design de Interação usando UX/ UI</span>
                  {/* <span>UX and UI and Interaction Design</span> */}
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Prototipando e Sessionando para o Frontend</span>
                  {/* <span>Prototyping and Wireframing</span> */}
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Implementando com o time de Front-end usando frameworks/ bibliotecas ou afins.</span>
                  {/* <span>Coding Frontend using Frameworks, Libraries or "hands on".</span> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1.src}
                  alt="f1"
                  className="rounded-lg shadow-sm shadow-gray-950 mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded">
                <img
                  src={feature2.src}
                  alt="f2"
                  className="rounded-xl shadow-lg shadow-gray-950 mx-auto sm:mx-unset"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20 pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={feature3.src}
                  alt="f3"
                  className="rounded-xl shadow-lg shadow-gray-950"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg">
                <img
                  src={feature4.src}
                  alt="f4"
                  className="rounded-xl shadow-lg shadow-gray-950"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
