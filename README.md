# RecruteiDev - Módulo de Login

> Um sistema robusto e seguro de autenticação para o RecruteiDev, a plataforma que inverte o jogo do mercado de trabalho para desenvolvedores iniciantes — aqui, são as empresas que procuram os devs!

---

## 🚀 Sobre o projeto

O **RecruteiDev Login** é o módulo responsável por oferecer um login completo, seguro e elegante para a plataforma RecruteiDev. O objetivo é garantir que desenvolvedores e empresas acessem seus perfis com facilidade, mantendo a segurança e experiência de uso no mais alto nível.

A plataforma **RecruteiDev** nasce para facilitar a vida dos desenvolvedores iniciantes, oferecendo oportunidades reais e inovadoras. Diferente de um LinkedIn tradicional, aqui são as empresas que buscam os talentos — um verdadeiro *LinkedIn reverso*.

---

## 🛠 Tecnologias utilizadas

- React
- Tailwind CSS
- HTML5
- JavaScript (ES6+)
- Firebase Authentication
- React Hook Form (validações e formulários)
- Yup (validação de esquemas)
- Cleave.js (máscara de CPF)
- Framer Motion (animações)
- Vite (build tool)
- JWT Fake (simulação de token)
- React Router DOM (roteamento)
- React Icons
- Context API (controle global de autenticação)

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