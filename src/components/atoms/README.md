# Módulo Atoms

Este módulo contém os componentes básicos e reutilizáveis da interface do projeto RecruteiDev. São os blocos fundamentais da UI, seguindo a arquitetura Atomic Design para facilitar a manutenção, escalabilidade e consistência visual.

## Visão Geral

Os **atoms** são componentes simples e independentes, que encapsulam elementos básicos da interface, como:

- Botões (`Button`)
- Inputs de texto e senha (`Input`)
- Checkbox (`RememberMeCheckbox`)
- Ícones e textos estilizados (`LinkText`, `Title`)
- Indicadores de carregamento (`Spinner`)

Esses componentes são usados em módulos maiores para construir interfaces mais complexas.

## Componentes Principais

- **Button**: botão estilizado com suporte a ícones, estados de erro e desabilitado.
- **Input**: campo de texto com suporte a máscara, validação visual e toggle de visibilidade para senha.
- **RememberMeCheckbox**: checkbox customizado para lembrar login.
- **LinkText**: texto estilizado para links ou descrições.
- **Title**: título estilizado, para hierarquia de texto.
- **Spinner**: indicador de carregamento animado usando Framer Motion.

## Tecnologias Utilizadas

- React
- clsx para classes condicionais
- framer-motion para animações (Spinner)
- cleave.js para máscaras em inputs
- react-icons para ícones SVG

## Como usar

Importe os componentes onde precisar:

```jsx
import Button from 'src/components/atoms/Button';
import Input from 'src/components/atoms/Input';
import RememberMeCheckbox from 'src/components/atoms/RememberMeCheckbox';
import LinkText from 'src/components/atoms/LinkText';
import Title from 'src/components/atoms/Title';
import Spinner from 'src/components/atoms/Spinner';

function MeuComponente() {
  return (
    <>
      <Title>Entrar no sistema</Title>
      <Input label="E-mail" type="email" />
      <RememberMeCheckbox />
      <Button>Entrar</Button>
      <Spinner message="Carregando dados..." />
    </>
  );
}
