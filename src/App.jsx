import { useState } from "react";
import classNames from 'classnames';
import { motion, AnimatePresence  } from 'framer-motion';

import mapache from "./assets/img/mapache.png";

import NavBar from "./components/NavBar";
import InfoBase from "./pages/InfoBase";
import { useNavigateStore } from "./stores/navegation.store";
import Educacion from "./pages/Educacion";
import Trabajos from "./pages/Trabajos";
import Habilidades from "./pages/Habilidades";
import Programacion from "./pages/Programacion";

const imageVariants = {
  normal: { width: 300, transition: { duration: 0.5 } },
  small: { width: 65, transition: { duration: 0.5 } },
};
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};
function App() {
  const page = useNavigateStore((state) => state.page);

  const ClassCardImg = classNames("rounded-md shadow-lg m-auto",{' w-[300px]': page === ''}, {' w-[65px] m-auto': page != ''});
  const ClassCardTitulo = classNames("font-bold text-center",{'text-5xl ': page === ''}, {'text-xl': page != ''});
  useNavigateStore.subscribe((state) => {
    const newPage = state.page
  })
  return (
    <>

      <div className="w-full flex flex-row gap-5 justify-center py-10 min-h-screen">
        <div className="my-auto flex flex-col gap-2 mx-2">
          <div className="my-auto flex flex-row gap-4 rounded-md p-5 bg-slate-50 shadow-lg justify-around">
            <div className="my-auto flex flex-col gap-4">
              <h1 className={ClassCardTitulo}>
                <span className="underline decoration-sky-500">Sergio</span> Merino
              </h1>
              <h1 className={ClassCardTitulo}>Saceda</h1>
            </div>
            
            <motion.div>
              <motion.img
                src={mapache}
                className={ClassCardImg}
                variants={imageVariants}
                initial="normal"
                animate={page === '' ? "normal" : "small"}
              />
            </motion.div>
          </div>

          <NavBar />

          <AnimatePresence mode="wait">
          {page === "info" && (
              <motion.div key="info" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
                <InfoBase />
              </motion.div>
            )}

            {page === "education" && (
              <motion.div key="education" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
                <Educacion />
              </motion.div>
            )}

            {page === "trabajo" && (
              <motion.div key="trabajo" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
                <Trabajos />
              </motion.div>
            )}

            {page === "habilidades" && (
              <motion.div key="habilidades" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
                <Habilidades />
              </motion.div>
            )}

            {page === "programacion" && (
              <motion.div key="programacion" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition}>
                <Programacion />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
 
    </>
  );
}

export default App;
