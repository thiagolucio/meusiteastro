import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-screen flex flex-col justify-center items-center">
      <div className="w-full custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-screen flex justify-center bg-customDarkBg1 p-16 mx-auto lg:flex-row flex-col lg:pt-24 lg:pb-20">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              pitch profissional em vídeo
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Um pouco sobre mim
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
              Pitch Profissional em vídeo onde me apresento de forma resumida.
              Você também poderá verificar meu Inglês pois a apresentação está
              em Inglês.
            </p>
            <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Download CV
            </div>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            {/* https://player.vimeo.com/video/867370170?h=a61e52f745 */}
            {/* https://www.youtube.com/watch?v=AeO_CIEn58c */}
            {/* https://youtu.be/AeO_CIEn58c?si=gmRwfonSJPndZjhO */}
            <iframe
              width="600"
              height="300"
              className="shadow-lg shadow-black rounded-lg"
              src="https://www.youtube.com/embed/AeO_CIEn58c?si=o_HeZFoi_dTd33Ff"
              title="Short Pitch about me"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          isCvEnd
        />
      )}
    </section>
  );
};
