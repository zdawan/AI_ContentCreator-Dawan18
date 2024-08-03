import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <div className=" p-10">
      <Link href={"/dashboard"}>
        <Button className="hover:bg-blue-600">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <UserProfile />
      </div>
    </div>
  );
}

export default Profile;
