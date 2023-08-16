"use client";

import { schoolsData } from "@/components/Explore/data";
import Youtube from "react-youtube";

export default function Page({ params }: { params: { slug: string } }) {
  // filter out by id; If slug ( string ) equals to id (Number) to be passed in,

  const school = schoolsData.filter((item) => String(item.id) === params.slug);

  const [{ name, description, url, id }] = school;

  const opts = {
    height: "250",
    width: "300",
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-10 md:py-20 px-4 md:px-0">
      <h3 className="font-hanson text-2xl md:text-3xl mb-4">{name}</h3>
      <div className="text-center flex justify-center mb-4">
        <Youtube videoId={url} id={id} className="hidden md:block" />
        <Youtube
          videoId={url}
          id={id}
          opts={opts}
          className="block md:hidden"
        />
      </div>
      <h4 className="font-ubuntu leading-[30px]">{description}</h4>
    </div>
  );
}
