import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva('Button', {
  variants: {
    variant: {
      contained: 'ButtonContained',
      outline: 'ButtonOutline',
    },
    color: {
      primary: 'ButtonPrimary',
      secondary: 'ButtonSecondary',
    },
  },
  defaultVariants: {
    variant: 'contained',
    color: 'primary',
  },
});

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({
  className,
  type = 'button',
  variant,
  color,
  ...props
}, ref) => {
  return (
    <button
      type={type}
      ref={ref}
      className={clsx(buttonVariants({ variant, color }), className)}
      {...props}
    />
  );
});

export { Button };