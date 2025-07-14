// components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

/**
 * Botón base reutilizable con variantes y tamaños.
 * Ejemplo: <Button variant="primary" size="lg">Texto</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center font-dm-sans font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-60 disabled:pointer-events-none";
    const variants: Record<ButtonVariant, string> = {
      primary: "bg-black text-primary-accent shadow-sm hover:bg-neutral-800",
      secondary:
        "bg-primary-accent text-black shadow-brand hover:bg-primary-600",
      ghost: "bg-transparent text-primary-accent hover:bg-primary-accent/10",
    };
    const sizes: Record<ButtonSize, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin mr-2 h-5 w-5 text-current"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export default Button;
