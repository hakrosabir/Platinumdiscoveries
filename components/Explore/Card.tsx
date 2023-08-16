import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  description: string;
  id: string;
  url: string;
}

export default function ExploreCard({ name, description, id, url }: Props) {
  return (
    <div className="max-w-[30rem] border px-2 md:px-4 py-6 md:h-[480px]">
      <div className="flex flex-col justify-between items-center">
          <Image className="h-[80px] w-[80px] md:h-[120px] md:w-[120px] rounded-full mb-10 bg-white" alt='university logo' src={`/images/${url}`} width={80} height={120} />
        <p className="text-xl mb-10 font-hanson">{name}</p>
        <p className="mb-10 font-ubuntu">{description.slice(0, 180)}...</p>
        <Link
          href={`/${id}`}
          className="bg-[#fff] px-6 py-2 text-black font-ubuntu font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
