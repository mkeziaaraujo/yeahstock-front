import { Icon } from "@phosphor-icons/react";
import { ReactNode } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: Icon;
}

export function Button({ children, startIcon: StartIcon }: ButtonProps) {
  return (
    <button className="w-full bg-blue-dark text-white border-none rounded-lg flex items-center justify-center gap-2 pt-1 px-5 h-8">
      {StartIcon && <StartIcon size={20} className="text-white" />}
      {children}
    </button>
  );
}
