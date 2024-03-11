import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import TimeLineGen from '../components/TimeLineGen';

import MouseIcon from '@mui/icons-material/Mouse';
import DnsIcon from '@mui/icons-material/Dns';
import WebIcon from '@mui/icons-material/Web';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Educacion = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.25, staggerChildren: 0.25
          }
        }
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      };

      const listaEducacion = [
        {
            icon: <QueryStatsIcon />,
            titulo:'Máster de FP en Inteligencia Artificial y Big Data',
            año:'2023-2024',
            cursado: 'INS Bernat El Ferrer'
        },
        {
            icon: <WebIcon />,
            titulo:'GS Desarrollo Aplicaciones Web',
            año:'2022-2023',
            cursado: 'INS Joan23'
        },
        {
            icon: <DnsIcon />,
            titulo:'GS Sistemas Microinformaticos y Redes',
            año:'2020-2022',
            cursado: 'INS Joan23'
        },
        {
            icon: <MouseIcon />,
            titulo:'GM Sistemas Microinformaticos y Redes',
            año:'2018-2020',
            cursado: 'INS Joan23'
        },
        
      ]
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-green-100 shadow-xl">
        <motion.p
          variants={item}
          className="text-2xl font-semibold text-center text-gray-800"
        >
          Educación
        </motion.p>
        <motion.div variants={item} className="flex flex-col gap-5">
        <TimeLineGen lista={listaEducacion}/>
    </motion.div>
    </motion.div>
  )
}

export default Educacion
