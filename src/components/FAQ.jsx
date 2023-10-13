import { useState } from "react";
import { motion } from "framer-motion";

import g1Sc from "../assets/images/g1.svg";
import Nix from "../assets/images/nix.svg";
import Pauta from "../assets/images/pauta.svg";
import Risoluto from "../assets/images/risoluto.svg";

const FAQData = [
  {
    question: "G1 SANTA CATARINA",
    image: <img src={g1Sc.src} alt="Site G1 Santa Catarina" className="w-[45%] mr-6 rounded-xl hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>Among the projects I worked on at NSC Comunicações. Highlights include Portal G1 in Santa Catarina, where I worked as a Dev Front-end with the team in Rio de Janeiro.</p><p className="mt-3"> The daily activities were to retrieve tasks from Jira and hold daily meetings. I worked with React or NextJS projects as front-end and 100% remote.</p><p className="mt-3"> With Backend dealing with NestJS, GraphQL, NodeJS, PostgreSQL resources in a superficial way. It is important to emphasize that I've not worked on Mobile projects with React Native. WebApp and PWA only.</p></div>,
    url: <a href="https://g1.globo.com/sc/santa-catarina/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "NIX da NEXXERA",
    image: <img src={Nix.src} alt="Site do Nix Gateway de Pagamento" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>The project marked a phase in my life where I started to migrate from Webdesign to Front-end. It was my first contact with a Framework at the time, AngularJS.</p><p className="mt-3">This occurred in mid-2016. I worked with AngularJS, Bootstrap, CSS HTML, and later Angular Material. Jenkins, GitLab, Jira, Sprints, Scrum.</p></div>,
    url: <a href="https://www.pauta.com.br/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "Pauta Distribuidora",
    image: <img src={Pauta.src} alt="Site Rizoluto" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>Pauta Distribuidora is an e-commerce that sells technology/electronic equipment to small and medium-sized retailers, CNPJ’s. This was my last project as a Senior Web Designer.</p><p className="mt-3"> In this project, I was the Web designer working on all parts of the e-commerce interface together with another Backend Java programmer who programmed JSP. I worked mainly with HTML, CSS, JQuery, JavaScript, and the first versions of Bootstrap and Design.</p><p className="mt-3"> I occasionally still do work for them as a freelancer. The current version of e-commerce was also created by me with another Developer in Angular8.</p></div>,
    url: <a href="https://www.minhanix.com.br/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "Risoluto",
    image: <img src={Risoluto.src} alt="Site Risoluto" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>Risoluto is the product of one of the small companies I worked for and my experience there was greater contact with AngularJS in projects at "Banco de Fomento do Estado de SC" and also Angular8 with the Web version of the People Management System.</p><p className="mt-3"> Technically speaking about the project, I worked basically dealing with the interfaces in a very accelerated service volume. It was a great challenge and a good place to define my next career steps. The direction I'm still heading today. HTML, CSS, JQUERY, Bootstrap, AngularJS, Angular8, Angular Material, and the like were the focus of my work there.</p></div>,
    url: <a href="https://risoluto.com.br/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            More Projects
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
          Previous Projects
          </h2>
          <div className="mb-11 flex flex-wrap m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  image={item.image}
                  content={item.answer}
                  url={item.url}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, image, content, url }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8 rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-start">
        <h3 className="custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <div
          className={`text-gray-300 text-sm pt-4 transition-all duration-300 overflow-hidden flex-col ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="w-full flex">
            {image}
            <div className="flex-col">
              {content}
              {url}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};