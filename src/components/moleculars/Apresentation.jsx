/**
 * Componente de apresentação do módulo de login do projeto RecruteiDev.
 * Exibe um resumo das tecnologias usadas, funcionalidades atuais e roadmap futuro.
 * Permite ao usuário deslogar ou excluir sua conta com confirmação.
 *
 * @component
 * @returns {JSX.Element} Elemento React do componente Apresentation.
 */

import {React, useState} from "react"
import { useAuth } from "../../context/AuthContext";
import PrimaryButton from "../atoms/PrimaryButton";

import { FaReact, FaGoogle, FaLock } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma, SiFramer, SiJavascript, SiReacthookform, SiJsonwebtokens } from "react-icons/si";
import { MdSecurity, MdEmail } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Apresentation() {
    const { logout, usuario, deleteAcount } = useAuth();
  const [confirmarExclusao, setConfirmarExclusao] = useState(false);
    const techs = [
    { icon: <FaReact className="text-[#61DBFB]" size={40} />, name: "React" },
    { icon: <SiReacthookform className="text-[#EC5990]" size={40} />, name: "React Hook Form" },
    { icon: <AiOutlineCheckCircle className="text-green-500" size={40} />, name: "Yup" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" size={40} />, name: "Tailwind CSS" },
    { icon: <SiVite className="text-[#646CFF]" size={40} />, name: "Vite" },
    { icon: <FaGoogle className="text-[#DB4437]" size={40} />, name: "Google Auth" },
    { icon: <MdEmail className="text-[#EA4335]" size={40} />, name: "Recuperação por Email" },
    { icon: <SiJsonwebtokens className="text-yellow-500" size={40} />, name: "JWT (fake)" },
    { icon: <FaLock className="text-[#4B5563]" size={40} />, name: "Proteção de Rotas" },
    { icon: <SiFramer className="text-[#0055FF]" size={40} />, name: "Framer Motion" },
    { icon: <MdSecurity className="text-purple-600" size={40} />, name: "Validações" },
    { icon: <TbApi className="text-pink-600" size={40} />, name: "Context API" },
    { icon: <SiJavascript className="text-yellow-400" size={40} />, name: "JavaScript" },
  ];

  const handleExcluirConta = () => {
    if (!confirmarExclusao) {
      setConfirmarExclusao(true);
      return;
    }
    deleteAcount();
  };

  const handleCancelarExclusao = () => {
    setConfirmarExclusao(false);
  };

  return (
        <div className="max-w-5xl mx-auto py-12 px-6 font-body text-textPrimary-light flex flex-col items-center text-center">
      <h1 className="text-h1 font-title mb-4">
        {`Bem-vindo ${usuario?.nome || "Usuário"} ao módulo de login do RecruteiDev`}
      </h1>

      <p className=" text-textSecondary-light">
        Este módulo faz parte do projeto <strong>RecruteiDev</strong> — uma plataforma inovadora de recrutamento onde as <strong>empresas buscam desenvolvedores</strong>, e não o contrário. Ideal para um recrutamento mais inteligente e direcionado.
      </p>
{/* Seção de Skills */}
<div className="my-12">
     <section className="py-4 px-4 bg-backgroundPrimary-light grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 place-items-start">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2 text-center">
            {tech.icon}
            <span className="text-sm text-textSecondary-light">{tech.name}</span>
          </div>
        ))}
    </section>
</div>

      <div className="grid md:grid-cols-2 gap-8 text-left justify-between">
        {/* Funcionalidades */}
        <div>
          <h2 className="text-h2 font-semibold mb-4">Funcionalidades desse modulo</h2>
          <ul className="list-disc pl-5 space-y-2 text-textSecondary-light">
            <li>Login com e-mail e senha (validações com <code>React Hook Form</code> + <code>Yup</code>)</li>
            <li>Login com Google (Google Auth)</li>
            <li>Recuperação de senha com envio de e-mail (a integração com backend será feita futuramente)</li>
            <li>Validação de CPF com cálculo real</li>
            <li>Mascara de CPF com Cleave</li>
            <li>Proteção de rotas com redirecionamento amigável</li>
            <li>Páginas de erro personalizadas</li>
            <li>Controle global de autenticação com Context API</li>
            <li>Framer Motion para transições e animações</li>
            <li>Separação entre contas de desenvolvedor e empresas</li>
            <li>Permissões e acessos privados com base no tipo de usuário</li>
          </ul>
        </div>

        {/* Futuro / roadmap */}
        <div className="text-right">
          <h2 className="text-h2 font-semibold mb-4">Próximas etapas</h2>
          <ul className="list-none pl-5 space-y-2 text-textSecondary-light">
            <li>Criação da leanding page do projeto</li>
            <li>Construção de um backend seguro com rotas, autenticação</li>
            <li>Inserir modo dark e suporte bilingui (Ingles e Portugues)</li>
            <li>Integração com backend (JWT real, reset de senha funcional)</li>
            <li>Pagina de edição de perfil e configurações</li>
            <li>Dashboard para empresas buscarem desenvolvedores</li>
            <li>Perfil público e currículo customizável para devs</li>
            <li>Chat direto entre empresa e desenvolvedor</li>
            <li>Sistema de avaliação e feedback</li>
            <li>Ia para auxiliar devs na criação de seus perfis</li>
            <li>Proteção e documentação geral do projeto</li>
            <li>Expor projeto para o publico totalmente gratuito</li>
          </ul>
        </div>
      </div>

      {/* Ações */}
      <div className="mt-10 space-y-4 w-full">
        <PrimaryButton
          onClick={logout}
          aria-label="Logout do usuário"
          className="w-full bg-buttonPrimary-light text-white"
        >
          Sair
        </PrimaryButton>

        <PrimaryButton
          onClick={handleExcluirConta}
          aria-label="Excluir conta do usuário"
          className={`w-full transition-colors ${
            confirmarExclusao
              ? "bg-textError-light text-white hover:bg-red-700"
              : "bg-amber-300 text-black hover:bg-yellow-600"
          }`}
        >
          {confirmarExclusao ? "Confirmar Exclusão" : "Excluir Conta"}
        </PrimaryButton>

        {confirmarExclusao && (
          <>
            <PrimaryButton
              onClick={handleCancelarExclusao}
              aria-label="Cancelar exclusão da conta"
              className="w-full bg-buttonSecondary-light text-textPrimary-light hover:bg-buttonSecondaryHover-light transition-colors"
            >
              Cancelar
            </PrimaryButton>
            <p className="mt-3 text-textError-light font-semibold text-center">
              Atenção: Essa ação não pode ser desfeita.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
