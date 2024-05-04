import { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

const Button = ({ children, variant = "primary", ...props }: Props) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <button
        {...props}
        className={cn(
          "px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-colors text-sm sm:text-lg",
          {
            "bg-foreground text-background hover:bg-foreground/80":
              variant === "primary",
            "border-2 border-primary bg-background text-primary font-semibold hover:bg-primary hover:text-background":
              variant === "outline",
          },
          props.className
        )}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
