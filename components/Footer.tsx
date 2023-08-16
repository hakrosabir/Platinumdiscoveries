import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#EFECEC] flex justify-around py-8 xl:py-20 font-ubuntu">
      <div>
        <h3 className="text-2xl mb-8">Useful Links</h3>
        <ul className="grid gap-y-6 text-blue-400 underline underline-offset-2">
          <li className="hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">About us</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">Contact us</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">Visit</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl mb-8">Schools</h3>
        <ul className="grid gap-y-6 text-blue-400 underline underline-offset-2">
          <li className="hover:text-blue-500">
            <Link href="/">UK</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">USA</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">England</Link>
          </li>

          <li className="hover:text-blue-500">
            <Link href="/">London</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
