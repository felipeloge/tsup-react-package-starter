import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC = ({
  className,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={clsx('Button', className)}
    {...props}
  />
);

export { Button };
