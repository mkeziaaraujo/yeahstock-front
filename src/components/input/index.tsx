import { Icon } from "@phosphor-icons/react";
import React from "react";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: Icon;
  label?: string;
  isError?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon: StartIcon, label, isError, ...rest }, ref) => {
    return (
      <div>
        {label && <label className="text-gray-primary">{label}</label>}
        <div className="flex items-center gap-5 bg-[#242424] border border-black-light rounded-lg px-4">
          {StartIcon && <StartIcon className="text-white" />}
          <input
            {...rest}
            ref={ref}
            className="placeholder:text-black-light text-white bg-transparent outline-none w-full h-8 px-1"
          />
        </div>
        {isError && (
          <span className="text-red-600  text-sm">{label} is required</span>
        )}
      </div>
    );
  }
);
