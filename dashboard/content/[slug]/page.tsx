"use client";
import React, { useState } from "react";
import FormsSection from "../_components/FormsSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/aimodel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/router";
import { serial } from "drizzle-orm/mysql-core";

interface PROPS {
  params: {
    slug: string;
  };
}

function Createnewcontent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params.slug
  );
  const [loading, setLoading] = useState(false);
  const [aioutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter;
  const GenerateAIContent = async (formData: any) => {
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());

    await SaveIndb(
      JSON.stringify(formData),
      selectedTemplate?.slug,
      result?.response.text()
    );
    setLoading(false);
  };

  const SaveIndb = async (formData: any, slug: any, airesp: string) => {
    if (
      !user ||
      !user.primaryEmailAddress ||
      !user.primaryEmailAddress.emailAddress
    ) {
      throw new Error("User or primary email address is not defined");
    }

    const result = await db.insert(AIOutput).values({
      form: formData,
      response: airesp,
      created: user.primaryEmailAddress.emailAddress,
      at: moment().unix().toString(),
    } as const);

    console.log(result);
  };

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button className="hover:bg-blue-600">
          {" "}
          <ArrowLeft />
          Back{" "}
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormsSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* Output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aioutput} />
        </div>
      </div>
    </div>
  );
}

export default Createnewcontent;
