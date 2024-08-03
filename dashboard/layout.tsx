import React from "react";
import Leftnav from "./_components/Leftnav";
import Head from "./_components/Head";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-200 h-screen">
      <div className="md:w-64 hidden md:block fixed">
        <Leftnav />
      </div>
      <div className="md:ml-64">
        <Head />
        {children}
      </div>
    </div>
  );
}

export default layout;
