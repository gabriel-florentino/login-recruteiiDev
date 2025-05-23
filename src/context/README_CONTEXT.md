
# AuthContext - React Context para Autenticação

Este módulo implementa um contexto de autenticação (`AuthContext`) para uma aplicação React, fornecendo funcionalidades como login, logout, login via Google (Firebase), exclusão de conta, e persistência de sessão.

## 📦 Arquivo

`src/contexts/AuthContext.jsx`

## 🔧 Funções Disponíveis

### `login({ email, senha, rememberMe })`
Autentica um usuário com base nas credenciais fornecidas. Verifica as credenciais armazenadas no `localStorage`.

- **Parâmetros**:
  - `email` (string): Email do usuário.
  - `senha` (string): Senha em texto plano.
  - `rememberMe` (boolean): Se verdadeiro, armazena sessão em `localStorage`, senão em `sessionStorage`.

- **Retorno**: 
  Objeto com `{ sucesso: boolean, mensagem?: string, usuario?: Usuario }`.

---

### `logout()`
Encerra a sessão do usuário atual, limpa os dados de sessão do armazenamento e redireciona para a página de login.

---

### `deleteAcount()`
Remove permanentemente a conta do usuário logado do `localStorage` e encerra a sessão.

---

### `loginGoogle()`
Realiza autenticação com o Google (Firebase) e verifica se o email está registrado no `localStorage`.

- **Retorno**: 
  Objeto com `{ sucesso: boolean, mensagem?: string, usuario?: Usuario }`.

---

## 🧠 Hook Personalizado

### `useAuth()`
Hook para acessar o contexto de autenticação.

- **Retorna**: 
  Objeto com:
  - `usuario`
  - `loading`
  - `login`
  - `logout`
  - `deleteAcount`
  - `loginGoogle`

---

## 📁 Exemplo de Uso

```jsx
import { useAuth } from './contexts/AuthContext';

const MeuComponente = () => {
  const { usuario, login, logout } = useAuth();

  return (
    <div>
      {usuario ? (
        <button onClick={logout}>Sair</button>
      ) : (
        <button onClick={() => login({ email: 'teste@teste.com', senha: '1234', rememberMe: true })}>
          Entrar
        </button>
      )}
    </div>
  );
};
```

---

## 🔐 Requisitos

- React
- Firebase
- bcryptjs
- React Router

---

## ⚠️ Observações

- O sistema usa `localStorage` para persistência de usuários, o que **não é seguro para produção**.
- Para um sistema seguro, considere usar um backend com banco de dados e autenticação via Firebase Auth ou Auth0.

---

## 🧪 Testes

Você pode simular diferentes cenários de autenticação utilizando o console do navegador para manipular `localStorage`.

---

## 📜 Licença

MIT
