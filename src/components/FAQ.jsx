import { useState } from "react";
import { motion } from "framer-motion";

import g1Sc from "../assets/images/g1sc/g1.svg";
import Nix from "../assets/images/g1sc/g1.svg";
import Rizoluto from "../assets/images/g1sc/g1.svg";
import Vigia from "../assets/images/g1sc/g1.svg";

const FAQData = [
  {
    question: "G1 SANTA CATARINA",
    image: <img src={g1Sc.src} alt="Site G1 Santa Catarina" className="w-[45%] mr-6 rounded-xl" />,
    answer: <div><p>Dentre os projetos que trabalhei na NSC Comunicações. Destaca-se o Portal G1 de Santa Catarina onde trabalhei como Dev Front-end junto com o time no Rio de Janeiro.</p><p className="mt-3"> O cotidiano das atividades era lidar com as tasks diárias do Jira e fazer reuniões diárias. Trabalhei com projetos React ou NextJS como Front-end e 100% remoto.</p><p className="mt-3"> Com Backend lidando com recursos NestJS, GraphQL, NodeJS, PosgreSQL de forma superficial. Importante reforçar que eu não trabalhei em projetos Mobile com React Native. Somente WebApp e PWA.</p></div>,
    url: <a href="https://g1.globo.com/sc/santa-catarina/" target="_blank" className="inline-block text-center px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"><i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>Conheça o projeto</a>,
  },
  {
    question: "NIX da NEXXERA",
    image: <img src={Nix.src} alt="Site do Nix Gateway de Pagamento" className="w-[45%] pr-6" />,
    answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
    url: "https://www.minhanix.com.br/",     
  },
  {
    question: "What's your refund policy?",
    image: <img src={Rizoluto.src} alt="Site Rizoluto" className="w-[45%] pr-6" />,
    answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
    url: "https://www.minhanix.com.br/",    
  },
  {
    question: "How to get support for the product?",
    image: <img src={Vigia.src} alt="Site Vigia da Suntech" className="w-[45%] pr-6" />,
    answer: "Our dedicated support team is here to help. You can reach out to us through the contact form on our website, send an email, or engage with us via live chat. We'll be happy to assist you with any questions or concerns you may have",
    url: "https://www.minhanix.com.br/",  
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
            Mais projetos
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Projetos Participados
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
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
      <div className="flex flex-col p-2  justify-start bg-customDarkBg2">
        <h3 className="custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-gray-300 text-sm pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
          >
          <div className="w-full flex gap-1">
              {image}
              {content}
          </div>
          {url}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
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