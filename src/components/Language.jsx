import { useState } from "react";
import { motion } from "framer-motion";
import EnglishFlag from "../assets/icons/english_flag.png";
import BrasilFlag from "../assets/icons/brasil_flag.png";

export const Language = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleChange = () => {
    setIsEnglish(!isEnglish);
    console.log(isEnglish);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <label className="mx-auto relative flex justify-between items-center place-items-center group text-xl w-[50px] h-10 rounded-full pr-36 pl-1 cursor-pointer">
        <input
          type="checkbox"
          className="peer appearance-none"
          checked={!isEnglish}
          onChange={handleChange}
        />
        <span
          className="
          h-10
          after:h-10
          w-[4.5rem]
          after:w-[4.5rem]
          flex 
          items-center 
          place-items-center 
          mx-auto 
          after:rounded-full
          duration-300 
          ease-in-out 
          after:bg-customPrimary 
          after:shadow-md 
          after:duration-300 
          peer-checked:after:translate-x-[5.5rem]
          cursor-pointer"
        ></span>
        <div className="w-full absolute flex items-center place-items-center text-white text-sm">
          <div
            className={
              isEnglish
                ? "flex mx-auto items-center place-items-center ml-2"
                : "flex mx-auto items-center place-items-center ml-2"
            }
          >
            <img src={EnglishFlag.src} className="w-[36px] h-[36px]" />
            <span>EN</span>
          </div>
          <div className={isEnglish}>
            <div className="flex items-center place-items-center">
              <img src={BrasilFlag.src} className="w-[36px] h-[36px]" />
              <span>PT</span>
            </div>
          </div>
        </div>
      </label>
    </motion.div>
  );
};
