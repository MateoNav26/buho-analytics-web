"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right" | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDirection(deltaX > 0 ? "right" : "left");
    } else {
      setDirection(deltaY > 0 ? "bottom" : "top");
    }
  };

  const handleMouseLeave = () => {
    setDirection(null);
  };

  return (
    <div
      className={cn(
        "group/card relative h-full w-full rounded-xl bg-slate-100 dark:bg-slate-900",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        {direction && (
          <motion.div
            className="pointer-events-none absolute -inset-px z-10 opacity-0 transition duration-300 group-hover/card:opacity-100"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{ opacity: 0 }}
          >
                         <div
               className={cn(
                 "absolute inset-0 bg-gradient-to-r from-primary-accent to-secondary-accent opacity-0 transition duration-300 group-hover/card:opacity-20",
                 {
                   "bg-gradient-to-b from-primary-accent to-secondary-accent": direction === "top",
                   "bg-gradient-to-t from-primary-accent to-secondary-accent": direction === "bottom",
                   "bg-gradient-to-l from-primary-accent to-secondary-accent": direction === "right",
                   "bg-gradient-to-r from-primary-accent to-secondary-accent": direction === "left",
                 }
               )}
             />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900",
          imageClassName
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover/card:scale-105"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className={cn("relative z-20 h-full w-full", childrenClassName)}>
          {children}
        </div>
      </div>
    </div>
  );
}; 