import React from 'react';
import clsx from 'clsx';

const Title = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        'text-h1 font-title text-textPrimary dark:text-textPrimary',
        'drop-shadow-sm tracking-tight',
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
