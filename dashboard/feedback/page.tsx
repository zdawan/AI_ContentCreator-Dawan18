import { Button } from "@/components/ui/button";
import { ArrowLeft, CircleChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className=" p-10">
      <Link href={"/dashboard"}>
        <Button className="hover:bg-blue-600">
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="flex mt-22 justify-center items-center p-10">
        We value your feedback and strive to improve our app continuously.
        Please take a moment to complete our feedback form by clicking the
        button below (Reload page if "Try Me" not visible)
      </div>
      <div>
        <h1 className="flex justify-center items-center text-2xl font-bold">
          Provide Feedback <CircleChevronDown />
        </h1>
        <div className="flex justify-center items-center p-5">
          <div data-tf-live="01J2YCX9WXF43P8SY3QNWJTGJW"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
        </div>
      </div>
    </div>
  );
}

export default page;
