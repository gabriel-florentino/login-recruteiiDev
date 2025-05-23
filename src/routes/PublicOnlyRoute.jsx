// src/components/PublicOnlyRoute.jsx
import { useAuth } from "../context/AuthContext";
import Redirect from "../components/moleculars/Redirect";
import routePublic from "../assets/routePublic .webp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/atoms/Spinner";

export default function PublicOnlyRoute({ children }) {
  const { usuario } = useAuth();
  const [aguardandoRedirecionamento, setAguardandoRedirecionamento] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Aguarda o carregamento inicial
  useEffect(() => {
    if (usuario === undefined) return;

    if (usuario) {
      setAguardandoRedirecionamento(true);
    } else {
      setLoading(false);
    }
  }, [usuario]);

  // Executa redirecionamento *após* renderizar aviso
  useEffect(() => {
    if (!aguardandoRedirecionamento) return;

    const timer = setTimeout(() => {
      navigate(usuario.isEnterprise ? "/cadastrar-empresa" : "/cadastrar-desenvolvedor");
    }, 5000);

    return () => clearTimeout(timer);
  }, [aguardandoRedirecionamento, navigate, usuario]);

  if (loading) return <Spinner message="Buscando informações..." />;

  if (usuario && aguardandoRedirecionamento) {
    return (
      <Redirect
        title="Já estamos conectados!"
        mensage="Não precisa se registrar de novo, o futuro já reconheceu você. Vamos seguir para o seu painel de controle?"
        image={<img src={routePublic} alt="Já está logado" className="w-full" />}
      />
    );
  }

  return children;
}
