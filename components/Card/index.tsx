import Link from "next/link";

interface Props {
  title: string;
  description: string;
}

export default function Card({ title, description }: Props) {
  return (
    <div className="max-w-[30rem] bg-[#00008B] px-4 py-8 text-white md:px-12 md:py-12 gap-y-10 rounded flex flex-col justify-between">
      <h1 className="text-2xl font-hanson">{title}</h1>

      <p className="font-ubuntu">{description}</p>

      <button className="px-6 py-2.5 bg-[#fff] text-black rounded font-ubuntu font-semibold">
        <Link href={'/contactUs'}>Contact Us</Link>
      </button>
    </div>
  );
}
