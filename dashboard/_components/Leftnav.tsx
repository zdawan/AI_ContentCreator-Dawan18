"use client";
import {
  Book,
  Home,
  Lightbulb,
  Settings,
  TimerIcon,
  WalletCards,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Leftnav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Inspiration",
      icon: Lightbulb,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Profile",
      icon: Settings,
      path: "/dashboard/profile",
    },
  ];

  const MenuList02 = [
    {
      name: "Feedback",
      icon: Book,
      path: "/dashboard/feedback",
    },
  ];

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <div className="flex justify-center ">
        <Image src={"/logo.svg"} alt="logo18" width={100} height={100} />
      </div>
      <hr className="my-6 border " />
      <div className="mt-4">
        {MenuList.map((menu, _index) => (
          <div
            key={menu.path}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
             ${pathname === menu.path ? "bg-primary text-white" : ""}`}
            onClick={() => router.push(menu.path)}
          >
            <menu.icon className="h-7 w-7" />
            <h2>{menu.name}</h2>
          </div>
        ))}
        {MenuList02.map((menu, _index) => (
          <div
            key={menu.path}
            className={`flex gap-2 mb-2 p-3 bg-black text-white hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
             ${pathname === menu.path ? "bg-primary text-white" : ""}`}
            onClick={() => router.push(menu.path)}
          >
            <menu.icon className="h-7 w-7" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leftnav;
