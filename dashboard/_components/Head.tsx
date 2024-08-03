import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

function Head() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between bg-white items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Button className="bg-black ">Beta Version 1.0</Button>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">
          🔥Join Our Community Now
        </h2>
        <UserButton />
      </div>
    </div>
  );
}

export default Head;
