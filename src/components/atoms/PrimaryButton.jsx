import React from 'react';
import clsx from 'clsx';

const Button = ({
  children,
  icon,           // novo prop para ícone SVG (ReactNode)
  onClick,
  disabled = false,
  error = false,
  className="bg-buttonPrimary-light dark:bg-buttonPrimary-dark text-white",
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `${className}
        px-6 py-2 rounded-full font-medium transition-shadow duration-300 flex items-center justify-center gap-2`,
        'shadow-sm',
        {
          'shadow-[0_0_8px_0_rgba(239,68,68,0.6)] dark:shadow-[0_0_8px_0_rgba(248,113,113,0.6)]': error,
          'hover:shadow-[0_0_10px_0_rgba(59,130,246,0.8)] dark:hover:shadow-[0_0_10px_0_rgba(96,165,250,0.8)]':
            !error && !disabled,
          'opacity-50 cursor-not-allowed bg-backgroundDisabled-light dark:bg-backgroundDisabled-dark':
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
