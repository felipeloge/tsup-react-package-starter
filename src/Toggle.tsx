import React from 'react';
import { Root } from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const toggleVariants = cva('Toggle', {
  variants: {
    variant: {
      default: 'bg-transparent',
      outline:
        'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 px-3',
      sm: 'h-9 px-2.5',
      lg: 'h-11 px-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Toggle = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <Root
    ref={ref}
    className={clsx(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = Root.displayName;

export default Toggle;
export { Toggle };
