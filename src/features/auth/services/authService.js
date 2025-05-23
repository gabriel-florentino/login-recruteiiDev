// services/authService.js
import bcrypt from "bcryptjs";

const getUsers = () => {
  const users = localStorage.getItem("usuarios");
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem("usuarios", JSON.stringify(users));
};

export const registerUser = async ({ nome, email, senha, cpf, isEnterprise }) => {
  const users = getUsers();

  const emailExiste = users.find((user) => user.email === email);
  if (emailExiste) {
    return { sucesso: false, mensagem: "E-mail já cadastrado" };
  }

  const cpfExiste = users.find((user) => user.cpf === cpf);
  if (cpfExiste) {
    return { sucesso: false, mensagem: "CPF já cadastrado" };
  }

  // Se chegou aqui, email e cpf são únicos — aí você salva
  const salt = await bcrypt.genSalt(10);
  const senhaHasheada = await bcrypt.hash(senha, salt);

  const novoUsuario = {
    id: Date.now(),
    nome,
    email,
    senha: senhaHasheada,
    cpf,
    isEnterprise,
  };

  users.push(novoUsuario);
  saveUsers(users);

  return { sucesso: true, mensagem: "Cadastro realizado com sucesso!" };
};