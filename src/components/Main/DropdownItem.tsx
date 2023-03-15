import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";

type DropdownItemProps = {
  text: string;
  children: ReactNode;
};

function DropdownItem({ text, children }: DropdownItemProps) {
  const { open } = useAppSelector((state) => state.menuReducer);

  return (
    <div
      className={`absolute bottom-0 w-full snap-x overflow-auto rounded-xl bg-white bg-opacity-30 ease-in-out ${
        open === text
          ? "translate-y-0 border-opacity-100 opacity-100 duration-500"
          : "-translate-y-3 border-opacity-0  opacity-0"
      }`}
    >
      {open === text && <div className="flex h-auto">{children}</div>}
    </div>
  );
}
export default DropdownItem;
