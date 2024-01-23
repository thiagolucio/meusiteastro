import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";
import SysMapLogo from "../../assets/images/logoSysmap.png";
import LogoEstacio from "../../assets/images/unesa-logo.jpg";
import LogoAtos from "../../assets/images/logoAtos.jpeg";
import LogoUnisul from "../../assets/images/unisul-logo.jpeg";
import LogoNsc from "../../assets/images/logonsctv.jpeg";
import LogoUnivali from "../../assets/images/univali-logo.jpg";

// import { Language } from "../../Language";

const sysMapData = [
  "Metodologias Ágeis",
  "Análise UX/UI",
  "Prototipação usando Figma",
  "Conversação de Design para Código",
  "Criação de Biblioteca de Componentes",
  "Testes unitários com Jest",
  "React, React Native, StencilJS, SvelteJS, HTML, SCSS - Styled Components, TypeScript",
  "Jest, StorybookJS e Chromatic. Plop, Git",
  "Azure, AWS",
  "Jira",
];

const atosData = [
  "Metodologias Ágeis",
  "Análise UX/UI",
  "Prototipação usando Figma",
  "Conversação de Design para Código",
  "Criação de Biblioteca de Componentes",
  "Angular12, HTML, CSS, Typescript and Angular Material, Bootstrap",
  "PrismaJS, Kubernetes, Docker, PostgreSQL, Semaphore, SonarQube",
  "Azure e AWS",
  "Jira"
];

const nscData = [
  "Metodologias Ágeis",
  "Análise UX/UI",
  "Prototipação usando Figma",
  "Conversação de Design para Código",
  "Criação de Biblioteca de Componentes",
  "React Native, NodeJS, NextJS, Drupal, HTML, SCSS - Styled Components, TypeScript, StencilJS, Angular12, HTML, CSS, JS/ TS.",
  "GraphQL, NestJS, Kubernetes, Docker, PostgreSQL, Semaphore, Lambda AWS, S3 AWS, EC2 AWS",
  "PrismaJS, Kubernetes, Docker, PostgreSQL",
  "Semaphore, SonarQube",
  "Azure e AWS",
  "Jira"
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
              <span className="custom-block-subtitle">RESUMO RÁPIDO </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Experiência & Educação
              </h2>
              <p className="mb-6 text-customGrayText">
                Minhas 3 últimas experiências profissionais e as 3 principais formações acadêmicas.
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
                    Experiência
                  </div>
                  <div className={isExperience ? "text-gray-400" : "text-white"}>
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
                    <h4 className="mb-2 text-sm font-bold font-heading text-white text-center">
                      Desenvolvedor Front-end
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={SysMapLogo.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Remoto - May/2022 - Now
                      </div>
                    </div>
                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-justify text-xs">
                      Contrato SCP da SysMap Solutions com sua carteira de clientes atendendo em projetos <b>MOBILE</b> de clientes como o App do "Sem Parar" e Fleetcor (EUA).
                       Trabalhando na construção da <b>Biblioteca de Componentes Mobile e Web</b> para atender projetos e times destes clientes.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {sysMapData.map((text, index) => (
                        <li className="mb-4 flex" key={`${text}-${index}`}>
                          <CheckArrowIcon />
                          <span className="text-xs">{text}</span>
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
                      Analistas de Sistemas
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
                      Bacharel
                    </h5>
                    <p className="text-xs mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose">
                      Curso de Análise de Sistemas fornecendo um Diploma de Bacharel na profissão
                    </p>
                    <a
                      href="hhttps://estacio.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a instituição
                    </a>
                  </div>
                )}
              </div>
              {/* TABLE 2 */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                {isExperience ? (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-sm font-bold font-heading text-white text-center">
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

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-justify text-xs">
                      Trabalhando principalmente no projeto MySeat. Um produto da própria empresa e é uma aplicação WEBAPP/ PWA. 
                      Lidando com os Designers na construção das interfaces, otimizando desempenho na implementação do Código
                      e desenvolvendo com o time de desenvolvimento Front-end.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {atosData.map((text, index) => (
                        <li className="mb-4 flex text-xs" key={`${text}-${index}`}>
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
                      Bacharelado
                    </h5>
                    <p className="text-sm mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left">
                      Preparando o indivíduo na criação de páginas, aplicações e projetos web. 
                    </p>
                    <a
                      href="https://www.unisul.br/"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a instituição
                    </a>
                  </div>
                )}
              </div>
              {/* TABLE 3 */}
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                {isExperience ? (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 text-sm font-bold font-heading text-white">
                      Desenvolvedor Front-end & UX/ UI
                    </h4>
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 mr-2">
                        <img
                          src={LogoNsc.src}
                          className="w-[128px] h-[128px]"
                        />
                      </div>
                      <div className="text-indigo-200 text-center text-sm mt-2">
                        Híbrido - Março/2020 - Julho/2021
                      </div>
                    </div>

                    <p className="mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left text-xs">
                      Filial da Rede Globo do estado de Santa Catarina. Trabalhando principalmente em projetos do Lab da empresa, 
                      incluíndo G1 de Santa Catarina, NSC TV, NSC Total, Hora de Santa Catarina e Rádio Atlântida.
                    </p>
                    <ul className="mb-2 2xl:mb-6 text-white">
                      {nscData.map((text, index) => (
                        <li className="mb-4 flex text-xs" key={`${text}-${index}`}>
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
                      Conheça o projeto
                    </a>
                  </div>
                ) : (
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                    <h4 className="mb-2 font-bold text-white text-center text-sm">
                     Design de Interação UX/UI
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
                      Especialização<br /> ou Pós-graduação
                    </h5>
                    <p className="text-xs mt-4 mb-6 2xl:mb-10 text-gray-200 leading-loose text-left">
                      Curso é dedicado ao estudo e prática da Interação do Design de usuário, ensinando técnicas dedicada ao UX e UI na criação de interfaces
                      para sistemas e aplicações.
                    </p>
                    <a
                      href="https://univali.br/pos/lato-sensu/Paginas/default.aspx?curso=design-de-interacao"
                      target="_blank"
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                      Conheça a insituição
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
                Veja todas as minhas experiências profissionais do Linkedin
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
