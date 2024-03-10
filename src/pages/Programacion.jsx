import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import ImgJs from '../assets/img/tecnologias/js.png'
import imgReact from '../assets/img/tecnologias/react.png'
import imgVue  from '../assets/img/tecnologias/vue.png'
import imgNode from '../assets/img/tecnologias/node.png'
import imgNestjs from '../assets/img/tecnologias/nestjs.png'
import imgZustand  from '../assets/img/tecnologias/zustand.png'
import imgRedis  from '../assets/img/tecnologias/redis.png'
import imgMysql   from '../assets/img/tecnologias/mysql.png'
import imgSolidity  from '../assets/img/tecnologias/solidity.svg'
import imgPython from '../assets/img/tecnologias/python.png'
import imgTypescript from '../assets/img/tecnologias/typescript.png'
import imgDocker   from '../assets/img/tecnologias/docker.png'
import imgSPark    from '../assets/img/tecnologias/spark.png'
import imgLaravel    from '../assets/img/tecnologias/laravel.png'
import imgJenkins from '../assets/img/tecnologias/jenkins.png';

const Programacion = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.3, staggerChildren: 0.2
          }
        }
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };
    const tecnologias = [
        { nombre: "JavaScript", imagen: ImgJs },
        { nombre: "React", imagen: imgReact },
        { nombre: "Node.js", imagen: imgNode },
        { nombre: "Vue", imagen: imgVue },
        { nombre: "NestJS", imagen: imgNestjs },
        { nombre: "Zustand", imagen: imgZustand },
        { nombre: "Redis", imagen: imgRedis },
        { nombre: "MySQL", imagen: imgMysql },
        { nombre: "Solidity", imagen: imgSolidity },
        { nombre: "Python", imagen: imgPython },
        { nombre: "TypeScript", imagen: imgTypescript},
        { nombre: "Docker", imagen: imgDocker },
        { nombre: "Spark", imagen: imgSPark },
        {nombre:"Laravel" ,imagen :imgLaravel},
        {nombre:"Jenkins" ,imagen :imgJenkins},

        // Añade más tecnologías según sea necesario
      ];
      return (
        <motion.div variants={container} initial="hidden" animate="show" className='max-w-[800px]'>
    <div>
        <motion.h2 variants={item} className="py-2 text-2xl font-bold underline decoration-sky-500 text-center rounded-lg shadow-lg bg-white">
            Tecnologías
        </motion.h2>
        <motion.div variants={container} className="flex flex-wrap justify-center gap-4 mt-4">
            {tecnologias.map((tecnologia, index) => (
                // Ajustes para asegurar un diseño responsivo y coherente
                <motion.div key={index} variants={item} className="p-2 flex flex-none basis-auto justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full">
                        <div className="w-full h-32 flex items-center justify-center overflow-hidden">
                            <img src={tecnologia.imagen} alt={tecnologia.nombre} className="object-scale-down h-full w-full"/>
                        </div>
                        <div className="py-2 text-center">
                            <p className="text-md font-semibold">{tecnologia.nombre}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
</motion.div>

    );
}

export default Programacion