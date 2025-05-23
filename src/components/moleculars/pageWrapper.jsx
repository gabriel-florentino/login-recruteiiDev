/**
 * Componente wrapper que aplica animações de transição de entrada, saída e estado inicial
 * nas páginas utilizando a biblioteca Framer Motion.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo a ser renderizado dentro do wrapper animado.
 * @returns {JSX.Element} Elemento React com animações aplicadas.
 */

import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.2 } },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
