import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import ImgJs from '../assets/img/tecnologias/js.png';
import imgReact from '../assets/img/tecnologias/react.png';
import imgVue  from '../assets/img/tecnologias/vue.png';
import imgNode from '../assets/img/tecnologias/node.png';
import imgNestjs from '../assets/img/tecnologias/nestjs.png';
import imgZustand  from '../assets/img/tecnologias/zustand.png';
import imgRedis  from '../assets/img/tecnologias/redis.png';
import imgMysql   from '../assets/img/tecnologias/mysql.png';
import imgSolidity  from '../assets/img/tecnologias/solidity.svg';
import imgPython from '../assets/img/tecnologias/python.png';
import imgTypescript from '../assets/img/tecnologias/typescript.png';
import imgDocker   from '../assets/img/tecnologias/docker.png';
import imgSPark    from '../assets/img/tecnologias/spark.png';
import imgLaravel    from '../assets/img/tecnologias/laravel.png';
import imgJenkins from '../assets/img/tecnologias/jenkins.png';
import imgOllama from '../assets/img/tecnologias/ollama.png';
import imgLangchain from '../assets/img/tecnologias/langchain.png';
import imgAws from '../assets/img/tecnologias/aws.jpg';
import imgTailwind from '../assets/img/tecnologias/tailwind.png';
import imgPHP from '../assets/img/tecnologias/php.png';
import imgWeb3 from '../assets/img/tecnologias/web3.png';
import imgPandas from '../assets/img/tecnologias/pandas.png';

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

    // Actualizando las categorías para incluir todas las tecnologías
    const categorias = {
        "Lenguajes de Programación": [
            { nombre: "JavaScript", imagen: ImgJs },
            { nombre: "Python", imagen: imgPython },
            { nombre: "TypeScript", imagen: imgTypescript },
            { nombre: "PHP", imagen: imgPHP },
            { nombre: "Solidity", imagen: imgSolidity },
        ],
        "Frameworks y Bibliotecas": [
            { nombre: "React", imagen: imgReact },
            { nombre: "Vue", imagen: imgVue },
            { nombre: "NestJS", imagen: imgNestjs },
            { nombre: "Laravel", imagen: imgLaravel },
            { nombre: "Tailwind CSS", imagen: imgTailwind },
            { nombre: "Zustand", imagen: imgZustand },
            { nombre: "Node.js", imagen: imgNode }, // Añadiendo Node.js
        ],
        "Bases de Datos y Caché": [
            { nombre: "Redis", imagen: imgRedis },
            { nombre: "MySQL", imagen: imgMysql },
        ],
        "Herramientas de Desarrollo": [
            { nombre: "Docker", imagen: imgDocker },
            { nombre: "Jenkins", imagen: imgJenkins },
            { nombre: "AWS", imagen: imgAws },
        ],
        "Blockchain y Otros": [
            { nombre: "Web3", imagen: imgWeb3 },
            { nombre: "Ollama", imagen: imgOllama },
            { nombre: "LangChain", imagen: imgLangchain },
        ],
        "Big Data y Análisis": [ // Nueva categoría para Spark
            { nombre: "Spark", imagen: imgSPark },
            { nombre: "Pandas", imagen: imgPandas },
        ],
    };

    return (
        <motion.div variants={container} initial="hidden" animate="show" className='max-w-[800px] mx-auto'>
            {Object.entries(categorias).map(([categoria, tecnologias], indexCategoria) => (
                <div key={indexCategoria} className="mb-8">
                    <motion.h3 variants={item} className="py-2 text-xl font-bold text-center text-gray-900 mb-4">
                        {categoria}
                    </motion.h3>
                    <motion.div variants={container} className="flex flex-wrap justify-center gap-4">
                        {tecnologias.map((tecnologia, indexTecnologia) => (
                            <motion.div key={indexTecnologia} variants={item} className="p-2 flex flex-none basis-auto justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
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
            ))}
        </motion.div>
    );
}
export default Programacion