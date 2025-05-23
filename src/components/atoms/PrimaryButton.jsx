/**
 * Componente de botão personalizável com suporte a ícones, estados de erro e desabilitado.
 *
 * @component
 *
 * @param {object} props - Propriedades do componente.
 * @param {React.ReactNode} props.children - Conteúdo exibido no botão.
 * @param {React.ReactNode} [props.icon] - Ícone opcional exibido à esquerda do texto.
 * @param {function} [props.onClick] - Função chamada ao clicar no botão.
 * @param {boolean} [props.disabled=false] - Define se o botão está desabilitado.
 * @param {boolean} [props.error=false] - Define se o botão deve mostrar o estilo de erro.
 * @param {string} [props.className="bg-buttonPrimary-light text-white"] - Classes adicionais para estilização.
 * @param {string} [props.type="button"] - Tipo do botão (button, submit, reset).
 * @param {...object} props.props - Outras propriedades nativas de um elemento <button>.
 *
 * @returns {JSX.Element} Elemento JSX que representa um botão estilizado.
 */

import React from 'react';
import clsx from 'clsx';

const Button = ({
  children,
  icon,           // novo prop para ícone SVG (ReactNode)
  onClick,
  disabled = false,
  error = false,
  className="bg-buttonPrimary-light text-white",
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `${className} whitespace-nowrap
        px-6 py-2 rounded-full font-medium transition-shadow duration-300 flex items-center justify-center gap-2`,
        'shadow-sm',
        {
          'shadow-[0_0_8px_0_rgba(239,68,68,0.6)]': error,
          'hover:shadow-[0_0_10px_0_rgba(59,130,246,0.8)]':
            !error && !disabled,
          'opacity-50 cursor-not-allowed bg-backgroundDisabled-light':
            disabled,
        },
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
