/**
 * Componente que exibe uma página de erro 404 customizada quando o usuário acessa uma rota inválida.
 * Após aguardar o carregamento do estado de autenticação, mostra uma mensagem de erro e redireciona o usuário
 * para a página adequada, dependendo do seu estado de login e tipo de usuário.
 * 
 * Redireciona:
 * - Usuários com CPF e tipo empresa para "/cadastrar-empresa"
 * - Usuários com CPF e tipo desenvolvedor para "/cadastrar-desenvolvedor"
 * - Usuários não autenticados para "/entrar"
 * 
 * O redirecionamento ocorre após 5 segundos exibindo um componente de aviso visual.
 * 
 * @returns {JSX.Element|null} - Retorna spinner durante o loading, null enquanto espera o momento do redirect, ou o componente de redirect.
 */

import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Redirect from "../components/moleculars/Redirect";
import erro from "../assets/error-404.webp";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/atoms/Spinner";

export default function ErrorRoute() {
  const { usuario, loading } = useAuth();
  const [showRedirect, setShowRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return; // espera o loading do auth acabar
    if (usuario === undefined) return;

    setShowRedirect(true);

    const timer = setTimeout(() => {
      if (usuario?.cpf) {
        if (usuario.isEnterprise) {
          navigate("/cadastrar-empresa");
        } else {
          navigate("/cadastrar-desenvolvedor");
        }
      } else {
        navigate("/");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [usuario, loading, navigate]);

  if (loading) return <Spinner message="Buscando informações..." />;

  if (!showRedirect) return null;

  return (
    <Redirect
      title="Oops! Aqui não tem nada."
      mensage="Parece que você tentou invadir um lugar que nem o Google conhece. Que tal voltar para o começo da jornada?"
      image={<img src={erro} alt="erro-404" className="w-full" />}
    />
  );
}
