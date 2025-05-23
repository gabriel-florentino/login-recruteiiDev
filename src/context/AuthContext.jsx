// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";


const AuthContext = createContext();

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

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuarioLogado");
    sessionStorage.removeItem("usuarioLogado");
    navigate("/entrar");
  };

  const deleteAcount = () => {
    if (!usuario) return;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuariosAtualizados = usuarios.filter((u) => u.email !== usuario.email);
    localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

    setUsuario(null);
    localStorage.removeItem("usuarioLogado");
    sessionStorage.removeItem("usuarioLogado");

    navigate("/entrar");
  };

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

export const useAuth = () => useContext(AuthContext);
