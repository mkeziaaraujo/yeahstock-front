import { Icon } from "@phosphor-icons/react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Icon;
  label?: string;
  isError?: boolean;
}
export function Input({
  startIcon: StartIcon,
  label,
  isError,
  ...rest
}: InputProps) {
  return (
    <div>
      {label && <label className="text-gray-primary">{label}</label>}
      <div className="flex items-center gap-5 bg-[#242424] border border-black-light rounded-lg px-4">
        {StartIcon && <StartIcon className="text-white" />}
        <input
          {...rest}
          type="text"
          className="placeholder:text-black-light text-white bg-transparent outline-none w-full h-8 px-1"
        />
      </div>
      {isError && (
        <span className="text-red-600  text-sm">{label} is required</span>
      )}
    </div>
  );
}
