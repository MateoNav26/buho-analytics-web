// components/ui/Card.tsx
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export type CardVariant = "elevated" | "bordered" | "ghost";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: string;
}

/**
 * Card base reutilizable con variantes y padding.
 * Ejemplo: <Card variant="elevated" padding="p-6">Contenido</Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = "elevated", padding = "p-6", children, ...props },
    ref,
  ) => {
    const variants: Record<CardVariant, string> = {
      elevated:
        "bg-neutral-900/40 shadow-lg shadow-black/30 rounded-2xl border border-neutral-800 backdrop-blur-sm",
      bordered: "bg-black border border-white-raw/20 rounded-lg",
      ghost: "bg-transparent border-none",
    };
    return (
      <div
        ref={ref}
        className={cn(variants[variant], padding, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

export default Card;
