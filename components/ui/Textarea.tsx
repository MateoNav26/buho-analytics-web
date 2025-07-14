// components/ui/Textarea.tsx
import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export type TextareaVariant = "primary" | "ghost";
export type TextareaSize = "sm" | "md" | "lg";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  textareaSize?: TextareaSize;
  error?: string;
}

/**
 * Textarea base reutilizable con variantes y tamaños.
 * Ejemplo: <Textarea variant="primary" textareaSize="lg" placeholder="Mensaje" />
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, variant = "primary", textareaSize = "md", error, ...props },
    ref,
  ) => {
    const base =
      "block w-full rounded-lg font-sans transition focus:outline-none focus:ring-2 focus:ring-primary-accent placeholder-white-raw/40 resize-none";
    const variants: Record<TextareaVariant, string> = {
      primary:
        "bg-transparent border border-white-raw/20 text-white-raw focus:border-primary-accent",
      ghost:
        "bg-transparent border-none text-white-raw focus:bg-primary-accent/10",
    };
    const sizes: Record<TextareaSize, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    return (
      <div>
        <textarea
          ref={ref}
          className={cn(
            base,
            variants[variant],
            sizes[textareaSize],
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
Textarea.displayName = "Textarea";

export default Textarea;
