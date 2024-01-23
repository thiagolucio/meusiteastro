import { useState } from "react";
import { motion } from "framer-motion";

import g1Sc from "../../assets/images/g1.svg";
import Nix from "../../assets/images/nix.svg";
import Pauta from "../../assets/images/pauta.svg";
import Risoluto from "../../assets/images/risoluto.svg";

const FAQData = [
  {
    question: "G1 SANTA CATARINA",
    image: <img src={g1Sc.src} alt="Site G1 Santa Catarina" className="w-[45%] mr-6 rounded-xl hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>Entre os projetos que atuei na NSC Comunicações. Os destaques incluem o Portal G1 em Santa Catarina, onde atuei como Dev Front-end com a equipe no Rio de Janeiro.</p><p className="mt-3"> As atividades diárias eram recuperar tarefas do Jira e segurar reuniões diárias. Trabalhei com projetos React ou NextJS como front-end e 100% remoto.</p><p className="mt-3"> Com Backend lidando com recursos NestJS, GraphQL, NodeJS, PostgreSQL de forma superficial. É importante ressaltar que não trabalhei em projetos Mobile com React Native. Apenas WebApp e PWA.</p></div>,
    url: <a href="https://g1.globo.com/sc/santa-catarina/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "NIX da NEXXERA",
    image: <img src={Nix.src} alt="Site do Nix Gateway de Pagamento" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>O projeto marcou uma fase da minha vida onde comecei a migrar do Webdesign para o Front-end. Foi meu primeiro contato com um Framework na época, AngularJS.</p><p className="mt-3">Isso ocorreu em meados de 2016. Trabalhei com AngularJS, Bootstrap, CSS HTML e posteriormente Angular Material. Jenkins, GitLab, Jira, Sprints, Scrum.</p></div>,
    url: <a href="https://www.pauta.com.br/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "Pauta Distribuidora",
    image: <img src={Pauta.src} alt="Site Rizoluto" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>Pauta Distribuidora é um e-commerce que vende tecnologia/equipamentos eletrônicos para pequenos e médios varejistas, CNPJ’s. Este foi meu último projeto como Web Designer Sênior.</p><p className="mt-3"> Neste projeto, eu era o Web designer trabalhando em todas as partes da interface de e-commerce junto com outro programador Backend Java que programou JSP. Trabalhei principalmente com HTML, CSS, JQuery, JavaScript e as primeiras versões de Bootstrap e Design.</p><p className="mt-3"> Ocasionalmente ainda trabalho para eles como freelancer. A versão atual do e-commerce também foi criada por mim com outro desenvolvedor em Angular8.</p></div>,
    url: <a href="https://www.minhanix.com.br/" target="_blank" className="inline-block text-center px-4 rounded-xl custom-button-colored font-bold leading-loose mt-4 py-2"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "Risoluto",
    image: <img src={Risoluto.src} alt="Site Risoluto" className="w-[45%] pr-6 hidden xs:hidden sm:hidden md:hidden lg:block xl:block xll:block 2xl:block m-2" />,
    answer: <div><p>O Risoluto é produto de uma das pequenas empresas em que trabalhei e minha experiência foi maior contato com AngularJS em projetos no "Banco de Fomento do Estado de SC" e também Angular8 com a versão Web do Sistema de Gestão de Pessoas.</p ><p className="mt-3"> Tecnicamente falando do projeto, trabalhei basicamente lidando com as interfaces em um volume de serviço bastante acelerado. Foi um grande desafio e um bom lugar para definir meus próximos passos na carreira. A direção que ainda estou seguindo hoje. HTML, CSS, JQUERY, Bootstrap, AngularJS, Angular8, Angular Material e similares foram o foco do meu trabalho lá.</p></div>,
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
            Mais Projetos
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Pojetos Anteriores
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