import { ReactNode } from "react";
import { HouseLine } from "@phosphor-icons/react";

interface SideBarProps {
  children: ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  return (
    <div>
      <div className="max-w-56 w-full border-r-2 border-r-black-light fixed top-0 bottom-0">
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="logo" className="mt-12" />

          <hr className="border-2 border-black-light w-28 mt-10" />
          <ul>
            <li className="flex items-center justify-center mt-10 text-white gap-3 px-5 py-1 bg-[#242424] border border-black-light rounded-xl">
              <HouseLine size={24} />
              <span>Home</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-60 ">{children}</div>
    </div>
  );
}
