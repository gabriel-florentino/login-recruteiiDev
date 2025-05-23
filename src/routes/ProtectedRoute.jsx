/**
 * Componente que protege rotas privadas, permitindo acesso apenas a usuários autenticados e com perfil correto.
 * Se o usuário não estiver autenticado ou tentar acessar rota proibida para seu tipo (empresa ou dev), exibe mensagem de alerta e redireciona.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componentes filhos que serão renderizados se a rota for permitida.
 * @param {"empresa"|"dev"} [props.only] - Define o tipo de usuário autorizado a acessar a rota.
 *
 * @returns {JSX.Element|null} - Retorna os filhos se autorizado, caso contrário retorna componente de redirecionamento ou spinner durante carregamento.
 */

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
    if (loading) return;

    if (usuario === undefined) return;

    if (!usuario) {
      setMensagem({
        texto: "Você precisa mostrar sua credencial futurista para entrar aqui. Autentique-se e tente de novo!",
        destino: "/",
      });
      return;
    }

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
      setMensagem(null);
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
