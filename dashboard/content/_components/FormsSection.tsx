"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateList";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormsSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const fallbackImage = "/fallback-icon.png";

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon || fallbackImage}
        alt="icon"
        width={50}
        height={50}
        className="rounded-full"
      />

      <h2 className="font-bold text-2xl mb-2 text-primary ">
        {selectedTemplate?.name}
      </h2>
      <p className="font-extralight text-sm text-gray-500">
        {selectedTemplate?.desc}
      </p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-2">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6 hover:bg-gradient-to-tr  from-green-500 via-blue-400 to-blue-700"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin" />}
          Generate
        </Button>
      </form>
    </div>
  );
}

export default FormsSection;
