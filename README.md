# RecruteiDev - Módulo de Login

O **RecruteiDev Login** é o módulo responsável por oferecer um login **completo, seguro e elegante** para a plataforma RecruteiDev. O objetivo é garantir que desenvolvedores e empresas acessem seus perfis com facilidade, mantendo a segurança e experiência de uso no mais alto nível.

---

🚀 **Acesse a aplicação real:**  
👉 [Clique aqui para ver o app no ar!](https://login-recruteii-dev.vercel.app/entrar)

---

![Banner do Projeto](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748014376/CapturadeTela16-ezgif.com-jpg-to-webp-converter_eqjp0q.webp)

> 🔁 **Diferente do LinkedIn tradicional**, aqui a dinâmica é invertida: as empresas buscam talentos dev promissores, em vez de devs implorarem por atenção. 😉

**Tecnologias utilizadas**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Yup](https://img.shields.io/badge/Yup-1A202C?style=for-the-badge&logo=yup&logoColor=white)
![Cleave.js](https://img.shields.io/badge/Cleave.js-FF6A00?style=for-the-badge&logo=javascript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT_FAKE-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-61DAFB?style=for-the-badge&logo=react&logoColor=white)

---

## Telas do APP no mobile

<table>
  <tr>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748014373/CapturadeTela18-ezgif.com-jpg-to-webp-converter_pjeom5.webp" width="100%"></td>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748013723/Captura-de-Tela-_19__nmu09z.webp" width="100%"></td>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748014369/CapturadeTela24-ezgif.com-jpg-to-webp-converter_re6pan.webp" width="100%"></td>
  </tr>
</table>

---

## Telas de ERRO do APP

<table>
  <tr>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748013946/Captura-de-Tela-_27__hunw76.webp" width="100%"></td>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748013919/Captura-de-Tela-_28__1_kyv7wk.webp" width="100%"></td>
    <td><img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748013944/Captura-de-Tela-_26__l9rsvi.webp" width="100%"></td>
  </tr>
</table>

---

## ✨ Funcionalidades principais

- Login com e-mail e senha com validações robustas (React Hook Form + Yup)
- Login via Google Authentication (OAuth)
- Recuperação de senha com envio de e-mail (backend para integração futura)
- Validação real de CPF com cálculo correto
- Máscara dinâmica de CPF com Cleave.js
- Proteção de rotas privadas com redirecionamento amigável
- Páginas de erro personalizadas para melhor UX
- Controle global de autenticação com Context API
- Animações fluidas com Framer Motion
- Diferenciação entre contas de desenvolvedor e empresa
- Permissões e acessos baseados no tipo de usuário

---

## 🎯 Como usar

1. Clone o repositório:

```bash
   git clone https://github.com/gabriel-florentino/login-recruteiiDev.git
   cd recruteidev-login
```
2. Instale as dependencias:

```bash
    npm install
```

3. Configure seu Firebase no arquivo de configuração.

4. Rode a aplicação:

```bash
    npm run dev
```

5. Acesse no navegador (geralmente http://localhost:5173/entrar).

---

## ⚙️ Dependências importantes

```json
"dependencies": {{
  "@hookform/resolvers": "^5.0.1",
  "bcryptjs": "^3.0.2",
  "cleave.js": "^1.6.0",
  "clsx": "^2.1.1",
  "firebase": "^11.8.1",
  "framer-motion": "^12.12.1",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hook-form": "^7.56.4",
  "react-icons": "^5.5.0",
  "react-input-mask": "^2.0.4",
  "react-router-dom": "^7.6.0",
  "react-toastify": "^11.0.5",
  "yup": "^1.6.1"
}}
```

---

## 🔮 Próximas etapas (Roadmap)

- Criação da landing page do projeto
- Fazer testes em jest
- Backend seguro com rotas, autenticação e JWT real
- Implementar modo dark e suporte bilíngue (Português e Inglês)
- Integração completa com backend para recuperação funcional de senha
- Página de edição de perfil e configurações para usuários
- Dashboard exclusivo para empresas buscarem desenvolvedores
- Perfis públicos e currículos customizáveis para devs
- Chat direto entre empresa e desenvolvedor
- Sistema de avaliação e feedback entre usuários
- IA para auxiliar devs na criação e otimização de seus perfis
- Documentação completa e proteção geral do projeto
- Exposição pública e gratuita para toda a comunidade

---

## 🤝 Como contribuir

Contribuições são super bem-vindas! Se você quer ajudar a tornar o RecruteiDev maior e melhor, siga esses passos:

1. Fork este repositório.

2. Crie sua branch com a feature: git checkout -b minha-feature.

3. Faça commit das suas alterações: git commit -m 'Minha nova feature'.

4. Envie para a branch original: git push origin minha-feature.

5. Abra um Pull Request e descreva as mudanças.

---

## 📄 Licença

Este projeto está licenciado sob a MIT License.

---

## 🙌 Contato

Quer trocar uma ideia ou tirar dúvidas? Me chama no [gabrielflorentino.contato@gmail.com] ou abra uma issue aqui no GitHub. Contatos no perfil.

---

RecruteiDev — Onde o futuro dos devs começa.