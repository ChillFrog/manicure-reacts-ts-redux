import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search() {
  return (
    <div className="mx-4 mb-3 flex items-center justify-start rounded-xl border-none bg-indigo-50 px-3 outline-none focus-within:shadow-sm">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        type="text"
        placeholder="Поиск..."
        className="w-full rounded-xl bg-indigo-50 p-3 font-medium outline-none"
      ></input>
    </div>
  );
}

export default Search;
