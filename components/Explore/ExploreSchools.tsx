import ExploreCard from "./Card";
import { schoolsData } from "./data";

export default function ExploreSchool() {
  return (
    <div className="text-center py-12 md:py-20 bg-[#00008B] text-white mt-20 px-4 md:px-16 lg:px-20">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl mb-4 font-hanson">
          Explore Schools
        </h1>
        <p className="font-ubuntu">
          Check out some of the most popular schools
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {schoolsData.map((school) => (
          <div key={school.id}>
            <ExploreCard
              name={school.name}
              description={school.description}
              id={String(school.id)}
              url={school.url}
            />
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ExploreCard
          university="New East University"
          info="Near East University was established in 1988, is located in Nicosia,
          capital of North Cyprus, and as an international higher education
          institution employing highly qualified…"
        />

        <ExploreCard
          university="Cyprus International University"
          info="Cyprus International University (CIU) is located just
            5 km to the center of Nicosia, the capital of Northern Cyprus. The university is a private educational…"
        />

        <ExploreCard
          university="Eastern Mediterranean University"
          info="Eastern Mediterranean University (EMU) is the only public university located to the North of 
            the Mediterranean island of Cyprus. Established in 1979, EMU is the…"
        />

        <ExploreCard
          university="Girne American University"
          info="The Girne American University (GAU) was founded in 1985 as the first private higher 
            education institution in Northern Cyprus and recently celebrated its 30th anniversary.…"
        />

        <ExploreCard
          university="Girne American University"
          info="The Girne American University (GAU) was founded in 1985 as the first private higher 
            education institution in Northern Cyprus and recently celebrated its 30th anniversary.…"
        />

        <ExploreCard
          university="Girne American University"
          info="The Girne American University (GAU) was founded in 1985 as the first private higher 
            education institution in Northern Cyprus and recently celebrated its 30th anniversary.…"
        />
      </div> */}
    </div>
  );
}
