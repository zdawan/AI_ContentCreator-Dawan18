import { Search } from "lucide-react";
import React from "react";

function Searchsection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-green-500 via-blue-400 to-blue-700 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p className="font-extralight text-sm">
        What's on your creation list today?
      </p>
      <div className="w-full flex justify-center">
        <div
          className="flex gap-2 items-center 
        bg-white my-5 p-2 w-[50%] border rounded-md"
        >
          <Search className="text-primary" />
          <input
            type="tetx"
            placeholder="Search Most Loved Templates"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchsection;
