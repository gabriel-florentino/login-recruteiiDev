
# Documentação dos Componentes React

Este documento traz a documentação e explicação básica para os três componentes React: **Login**, **RecoverPassword** e **Register**, junto com seus respectivos comentários JSDoc para melhor entendimento e manutenção.

---

## 1. Componente Login

Responsável pelo fluxo de login do usuário, com suporte para login via email/senha e login social via Google.

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/loginSchema";
import FormBase from "../../../components/organisms/FormBase";
import RememberMeCheckbox from "../../../components/atoms/Checkbox";
import LinkText from "../../../components/atoms/Link";
import { FcGoogle } from "react-icons/fc";
import ButtonGoogle from "../../../components/atoms/PrimaryButton";
import PageWrapper from "../../../components/moleculars/pageWrapper";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

/**
 * Componente de login que permite autenticar usuários via email/senha ou login com Google.
 * Utiliza React Hook Form com validação Yup para o formulário.
 *
 * @component
 * @returns {JSX.Element} Formulário de login
 */
export default function Login() {
  // ...
}
```

---

## 2. Componente RecoverPassword

Permite que o usuário recupere a senha enviando um email para redefinição via Firebase Authentication.

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormBase from "../../../components/organisms/FormBase";
import LinkText from "../../../components/atoms/Link";
import { schema } from "../validations/recoverPasswordSchema";
import PageWrapper from "../../../components/moleculars/pageWrapper";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";

/**
 * Componente para recuperação de senha, enviando um link para o email informado.
 *
 * @component
 * @returns {JSX.Element} Formulário de recuperação de senha
 */
export default function RecoverPassword() {
  // ...
}
```

---

## 3. Componente Register

Gerencia o formulário de cadastro de usuários, validando os dados e chamando o serviço de registro.

```jsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validations/cadastroSchema";
import FormBase from "../../../components/organisms/FormBase";
import LinkText from "../../../components/atoms/Link";
import IsEnterprise from "../../../components/atoms/Checkbox";
import PageWrapper from "../../../components/moleculars/pageWrapper";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

/**
 * Componente de cadastro que valida e envia os dados para registrar um novo usuário.
 *
 * @component
 * @returns {JSX.Element} Formulário de cadastro
 */
export default function Register() {
  // ...
}
```

---

## Como usar

1. Garanta que suas dependências `react-hook-form`, `yup`, `react-router-dom`, `firebase` e `react-toastify` estejam instaladas.
2. Os componentes utilizam um contexto `AuthContext` para gerenciar autenticação.
3. Os formulários contam com validações específicas implementadas via schemas Yup.
4. Os componentes já possuem navegação condicional baseada no tipo de usuário (enterprise ou não).
5. Personalize as rotas e estilos conforme sua aplicação.

---

## Notas finais

- Recomenda-se manter os schemas de validação separados para melhor organização.
- Os serviços externos (como `registerUser` e `loginGoogle`) devem ser implementados e importados corretamente.
- O uso de componentes atômicos para botões, links e checkboxes favorece a reutilização e manutenção.

---

