import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({
  className,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      ref={ref}
      className={clsx('Button', className)}
      {...props}
    />
  );
});

export { Button };