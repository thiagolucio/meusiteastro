import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../../../assets/icons/CheckArrowIcon";
import SysMapLogo from "../../../assets/images/logoSysmap.png";
import LogoEstacio from "../../../assets/images/unesa-logo.jpg";
import LogoAtos from "../../../assets/images/logoAtos.jpeg";
import LogoUnisul from "../../../assets/images/unisul-logo.jpeg";
import LogoNsc from "../../../assets/images/logonsctv.jpeg";
import LogoUnivali from "../../../assets/images/univali-logo.jpg";

// import { Language } from "../../Language";

const sysMapData = [
  "Agile Methodologies",
  "UX/UI Analysis",
  "Figma Prototyping Analysis",
  "Design to Code Conversion",
  "Creation of web/mobile UI components",
  "Using React Native, HTML, SCSS - Styled Components, TypeScript, StencilJS",
  "Unit testing with Jest",
  "Storybook and Chromatic",
  "Plop for component generation",
  "Azure Environment",
];

const atosData = [
  "Agile Methodologies",
  "UX/UI Analysis",
  "Figma Prototyping Analysis",
  "Design to Code Conversion",
  "Frontend Development Full Cycle",
  "Using Angular12, HTML, CSS, Typescript and Angular Material, Bootstrap",
  "PrismaJS, Kubernetes, Docker, PostgreSQL",
  "Semaphore, SonarQube",
  "Jira and trello",
  "Azure Environment",
];

const nscData = [
  "Agile Methodologies",
  "UX/UI Analysis",
  "Figma Prototyping Analysis",
  "Design to Code Conversion",
  "Frontend Development Full Cycle",
  "Using ReactJS, NodeJS, NextJS, Drupal, HTML, CSS, Typescript",
  "GraphQL, NestJS, Kubernetes, Docker, PostgreSQL, Semaphore, Lambda AWS, S3 AWS, EC2 AWS",
  "Jira and trello",
  "AWS Environment",
];

export const Experience = () => {
  const [isExperience, setIsExperience] = useState(true);

  const handleChange = () => {
    setIsExperience(!isExperience);
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="experience" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">Fast Resume</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Experience & Education
              </h2>
              <p className="mb-6 text-customGrayText">
                My last 3 professional experiences and my main principal academic backgrounds
              </p>
              <label className="mx-auto bg-zinc-700 flex items-center w-[345px] h-16 rounded-lg px-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isExperience}
                  onChange={handleChange}
                />
                <span className="
                  w-[148px]
                  h-[50px]
                  after:w-[148px]
                  after:h-[50px]
                  absolute
                  flex 
                  items-center 
                  after:rounded-lg duration-300 ease-in-out
                  after:bg-customTransparentBgPrimary
                  text-white     
                  after:shadow-md 
                  after:duration-300 
                  peer-checked:after:translate-x-[10.9rem] 
                  cursor-pointer"></span>
                <div className="flex gap-x-16 text-white absolute">
                  <div
                    className={
                      isExperience ? "text-white w-[148px]" : " text-gray-400 w-[148px]"
                    }
                  >
                    Experience
                  </div>
                  <div className={isExperience ? "text-gray-400" : "text-white"}>
                    Education
                  </div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              {/* TABLE 1 */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                {isExperience ? (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      Frontend UX/ UI Developer
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={SysMapLogo.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Remote - May/2022 - Now
                      </div>
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                    SysMap Solutions Short-Term Contract with its client portfolio serving on Mobile projects for clients such as the "Sem Parar" App and Fleetcor (USA).
                    Working on building the Mobile and Web Component Library to serve these clients' projects and teams.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {sysMapData.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://www.semparar.com.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Project
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      System Analisys
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoEstacio.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        1997 - 2002
                      </div>
                    </div>
                    <h5 className="text-md font-bold text-blue-300 text-center">
                      Bachelor's Degree
                    </h5>
                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-center">
                      The Systems Analysis and Development course teaches you
                      how to design, document, specify, test, implement and
                      maintain computer systems and software.
                    </p>
                    <a
                      href="hhttps://estacio.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Intitution
                    </a>
                  </div>
                )}
              </div>
              {/* TABLE 2 */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                {isExperience ? (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      Frontend UX/ UI Developer
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoAtos.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Remote - July/2021 - May/2022
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                      Working company's MySeat project among other side
                      projects. Developing Web and PWA applications for the
                      project and working throughout the Front/Backend cycle.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {atosData.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://atos.net/pt-br/brasil-atos/myseat"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Project
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      Web Development
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoUnisul.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        2009 - 2013
                      </div>
                    </div>
                    <h5 className="text-md font-bold text-blue-300 text-center">
                      Bachelor's Degree
                    </h5>
                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left">
                      Prepare the individual to work on creating web pages,
                      applications and others. The Web Development faculty is
                      responsible for training professionals capable of
                      servicing, planning, building, testing, maintaining and
                      updating web systems.
                    </p>
                    <a
                      href="https://www.unisul.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Intitution
                    </a>
                  </div>
                )}
              </div>
              {/* TABLE 3 */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                {isExperience ? (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-xl font-bold font-heading text-white text-center">
                      Frontend UX/ UI Developer
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoNsc.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Hybrid - March/2020 - July/2021
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                      Branch of Rede Globo Network Television in the State of
                      Santa Catarina, working mainly on the projects G1 de Santa
                      Catarina, NSC Total (local newspaper) and Hora de Santa
                      Catarina in addition to Rádio Atlântida.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {nscData.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://www.nsctotal.com.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Project
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      Interaction Design UX & UI
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoUnivali.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        2016 - 2018
                      </div>
                    </div>
                    <h5 className="text-md font-bold text-blue-300 text-center">
                      Master's Degree/ Especialization in Interaction Design UX/ UI
                    </h5>
                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left">
                      Course dedicated to the study and practice of Interaction
                      and User-Centered Design. UX and UI techniques dedicated
                      to creating systems and applications are taught.
                    </p>
                    <a
                      href="https://univali.br/pos/lato-sensu/Paginas/default.aspx?curso=design-de-interacao"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Know Intitution
                    </a>
                  </div>
                )}
              </div>
              <a
                href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825/"
                target="_blank"
                className="text-blue-300 text-center text-lg py-2 px-4 w-full mt-16 underline underline-offset-4"
              >
                <i className="fa-brands fa-linkedin mr-2 fa-lg"></i>
                See all professional experiences on my Linkedin
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
