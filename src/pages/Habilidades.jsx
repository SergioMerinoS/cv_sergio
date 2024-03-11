import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import ProblemSolvingIcon from '@mui/icons-material/Psychology'; // Ejemplo para Resolución de Problemas
import TeamWorkIcon from '@mui/icons-material/Group'; // Ejemplo para Trabajo en Equipo
import EffectiveCommunicationIcon from '@mui/icons-material/Chat'; // Ejemplo para Comunicación Eficaz
import ContinuousLearningIcon from '@mui/icons-material/School'; // Ejemplo para Aprendizaje Continuo
import TimeManagementIcon from '@mui/icons-material/AccessTime'; // Ejemplo para Gestión del Tiempo

const Habilidades = () => {
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

    // Lista de habilidades blandas con componentes de iconos
    const habilidadesBlandas = [
        { nombre: "Resolución de Problemas", Icono: ProblemSolvingIcon },
        { nombre: "Trabajo en Equipo", Icono: TeamWorkIcon },
        { nombre: "Comunicación Eficaz", Icono: EffectiveCommunicationIcon },
        { nombre: "Aprendizaje Continuo", Icono: ContinuousLearningIcon },
        { nombre: "Gestión del Tiempo", Icono: TimeManagementIcon },
    ];

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-4 rounded-md p-3 bg-slate-50 shadow-lg">
            <motion.p variants={item} className="text-xl font-bold underline decoration-sky-500">
                Habilidades:
            </motion.p>
            {habilidadesBlandas.map((habilidad, index) => (
                <motion.div key={index} variants={item} className="text-lg flex items-center gap-2 text-center">
                    <habilidad.Icono /> {/* Renderiza el icono */}
                    <p>{habilidad.nombre}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Habilidades;
