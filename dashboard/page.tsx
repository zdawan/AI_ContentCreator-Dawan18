"use client";
import React, { useState } from "react";
import Searchsection from "./_components/Searchsection";
import TemplateList from "./_components/TemplateList";

function page() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      {/*Search Section */}
      <Searchsection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/*Template list section*/}
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  );
}

export default page;
