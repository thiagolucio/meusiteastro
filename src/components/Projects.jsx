import { motion } from "framer-motion";
import semParar from "../assets/images/sem_parar/semPararMensalCompletoLayout01.svg";
import mySeat from "../assets/images/myseat01.png";
import nscTotal from "../assets/images/nsctotal.jpg";

const projectsData = [
  {
    projectName: "Sem Parar App",
    projectTitle: "Web e Mobile",
    content:
      "Trabalho no projeto da Sem Parar como Desenvolvedor Front-end no time de Design System que cria componentes em React Native para os times do App como com StencilJS para os times dos projetos Web (Angular, React, Next, etc) criando a biblioteca de componentes destes projetos.",
    image: semParar,
    url: "https://www.semparar.com.br/",
  },
  {
    projectName: "My Seat",
    projectTitle: "WebApp",
    content:
      "Trabalhei no projeto como Desenvolvedor Front-end em todo ciclo de desenvolvimento. Lidando tanto com o Front-end quanto o Back-end. Utilizando Angular no Front-end, em conjunto com PrismaJs, NestJS, PostGreSQL. O projeto entrega um Aplicativo (WebAPP) que permite o gerenciamento de espaços.",
    image: mySeat,
    url: "https://atos.net/pt-br/brasil-atos/myseat",
  },
  {
    projectName: "NSC Comunicações",
    projectTitle: "Web e WebAPP",
    content:
      "Filial da Rede Globo de Televisão em Santa Catarina trabalhei na NSC Comunicações como Desenvolvedor Front-end UX/ UI. Tive a oportunidade de trabalhar em projetos como G1 de Santa Catarina, NSC Total e outros, lidando com Front-end mas também com o Back-end e DevOps.",
    image: nscTotal,
    url: "https://nsccomunicacao.com.br/",
  },
];

export const Projects = () => (
  <section className="w-full xs:w-full sm:w-full min-w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Projetos que tive o prazer de participar
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Últimos Projetos
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {projectsData.map((project, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${project.projectName}-${index}`}
            >
              <div className="mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col text-left mb-3">
                  <div className="text-customSecondary text-xl font-medium mt-2">
                    {project.projectName}
                  </div>
                  <div className="text-blue-200 text-sm font-bold">
                    {project.projectTitle}
                  </div>
                </div>
                <div className="flex w-full justify-center">
                  <img
                    src={project.image.src}
                    alt="Imagem do projeto"
                    className="w-[180px] object-cover rounded-lg shadow-lg shadow-gray-950 mx-auto sm:mx-unset"
                  />
                </div>
              </div>
              <div className="text-sm text-white text-left">
                {project.content}
              </div>
              <div className="mt-4 mb-5">
                <a
                  href={project.url}
                  className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
                >
                  <i className="fa-solid fa-link mr-1 fa-lg"></i> Conheça o
                  projeto
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#FAQ"
            className="text-blue-300 text-center text-lg py-2 px-4 w-full mt-16"
          >
            Veja mais projetos
            <p>
              <i className="fa-solid fa-circle-arrow-down text-6xl mt-4 cursor-pointer -customDarkBg2 hover:text-customPrimary border-customPrimary transition"></i>
            </p>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
