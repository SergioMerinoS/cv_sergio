import { useEffect, useState } from "react";
import { motion  } from "framer-motion";

const InfoBase = () => {
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    const añoNacimiento = 2001; // Asumiendo que naciste en 2001, ajusta según sea necesario
    const edadCalculada = new Date().getFullYear() - añoNacimiento;
    setEdad(edadCalculada);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className=" mx-auto "
    >
      <div className="flex flex-col gap-5 rounded-lg p-8 bg-gradient-to-r from-blue-50 to-teal-100 shadow-xl">
        <motion.p
          variants={item}
          className="text-2xl font-bold underline decoration-sky-300 text-center"
        >
          Información Personal
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Edad: {edad} años
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Ubicación: L'Hospitalet de Llobregat
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Profesión: Desarrollador Backend y Frontend
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Intereses: Nuevas Tecnologías y Big Data
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Tecnologías Favoritas: React, Tailwind CSS, Nest.js
        </motion.p>
        <motion.p variants={item} className="text-lg text-gray-900">
          Idiomas: Catalán, Castellano
        </motion.p>
      </div>
    </motion.div>
  );
};

export default InfoBase;