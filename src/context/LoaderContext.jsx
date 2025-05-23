/**
 * @file LoaderContext.jsx
 * @description Contexto de carregamento da aplicação. Exibe um spinner por um curto período de tempo simulado ao iniciar o app.
 */

import { createContext, useContext, useEffect, useState } from "react";
import Spinner from "../components/atoms/Spinner";

/**
 * Contexto para controlar o estado de carregamento da aplicação.
 * Atualmente não fornece nenhum valor via Provider, mas controla a exibição do spinner inicial.
 */

const LoaderContext = createContext();

/**
 * Hook personalizado para acessar o contexto de carregamento.
 * @returns {Object} Contexto do loader (atualmente vazio).
 */

export const useLoader = () => useContext(LoaderContext);

/**
 * Provider do LoaderContext.
 * Exibe o componente `<Spinner />` por 1.5 segundos ao iniciar a aplicação.
 * Após esse tempo, renderiza os filhos normalmente.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componentes filhos que devem ser renderizados após o carregamento.
 * @returns {JSX.Element} O componente Spinner ou os children dentro do Provider.
 */

export function LoaderProvider({ children }) {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1500); // tempo fake
    return () => clearTimeout(timer);
  }, []);

  if (carregando) return <Spinner />;

  return (
    <LoaderContext.Provider value={{}}>
      {children}
    </LoaderContext.Provider>
  );
}
