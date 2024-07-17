import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva('Toggle', {
  variants: {
    variant: {
      contained: 'ButtonContained',
      outline: 'ButtonOutline',
    },
    size: {
      small: 'ButtonSmall',
      large: 'ButtonLarge',
    },
  },
  defaultVariants: {
    variant: 'contained',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {} {}

const Button: React.FC<ButtonProps> = ({
  className,
  type = 'button',
  variant,
  size,
  ...props
}) => (
  <button
    type={type}
    className={clsx(buttonVariants({ variant, size, className }))}
    {...props}
  />
);

export { Button };
