/**
 * Componente de título principal estilizado (h1).
 *
 * Aplica fontes, tamanhos e sombras padrão com possibilidade de sobrescrever via className.
 *
 * @component
 *
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo do título (geralmente string ou JSX).
 * @param {string} [props.className] - Classes CSS adicionais para personalização.
 *
 * @returns {JSX.Element} Elemento JSX que representa um título h1 estilizado.
 */

import React from 'react';
import clsx from 'clsx';

const Title = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'text-h1 font-title text-textPrimary',
        'drop-shadow-sm tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
