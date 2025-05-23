/**
 * @file AuthContext.jsx
 * @description Contexto de autenticação para gerenciar login, logout, e estado do usuário.
 *              Usa armazenamento local e autenticação do Firebase (Google) para gerenciar sessões.
 * @module AuthContext
 */

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

/**
 * @typedef {Object} Usuario
 * @property {string} nome - Nome do usuário
 * @property {string} email - Email do usuário
 * @property {string} [foto] - URL da foto (caso login via Google)
 * @property {boolean} [isEnterprise] - Flag para tipo de usuário
 */

/**
 * @typedef {Object} LoginResponse
 * @property {boolean} sucesso - Se o login foi bem-sucedido
 * @property {string} [mensagem] - Mensagem de erro (caso falhe)
 * @property {Usuario} [usuario] - Dados do usuário autenticado
 */

const AuthContext = createContext();

/**
 * Provedor de autenticação para a aplicação. Deve envolver o App ou os componentes que usam o contexto.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Componentes filhos que terão acesso ao contexto
 * @returns {JSX.Element}
 */

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem("usuarioLogado")) ||
      JSON.parse(sessionStorage.getItem("usuarioLogado"));

    if (user) {
      setUsuario(user || null);
    }

    setLoading(false);
  }, []);

  /**
   * Autentica o usuário com email e senha salvos em localStorage.
   *
   * @async
   * @param {Object} dadosLogin
   * @param {string} dadosLogin.email
   * @param {string} dadosLogin.senha
   * @param {boolean} dadosLogin.rememberMe - Se verdadeiro, persiste a sessão no localStorage
   * @returns {Promise<LoginResponse>}
   */

  const login = async ({ email, senha, rememberMe }) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuarios.find((user) => user.email === email);

    if (!usuarioEncontrado) {
      return { sucesso: false, mensagem: "Email não cadastrado." };
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);
    if (!senhaCorreta) {
      return { sucesso: false, mensagem: "Senha incorreta." };
    }

    setUsuario(usuarioEncontrado);
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    return { sucesso: true, usuario: usuarioEncontrado };
  };

  /**
   * Encerra a sessão do usuário atual e redireciona para a página de login.
   */

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuarioLogado");
    sessionStorage.removeItem("usuarioLogado");
    navigate("/");
  };

  /**
   * Remove a conta do usuário atual da lista de usuários registrados.
   */

  const deleteAcount = () => {
    if (!usuario) return;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuariosAtualizados = usuarios.filter((u) => u.email !== usuario.email);
    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

    setUsuario(null);
    localStorage.removeItem("usuarioLogado");
    sessionStorage.removeItem("usuarioLogado");

    navigate("/");
  };

  /**
   * Faz login via Google (Firebase Auth) e valida se o email existe nos usuários registrados localmente.
   *
   * @async
   * @returns {Promise<LoginResponse>}
   */

  const loginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const usuarioGoogle = result.user;

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      const usuarioEncontrado = usuarios.find(
        (u) => u.email === usuarioGoogle.email
      );

      if (!usuarioEncontrado) {
        // Faz logout do Firebase se o e-mail não estiver registrado
        await auth.signOut();
        return {
          sucesso: false,
          mensagem: "Este e-mail não está registrado em nossa plataforma.",
        };
      }

      const usuarioFormatado = {
        nome: usuarioEncontrado.nome || usuarioGoogle.displayName,
        email: usuarioGoogle.email,
        foto: usuarioGoogle.photoURL,
        isEnterprise: usuarioEncontrado.isEnterprise || false,
      };

      setUsuario(usuarioFormatado);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioFormatado));

      return { sucesso: true, usuario: usuarioFormatado };
    } catch (erro) {
      console.error("Erro no login com Google:", erro);
      return {
        sucesso: false,
        mensagem: "Erro ao fazer login com o Google.",
      };
    }
  };



  return (
    <AuthContext.Provider value={{ usuario, loading, login, logout, deleteAcount, loginGoogle }}>
      {children}
    </AuthContext.Provider>
  );
  
};

/**
 * Hook personalizado para acessar o contexto de autenticação.
 *
 * @returns {{ usuario: Usuario | null, loading: boolean, login: Function, logout: Function, deleteAcount: Function, loginGoogle: Function }}
 */

export const useAuth = () => useContext(AuthContext);
