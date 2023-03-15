import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search() {
  return (
    <div className="mx-4 mb-3 flex items-center justify-start rounded-xl  bg-white bg-opacity-30 px-3 outline-none focus-within:shadow-sm">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        type="search"
        placeholder="Поиск..."
        className="form-textarea w-full rounded-xl border-none bg-transparent p-3 font-medium outline-none focus:ring-0"
      ></input>
    </div>
  );
}

export default Search;
