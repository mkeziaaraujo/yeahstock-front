import { Icon } from "@phosphor-icons/react";
import { ReactNode } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: Icon;
  variant?: "primary" | "error";
}

export function Button({
  children,
  startIcon: StartIcon,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const variantClasses =
    variant === "error"
      ? "w-fit bg-transparent text-red-400 border-none flex items-center justify-center gap-2 py-1 px-5 h-8"
      : "w-full bg-blue-dark text-white border-none rounded-lg flex items-center justify-center gap-2 pt-1 px-5 h-8";
  return (
    <button className={variantClasses} {...rest}>
      {StartIcon && <StartIcon size={20} />}
      {children}
    </button>
  );
}
