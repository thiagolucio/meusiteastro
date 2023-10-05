import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import SysMapLogo from "../assets/images/logoSysmap.png";
import LogoEstacio from "../assets/images/unesa-logo.jpg";
import LogoAtos from "../assets/images/logoAtos.jpeg";
import LogoUnisul from "../assets/images/unisul-logo.jpeg";
import LogoNsc from "../assets/images/logonsctv.jpeg";
import LogoUnivali from "../assets/images/univali-logo.jpg";

const sysMapData = [
  "Metodologias Ágeis",
  "Analise UX/ UI",
  "Análise de Prototipação Figma",
  "Conversão Design para Códigos",
  "Criação dos componentes de UI web/ mobile",
  "Utilizando React Native, HTML, SCSS - Styled Components, TypeScript, StencilJS",
  "Testes unitarios com Jest",
  "Storybook e Chromatic",
  "Plop para geração de componentes",
  "Ambiente Azure",
];

const atosData = [
  "Metodologias Ágeis",
  "Analise UX/ UI",
  "Análise de Prototipação Figma",
  "Conversão Design para Códigos",
  "Ciclo completo do Desenvolvimento Frontend",
  "Utilizando Angular12, HTML, CSS, Typescript e Angular Material, Bootstrap",
  "PrismaJS, Kubernetes, Docker, PostgreSQL",
  "Semaphore, SonarQube",
  "Jira and trello",
  "Ambiente Azure",
];

const nscData = [
  "Metodologias Ágeis",
  "Analise UX/ UI",
  "Análise de Prototipação Figma",
  "Conversão Design para Códigos",
  "Ciclo completo do Desenvolvimento Frontend",
  "Utilizando ReactJS, NodeJS, NextJS,  Drupal, HTML, CSS, Typescript",
  "GraphQL, NestJS, Kubernetes, Docker, PostgreSQL, Semaphore, Lambda AWS, S3 AWS, EC2 AWS",
  "Jira and trello",
  "Ambiente AWS",
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
              <span className="custom-block-subtitle">
                Resumno profissional rápido
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Experiência & Eduação
              </h2>
              <p className="mb-6 text-customGrayText">
                Minhas 3 últimas experiências profissionais e minhas principais
                formações acadêmicas
              </p>
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-[198px] h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isExperience}
                  onChange={handleChange}
                />
                <span className="h-8 w-[7rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div
                    className={
                      isExperience ? "mr-4 ml-3" : "mr-5 ml-1 text-gray-400"
                    }
                  >
                    Experiência
                  </div>
                  <div className={isExperience && "text-gray-400"}>
                    Educação
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
                        <img src={SysMapLogo.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Remoto - Maio/2022 - Agora
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                      Sócio co-participativo trabalhando junto aos projetos de
                      clientes da empresa junto aos times de Design System,
                      criando a Biblioteca de componentes para aplicações Web e
                      Mobile
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
                      Conheça o projeto
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      Análise de Sistemas
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img src={LogoEstacio.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        1997 - 2002
                      </div>
                    </div>

                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-center">
                      Bacharelado em Análise de Sistemas
                    </p>
                    <a
                      href="hhttps://estacio.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a Intituição
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
                        <img src={LogoAtos.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Remoto - Maio/2022 - Agora
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                      Trabalhando com projeto MySeat da empresa entre outros secundários. Desenvolvendo aplicações Web e PWA do projeto e trabalhando em todo ciclo Front/ Backend
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
                      Conheça o projeto
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      Desenvolvimento Web
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img src={LogoUnisul.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        2009 - 2013
                      </div>
                    </div>

                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-center">
                      Bacharelado em Desenvolvimento Web
                    </p>
                    <a
                      href="https://www.unisul.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a Intituição
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
                        <img src={LogoNsc.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Híbrido - Março/2020 - July/2021
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-sm">
                      Filial da Rede Globo de Televisão no Estado de Santa Catarina, trabalhando principalmente nos projetos G1 de Santa Catarina, NSC Total (jornal local) e Hora de Santa Catarina além da Rádio Atlântida.
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
                      Conheça a empresa
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-lg font-bold text-white text-center">
                      Design de Interação UX/ UI
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img src={LogoUnivali.src} className="w-[128px] h-[128px]" />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        2016 - 2018
                      </div>
                    </div>

                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-center">
                      Pós-Graduação em Design de Interação
                    </p>
                    <a
                      href="https://www.univali.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a Intituição
                    </a>
                  </div>
                )}
              </div>
                <a href="https://www.linkedin.com/in/thiago-lucio-bittencourt-b0452825/" target="_blank" className="text-blue-300 text-center text-lg py-2 px-4 w-full mt-16 underline underline-offset-4"
                >
                  <i className="fa-brands fa-linkedin mr-2 fa-lg"></i>
                  Veja as experiências profissionais anteriores no meu Linkedin
                </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
