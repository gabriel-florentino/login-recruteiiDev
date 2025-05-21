import React, { forwardRef } from "react";
import clsx from "clsx";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";

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
      ...rest
    },
    ref
  ) => {
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
            "relative flex items-center px-4 py-2 rounded-full bg-white/20  backdrop-blur-sm shadow transition-shadow duration-300",
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
              disabled={disabled}
              ref={ref}
              className={inputClasses}
            />
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
