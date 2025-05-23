# Componentes Moleculares - RecruteiDev

Este diretório contém componentes moleculares usados no projeto RecruteiDev, focados em autenticação, navegação e feedback visual.

---

## Componentes

### Apresentation

Componente de apresentação do módulo de login que mostra:

- Tecnologias usadas (React, Tailwind, JWT fake, etc.)
- Funcionalidades atuais do módulo de login
- Roadmap das próximas implementações
- Botões para logout e exclusão de conta (com confirmação)

**Uso:**

```jsx
import Apresentation from './Apresentation';

function App() {
  return <Apresentation />;
}
```

### Card

Componente para exibir mensagens importantes com título, texto e botão que navega para uma rota definida.

**Props:**

| Nome          	| Tipo   	| Descrição                  	|
|---------------	|--------	|----------------------------	|
| warning       	| string 	| Mensagem de alerta / aviso 	|
| title         	| string 	| Titulo do card             	|
| menssage      	| string 	| Mensagem complementar      	|
| textButton    	| string 	| Texto do botão             	|
| linkForButton 	| string 	| URL ou rota para navegação 	|

**Uso:**

 ```jsx 
 <Card
  warning="Atenção!"
  title="Erro"
  menssage="Ocorreu um problema."
  textButton="Voltar"
  linkForButton="/home"
/>
```

### PageWrapper

Wrapper para páginas que aplica animações de entrada e saída usando Framer Motion.

**Props:**

| Nome          	| Tipo   	| Descrição                  	|
|---------------	|--------	|----------------------------	|
| children       	| ReactNode 	| Conteúdo a ser renderizado 	|

**Uso:**

```jsx 
<PageWrapper>
  <MinhaPagina/>
</PageWrapper>
```

### Redirect

Componente para exibir mensagem de redirecionamento com animação, barra de progresso e ícone.

**Props:**

| Nome          	| Tipo   	| Descrição                  	|
|---------------	|--------	|----------------------------	|
| title         	| string 	| Titulo da mensagem          	|
| mensage      	| string 	| Mensagem complementar      	|
| image    	| ReactNode 	|Ícone ou imagem exibida             	|

**Uso:**
```jsx 
<Redirect
  title="Redirecionando"
  mensage="Você será redirecionado em breve."
  image=<FaReact size={48}/>
/>
```

---

## Tecnologias

- React
- Framer Motion
- React Router DOM
- Tailwind CSS

---

## Autor

Projeto desenvolvido por GABRIEL GUSTAVO CAMARGO FLORENTINO, focando em UX, autenticação e animações modernas.
