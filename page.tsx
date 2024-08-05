import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-7 border-b shadow-sm">
        <div className="flex items-center justify-between">
          <a
            href="https://zdawan.github.io/dharshan.github.io/"
            target="_blank"
            className="font-bold text-sm"
          >
            {" "}
            Dawan18.Studio{" "}
          </a>{" "}
          <Image src={"/logo.svg"} height={100} width={50} alt={""} />{" "}
          <div className="flex gap-5 items-center">
            <Link href={"/dashboard"}>
              <Button> Dashboard </Button>
            </Link>{" "}
          </div>
        </div>{" "}
      </div>
      <section className="bg-gray-50">
        <img
          className=" mx-auto max-w-screen-xl px-15 py-20"
          src="https://cdn-icons-png.flaticon.com/256/4105/4105448.png"
        />
        <div
          className="mx-auto max-w-screen-xl px-20 
        lg: flex lg: h - screen lg: items - center "
        >
          {" "}
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Generate Title, Description for Your Content{" "}
              <strong className="font-extrabold text-blue-700 sm:block">
                {" "}
                Effortlessly with AI.{" "}
              </strong>{" "}
            </h1>{" "}
            <p className="mt-4 sm:text-xl/relaxed">
              Automate your form creation process and{" "}
              <strong className="font-extrabold text-blue-700 ">
                {" "}
                save time with our intelligent AI{" "}
              </strong>{" "}
              - powered form builder.{" "}
            </p>{" "}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={"/dashboard"}>
                <Button className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                  Start for Free
                </Button>
              </Link>
              <Link href={"/dashboard"}>
                <Button className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                  Learn More...
                </Button>
              </Link>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
}
