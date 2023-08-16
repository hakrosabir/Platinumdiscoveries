import Image from 'next/image';

export default function Hero() {
  return (
    <div className="">
      <div className="relative pl-4 md:pl-20 xl:pl-40">
        <div className="w-full h-full md:h-[600px] absolute left-0 right-0">
          <Image
            src="/images/graduation.jpg"
            alt="travel"
            fill
            objectFit="cover"
            className="filter brightness-50"
          />
        </div>

        <div className="relative text-white py-16 font-ubuntu">
          <h1 className="max-w-[45rem] md:text-5xl text-3xl md:!leading-[50px] font-hanson">
            Hello! I am Freelancer. it is working.
            Study, Work, Relocate Abroad Easily, Book Flight, Rent and Buy
            Apartment
          </h1>
          <p className="max-w-[35rem] mt-6 md:mt-10">
            Welcome to Platinum Discoveries, an esteemed organization based in Switzerland with outlets in the UK, Nigeria, Netherlands, and Turkey. We specialize in providing comprehensive assistance to students, graduates, and small business owners. Our mission is to help individuals achieve their goals by offering guidance and support throughout the admission process, scholarship opportunities, internship and job placements, and more. Join us as we embark on a journey together, helping you secure the opportunities you've always desired.
          </p>

          <button className="bg-blue-400 text-white mt-10 px-6 py-3 rounded font-semibold hover:bg-blue-500 transition-all ease-in-out duration-500">
            <a href="/about"> Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
}
