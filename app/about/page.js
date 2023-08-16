import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div>
        <div
          className="w-full bg-cover bg-center hidden md:block"
          style={{
            height: '32rem',
            backgroundImage: 'url(/images/about.jpg)',
          }}
        ></div>
        <div
          className="w-full bg-cover bg-center block md:hidden"
          style={{
            height: '10rem',
            backgroundImage: 'url(/images/about.jpg)',
          }}
        ></div>
        <section className="px-4 my-20 flex justify-center text-justify">
          <div className="max-w-4xl flex flex-col gap-y-5 font-ubuntu">
            <h2 className="font-bold text-center font-hanson text-2xl text-[#00008B]">
              PLATINUM DISCOVERIES (PLATINUM INT. LTD).
            </h2>
            <p>
              Welcome to our international consulting organization! Founded in
              September 2018, we specialize in assisting students with admission
              into undergraduate and Post Graduate studies in their country of
              choice. Our services go beyond admissions, as we provide support
              with visa processing, resident permit procedures, flight bookings,
              and accommodation reservations.
            </p>
            <p>
              This channel is not only a platform to showcase our work but also
              a source of empowerment, education, and information for students,
              graduates, and small business owners aiming to achieve their goals
              through new opportunities. Join us as we delve into various
              topics, including the best universities to study at, helping with
              internship opportunities, crafting an impressive academic CV and
              cover letter, ideal vacation destinations, career advancement
              strategies, and much more. Stay tuned for valuable insights that
              will shape your future
            </p>
            <p>
              Considering the hardship and other situation people have
              encountered from traveling agents and admission agents , this
              company was raised to bring solutions to such situation, to help
              the stranded ones and assist those who has interest to study and
              travel with an affordable price{' '}
            </p>
            <p>We look forward to render our assistance.</p>
          </div>
        </section>
        <section className="">
          <div className="md:mx-20 mx-4">
            <h2 className="font-bold text-center font-hanson mb-10 text-[#00008B] text-2xl md:text-3xl">
              Some testimonies
            </h2>
            <div className="flex justify-center items-center">
              <iframe
                src="https://widget.senja.io/widget/1b48a370-4734-4250-8cfd-c52ec552fcb4"
                loading="lazy"
                height="330px"
                width="100%"
                scrolling="yes"
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxWidth: '1000px',
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
