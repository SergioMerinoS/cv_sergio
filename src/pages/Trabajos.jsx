import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import TimeLineGen from '../components/TimeLineGen';

import ames from '../assets/img/ames.jfif';
import arescoop from  '../assets/img/arescoop.png';

const Trabajos = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.25, staggerChildren: 0.25
          }
        }
      };
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      };
      const listaTrabajos = [
        {
            img: ames,
            titulo: "AMES",
            descripcion:"Desarrollador web Fullstack (SpringBoot, Vue, PHP, MySQL, Redis)",
            año: "2023-2024",
            
        },
        {
            img: arescoop,
            titulo: "Arescoop",
            descripcion:"FCT DAW2 (Laravel, Angular, React)",
            año: "2022-2023",
        },
        {
            img: ames,
            titulo: "AMES",
            descripcion:"GS DUAL ASIX2",
            año: "2021-2022",
            
        },
        {
            img: ames,
            titulo: "AMES",
            descripcion:"GM FCT SMX2",
            año: "2019-2020",
            
        },
      ];
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="mx-auto flex flex-col gap-6 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-red-200 shadow-2xl">
    <motion.p
      variants={item}
      className="text-2xl font-bold text-center text-gray-800"
    >
      Experiencia Laboral:
    </motion.p>
    <motion.div variants={item} className="flex flex-col gap-5">
        <TimeLineGen lista={listaTrabajos}/>
    </motion.div>
</motion.div>
  );
};

export default Trabajos;
