// src/context/LoaderContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import Spinner from "../components/atoms/Spinner";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

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
