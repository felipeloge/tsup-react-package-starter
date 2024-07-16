import React from 'react';

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
      className={className}
      {...props}
    />
  );
});

export { Button };