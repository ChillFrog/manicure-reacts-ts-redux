import { ReactNode } from "react";

function Menu({ children }: { children: ReactNode }) {
  return (
    <div className="mx-3 mb-3 flex flex-row justify-center">{children}</div>
  );
}

export default Menu;
