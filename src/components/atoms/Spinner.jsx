/**
 * Componente de carregamento com animação rotacional e mensagem opcional.
 *
 * Utiliza `framer-motion` para animações suaves de rotação no spinner
 * e fade-in da mensagem.
 *
 * @component
 *
 * @param {object} props - Propriedades do componente.
 * @param {string} [props.message="Carregando..."] - Mensagem opcional exibida abaixo do spinner.
 *
 * @returns {JSX.Element} Elemento JSX que representa um spinner animado com uma mensagem.
 */

import { motion } from "framer-motion";

export default function Spinner({ message = "Carregando..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-backgroundPrimary-light text-primary gap-4">
      <motion.div
        className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base text-textSecondary-light"
      >
        {message}
      </motion.p>
    </div>
  );
}
