import { motion } from "framer-motion";
import semParar from "../assets/images/sem_parar/semPararMensalCompletoLayout01.svg";
import mySeat from "../assets/images/myseat01.png";
import nscTotal from "../assets/images/nsctotal.jpg";

const projectsData = [
  {
    projectName: "Sem Parar App",
    projectTitle: "WebApp and Mobile",
    content:
      "I work on the Sem Parar project as a Front-end Developer on the Design System team that creates components in React Native for the App teams and with StencilJS for the Web project teams (Angular, React, Next, etc.) creating the component library of these projects.",
    image: semParar,
    url: "https://www.semparar.com.br/",
  },
  {
    projectName: "My Seat",
    projectTitle: "Just WebApp",
    content:
      "I worked on the project as a Front-end Developer throughout the development cycle. Dealing with both Front-end and Back-end. Using Angular on the front-end, together with PrismaJs, NestJS, and PostgreSQL. The project delivers an Application (WebAPP) that allows the management of work/ personal spaces.",
    image: mySeat,
    url: "https://atos.net/pt-br/brasil-atos/myseat",
  },
  {
    projectName: "NSC Comunicações",
    projectTitle: "Web and WebAPP",
    content:
      "Branch of Rede Globo de Televisão in Santa Catarina worked at NSC Comunicações as a Front-end UX/UI Developer. I had the opportunity to work on projects such as G1 de Santa Catarina, NSC Total, and others, dealing with Front-end but also with Back-end and DevOps.",
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
          3 Last Projects
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Projects
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
              <div className="w-full mt-4 mb-5">
                <a
                  href={project.url}
                  className="w-60 h-12 rounded-xl text-sm text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customPrimary border-customPrimary transition"
                >
                  <i className="fa-solid fa-link mr-1 fa-lg"></i> Get to know the project</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a
            href="#FAQ"
            className="text-blue-300 text-center text-lg py-2 px-4 w-full mt-16"
          >
            MORE PROJECTS
            <p>
              <i className="fa-solid fa-circle-arrow-down text-6xl mt-4 cursor-pointer -customDarkBg2 hover:text-customPrimary border-customPrimary transition"></i>
            </p>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
