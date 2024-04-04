import React from "react";
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isError?: boolean;
}

export function Textarea({ label, isError, ...rest }: TextareaProps) {
  return (
    <div>
      <label className="text-gray-primary">{label}</label>

      <textarea
        rows={4}
        {...rest}
        className="w-full bg-[#242424] text-gray-primary  placeholder:text-gray-primary p-2 outline-none rounded-lg"
      ></textarea>
      {isError && (
        <span className="text-red-600  text-sm">{label} is required</span>
      )}
    </div>
  );
}
