/**
 * Componente para exibir uma mensagem de redirecionamento com animação visual,
 * incluindo título, mensagem, imagem/icon e uma barra de progresso animada.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.title - Título da mensagem de redirecionamento.
 * @param {string} props.mensage - Texto da mensagem complementar.
 * @param {React.ReactNode} props.image - Ícone ou imagem exibida acima do título.
 * @returns {JSX.Element} Elemento React do componente Redirect.
 */

import { motion } from "framer-motion";

export default function Redirect({ title, mensage, image }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-backgroundPrimary-light">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-zinc-800 shadow-2xl rounded-2xl p-8 text-center w-[90%] max-w-md border border-borderPrimary-light"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-5xl text-primary mb-4 flex justify-center"
        >
          {image}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-2xl font-bold text-primary mb-3"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-textSecondary-light text-base mb-4"
        >
          {mensage}
        </motion.p>

        <motion.div
          className="w-full h-2 bg-backgroundPrimary-light rounded-full overflow-hidden mt-6"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "easeInOut" }}
        >
          <motion.div
            className="h-full bg-buttonPrimary-light"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="mt-4 text-sm text-textTertiary-light italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Redirecionando em instantes...
        </motion.div>
      </motion.div>
    </div>
  );
}
