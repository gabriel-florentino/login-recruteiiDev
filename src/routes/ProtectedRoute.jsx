// src/components/ProtectedRoute.jsx
import { useAuth } from "../context/AuthContext";
import Redirect from "../components/moleculars/Redirect";
import routePrivate from "../assets/routePrivate.webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/atoms/Spinner";

export default function ProtectedRoute({ children, only }) {
  const { usuario, loading } = useAuth();
  const [mensagem, setMensagem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // espera o loading terminar

    if (usuario === undefined) return; // estado inicial, não renderiza nada

    // Se não está logado
    if (!usuario) {
      setMensagem({
        texto: "Você precisa mostrar sua credencial futurista para entrar aqui. Autentique-se e tente de novo!",
        destino: "/entrar",
      });
      return;
    }

    // Está logado, mas acessando rota errada
    const isEnterprise = usuario?.isEnterprise;
    if (only === "empresa" && !isEnterprise) {
      setMensagem({
        texto: "Você precisa mostrar sua credencial de desenvolvedor futurista para entrar aqui. Autentique-se e tente de novo!.",
        destino: "/cadastrar-desenvolvedor",
      });
    } else if (only === "dev" && isEnterprise) {
      setMensagem({
        texto: "Você precisa mostrar sua credencial de empresa futurista para entrar aqui. Autentique-se e tente de novo!",
        destino: "/cadastrar-empresa",
      });
    } else {
      setMensagem(null); // rota permitida, limpa mensagem
    }
  }, [usuario, only, loading]);

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        navigate(mensagem.destino);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensagem, navigate]);

  if (loading) return <Spinner message="Buscando informações..." />;

  if (usuario === undefined) return null;

  if (mensagem) {
    return (
      <Redirect
        title="Alerta: Área restrita!"
        mensage={mensagem.texto}
        image={<img src={routePrivate} alt="Acesso negado" className="w-full" />}
      />
    );
  }

  return children;
}
