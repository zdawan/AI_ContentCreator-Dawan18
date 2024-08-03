import React from "react";
import { TEMPLATE } from "./TemplateList";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-5 shadow-md rounded-md border bg-white flex-col gap-4 cursor-pointer hover:bg-gradient-to-tl from-blue-500 via-white to-white hover:scale-x-110 transition-all ">
        <Image src={item.icon} alt="icon" width={60} height={60} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-2">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;
