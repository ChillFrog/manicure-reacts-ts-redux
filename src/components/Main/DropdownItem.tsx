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
      className={`mx-3 flex snap-x overflow-hidden rounded-xl bg-indigo-50 duration-300 ease-in-out ${
        open === text
          ? "translate-y-0 opacity-100"
          : "-translate-y-3 opacity-0 duration-500"
      }`}
    >
      {open === text && <div className="flex h-auto">{children}</div>}
    </div>
  );
}
export default DropdownItem;
