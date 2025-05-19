import React from 'react';
import clsx from 'clsx';

const Input = React.forwardRef(({
  label,
  icon: Icon,
  error,
  className,
  inputClassName,
  type = 'text',
  disabled = false,
  ...props // aqui está a mágica do register vindo
}, ref) => {
  return (
    <div className={clsx('w-full flex flex-col gap-1', className)}>
      {label && (
        <label className="ml-2 text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark">
          {label}
        </label>
      )}

      <div
        className={clsx(
          'relative flex items-center px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm shadow transition-shadow duration-300',
          {
            'shadow-[0_0_8px_0_rgba(239,68,68,0.6)] dark:shadow-[0_0_8px_0_rgba(248,113,113,0.6)]': error,
            'hover:shadow-[0_0_8px_0_rgba(59,130,246,0.6)] dark:hover:shadow-[0_0_8px_0_rgba(96,165,250,0.6)]': !error && !disabled,
            'opacity-50 cursor-not-allowed': disabled,
          }
        )}
      >
        {Icon && (
          <Icon className="mr-2 h-5 w-5 text-textSecondary-light dark:text-textSecondary-dark" />
        )}
        <input
          type={type}
          disabled={disabled}
          ref={ref}
          {...props} // isso inclui onChange, name, onBlur, etc
          className={clsx(
            'w-full bg-transparent outline-none placeholder-textSecondary-light text-sm',
            'text-textPrimary-light dark:text-textPrimary-dark',
            inputClassName
          )}
        />
      </div>

      {error && (
        <span className="text-xs text-textError-light dark:text-textError-dark mt-1 ml-2">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
