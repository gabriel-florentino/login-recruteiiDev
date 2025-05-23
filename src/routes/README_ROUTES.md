
# README — Rotas Protegidas e Públicas + Página de Erro

## Overview

Este pacote contém três componentes React que controlam o acesso a rotas do seu app de forma inteligente, com mensagens claras e redirecionamentos automáticos, garantindo que ninguém esteja no lugar errado — porque, convenhamos, invasão de rota é tão anos 90.

### Componentes

- **`ProtectedRoute`**  
  Controla o acesso a rotas privadas, garantindo que apenas usuários autenticados com o perfil correto (empresa ou desenvolvedor) entrem. Caso contrário, exibe alerta e redireciona.

- **`PublicOnlyRoute`**  
  Garante que usuários já logados não acessem rotas públicas (como páginas de login ou cadastro). Se tentarem, recebem uma mensagem e são redirecionados para seu painel.

- **`ErrorRoute`**  
  Página customizada para rotas inválidas (erro 404). Exibe mensagem divertida e, após 5 segundos, redireciona o usuário para a rota apropriada dependendo do estado do login.

---

## Uso

### ProtectedRoute

```jsx
<ProtectedRoute only="empresa"> 
  <SuaRotaPrivada />
</ProtectedRoute>
```

- `only`: string, aceita `"empresa"` ou `"dev"`. Define o perfil que pode acessar essa rota.

### PublicOnlyRoute

```jsx
<PublicOnlyRoute>
  <LoginOuCadastro />
</PublicOnlyRoute>
```

- Permite acesso apenas para usuários **não autenticados**. Usuários logados são redirecionados para o painel.

### ErrorRoute

```jsx
<ErrorRoute />
```

- Exibe página de erro 404 personalizada com redirecionamento automático.

---

## Funcionamento Interno

- **Loading**: Enquanto o status de autenticação está carregando, os componentes exibem um spinner (loading) para melhor UX.

- **Mensagens**: Cada componente usa um sistema de mensagens customizadas para explicar o motivo do redirecionamento. Sem mistério, sem lenga-lenga.

- **Redirecionamento automático**: Após 5 segundos de exibição da mensagem, o usuário é redirecionado para o destino correto.

---

## Dependências

- React (hooks: `useState`, `useEffect`, `useContext`)
- React Router DOM (para navegação)
- Contexto de autenticação (`useAuth`) — seu gerenciador central de usuário
- Componentes auxiliares:  
  - `Redirect` (componente visual para exibir mensagens)  
  - `Spinner` (loading indicator)  
  - Imagens para cada cenário (`routePrivate.webp`, `routePublic.webp`, `error-404.webp`)

---

## Exemplo de Fluxo

1. Usuário não logado tenta acessar rota privada → **ProtectedRoute** exibe alerta → redireciona para login.  
2. Usuário logado tenta acessar rota de login → **PublicOnlyRoute** exibe aviso → redireciona para painel.  
3. Usuário acessa rota inexistente → **ErrorRoute** mostra erro 404 → redireciona conforme perfil.

---

## Próximos passos visionários

- Tornar mensagens e redirecionamentos configuráveis via props para maior flexibilidade.  
- Adicionar logs para auditoria de acessos negados.  
- Personalizar ainda mais as páginas de erro com sugestões interativas ou FAQs.

---

Se quiser, mando a documentação completa em formato markdown pronta para o seu repositório. Só avisar!
