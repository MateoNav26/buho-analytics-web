// components/ui/Input.tsx
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export type InputVariant = "primary" | "ghost";
export type InputSize = "sm" | "md" | "lg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
  error?: string;
}

/**
 * Input base reutilizable con variantes y tamaños.
 * Ejemplo: <Input variant="primary" inputSize="lg" placeholder="Nombre" />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, variant = "primary", inputSize = "md", error, ...props },
    ref,
  ) => {
    const base =
      "block w-full rounded-lg font-sans transition focus:outline-none focus:ring-2 focus:ring-primary-accent placeholder-white-raw/40";
    const variants: Record<InputVariant, string> = {
      primary:
        "bg-transparent border border-white-raw/20 text-white-raw focus:border-primary-accent",
      ghost:
        "bg-transparent border-none text-white-raw focus:bg-primary-accent/10",
    };
    const sizes: Record<InputSize, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    return (
      <div>
        <input
          ref={ref}
          className={cn(
            base,
            variants[variant],
            sizes[inputSize],
            className,
            error && "border-red-500 focus:ring-red-500",
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";

export default Input;
