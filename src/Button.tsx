import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC = ({
  className,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={className}
    {...props}
  />
);

export { Button };
