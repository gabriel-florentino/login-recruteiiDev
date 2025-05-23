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
        navigate("/entrar");
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
