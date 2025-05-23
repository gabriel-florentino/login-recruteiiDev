/**
 * Componente: Input
 * Descrição: Campo de input reutilizável com suporte a ícone, máscara (Cleave), erros e tipo senha com toggle.
 *
 * Props:
 * @param {string} label - Texto da label do input
 * @param {React.Component} icon - Ícone opcional à esquerda do input
 * @param {string} error - Mensagem de erro a ser exibida
 * @param {string} className - Classes extras para o container
 * @param {string} inputClassName - Classes extras para o input
 * @param {boolean} disabled - Define se o input está desabilitado
 * @param {object} maskOptions - Configurações de máscara com Cleave.js
 * @param {string} type - Tipo do input (default: "text", também aceita "password" com botão toggle)
 * @param {object} rest - Outras props do input
 *
 * Tecnologias:
 * - React
 * - TailwindCSS
 * - clsx
 * - cleave.js/react
 * - react-icons (FiEye, FiEyeOff)
 */

import React, { forwardRef, useState } from "react";
import clsx from "clsx";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef(
  (
    {
      label,
      icon: Icon,
      error,
      className,
      inputClassName,
      disabled = false,
      maskOptions,
      type = "text", // Adicione default para type
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const effectiveType = isPassword ? (showPassword ? "text" : "password") : type;

    const inputClasses = clsx(
      "w-full bg-transparent outline-none placeholder-textSecondary-light text-sm",
      "text-textPrimary-light",
      inputClassName
    );

    return (
      <div className={clsx("w-full flex flex-col gap-1", className)}>
        {label && (
          <label className="ml-2 text-sm font-medium text-textPrimary-light">
            {label}
          </label>
        )}

        <div
          className={clsx(
            "relative flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm shadow transition-shadow duration-300",
            {
              "shadow-[0_0_8px_0_rgba(239,68,68,0.6)]": error,
              "hover:shadow-[0_0_8px_0_rgba(59,130,246,0.6)]":
                !error && !disabled,
              "opacity-50 cursor-not-allowed": disabled,
            }
          )}
        >
          {Icon && (
            <Icon className="mr-2 h-5 w-5 text-textSecondary-light" />
          )}

          {maskOptions ? (
            <Cleave
              {...rest}
              options={maskOptions}
              disabled={disabled}
              htmlRef={ref}
              className={inputClasses}
            />
          ) : (
            <input
              {...rest}
              type={effectiveType}
              disabled={disabled}
              ref={ref}
              className={inputClasses}
            />
          )}

          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 text-textSecondary-light hover:text-textPrimary-light transition"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          )}
        </div>

        {error && (
          <span className="text-xs text-textError-light">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
