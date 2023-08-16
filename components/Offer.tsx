import Card from "./Card";

export default function Offer() {
  return (
    <div className="z-10 pt-16 md:pt-40 xl:pt-44 text-center px-4 md:px-0 xl:px-40">
      <h1 className="text-2xl md:text-3xl text-[#00008B] mb-4 font-hanson">
        What do we offer?
      </h1>

      <p className="text-base font-ubuntu">
        We offer range of services to easy your Immigration, travel and study,
        night booking and purchase of properties
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-20 place-items-center">
        <Card
          title="Study Abroad"
          description="We help lots of young people from around the world to study at the
        universities of their choices, from university selection and application
        process till you settle down at the University of your choice."
        />
        <Card
          title="Book Flight"
          description="We help lots of young people from around the world to study at the
        universities of their choices, from university selection and application
        process till you settle down at the University of your choice."
        />
        <Card
          title="Hotel Reservations"
          description="We help lots of young people from around the world to study at the
        universities of their choices, from university selection and application
        process till you settle down at the University of your choice."
        />
        <Card
          title="Counseling Unit"
          description="We help lots of young people from around the world to study at the
        universities of their choices, from university selection and application
        process till you settle down at the University of your choice."
        />
      </div>
    </div>
  );
}
