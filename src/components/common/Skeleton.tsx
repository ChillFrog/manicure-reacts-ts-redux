import React from "react";

function Skeleton() {
  return (
    <div role="status" className="flex animate-pulse items-center ">
      <div className="m-3 flex h-32 items-center justify-center rounded-xl bg-slate-500  sm:w-24"></div>
    </div>
  );
}

export default Skeleton;
